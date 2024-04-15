import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    return <div className="flex justify-center bg-gray-900 h-screen">

        <div className="flex justify-center flex-col">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox onChange={(e)=>{
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"yogeshpoul9999@gmail.com"}/>
                <InputBox onChange={(e)=>{
                    setPassword(e.target.value)
                }} label={"Password"} placeholder={"IlovePriya"}/>
                <div className="pt-3">
                    <Button onClick={async() => {
                        const response=await axios.post("https://vercel.com/yogeshpoulpatils-projects/paytm-clone/api/v1/user/signin", {
                            username,
                            password
                        })
                        localStorage.setItem("token",response.data.token);
                        navigate("/dashboard");
                    }} label={"Sign in"}/>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}