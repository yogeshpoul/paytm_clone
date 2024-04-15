import { useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "../components/Button"
import axios from "axios";
import { useState } from "react";

export const SendMoney=()=>{
    const [searchParams]=useSearchParams();
    const id=searchParams.get("id");
    const name=searchParams.get("name");
    

    const [amount,setAmount]=useState(0)
    const navigate=useNavigate();
    

    return <div className="flex justify-center h-screen bg-gray-100">
        <div className="flex flex-col justify-center h-full">
            <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-xl">
                <div className="flex flex-col space-y-1.5 p-6"> 
                    <h2 className="font-bold text-center">Send Money</h2>
                </div>
                <div className="p-6">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                            <span className="text-2xl text-white">
                                {name[0].toUpperCase()}
                                
                            </span>
                        </div>
                        <h3 className="font-semibold text-2xl">{name}</h3>
                    </div>
                    <div className="space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label className="font-bold">Amount (in RS)</label>
                            <input onChange={(e)=>{
                                setAmount(e.target.value)
                                
                            }}type="Number" placeholder="Enter Amount" id="amount" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></input>
                            <Button onClick={()=>{
                                axios.post("http://localhost:3000/api/v1/account/transfer",{
                                    amount,
                                    to:id
                                },{
                                    headers:{
                                        Authorization:"Bearer "+localStorage.getItem("token")
                                    }
                                }).then(function(response){
                                    console.log(response.data.message)
                                    if(response.data.message=="Transfer successful"){
                                        alert("transfer successful")
                                        navigate("/dashboard")
                                    }
                                })
                            }} label={"Initiate Transfer"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}