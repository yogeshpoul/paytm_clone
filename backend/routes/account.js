// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account, User } = require('../db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance", authMiddleware, async (req, res) => {
    // console.log("hi there"+account)
    const account = await Account.findOne({
        userId: req.userId
    });

    const user=await User.findOne({
        _id:req.userId
    })
    res.json({
        balance: account.balance,
        name:user.firstName,
        username:user.username
    })
});
let notifications=[{sample:"sample"}]

router.get("/notifications",authMiddleware,async(req,res)=>{
    const userId = req.userId;
    
    
    // Filter notifications for the user
    const userNotifications = notifications.filter(notification => notification.to === userId);
    console.log(userNotifications)

    // Clear notifications for the user
    notifications = notifications.filter(notification => notification.to !== userId);

    res.json(userNotifications);
    notifications.filter
})

router.post("/transfer", authMiddleware, async (req, res) => {
    console.log(req.body)
    const session = await mongoose.startSession();

    session.startTransaction();
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    notifications.push({to,amount})
    res.json({
        message: "Transfer successful",
        account,
        notifications
    });
});

module.exports = router;