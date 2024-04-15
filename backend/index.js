const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: 'https://yogpay.vercel.app'
}));
app.use(express.json());

app.use("/api/v1", rootRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
