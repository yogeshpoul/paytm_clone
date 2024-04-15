import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import SubHeading from "../components/SubHeading"
import axios from "axios"


export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return <div className="flex justify-center bg-gray-900 h-screen">
            {/* <div className="bg-white">
            username is {email}
            password is {password}
            firstName is {firstName}
            lastname is {lastName}
            </div> */}

        <div className="flex flex-col flex-justify-center m-auto">

            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign Up"} />
                <SubHeading label={"Enter your infromation to create account"} />
                <InputBox onChange={(e) => {
                    setFirstName(e.target.value)
                }} label={"First Name"} placeholder={"Yogesh"} />
                <InputBox onChange={(e) => {
                    setLastName(e.target.value)
                }} label={"Last Name"} placeholder={"Poul Patil"} />
                <InputBox onChange={(e) => {
                    setUsername(e.target.value)
                }} label={"Email"} placeholder={"yogeshpoul9999@gmail.com"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value)
                }} label={"password"} placeholder={"IlovePriya"} />
                <div className="pt-4">
                    <Button onClick={async() => {
                        const response=await axios.post("https://paytm-clone-coral-two.vercel.app/api/v1/user/signup", {
                            username,
                            firstName,
                            lastName,
                            password
                        })
                        localStorage.setItem("token",response.data.token)
                    }} label={"Sign up"} />
                </div>
                <BottomWarning label={"Already have an account ? "} buttonText={"Sign In"} to={"/signin"} />
            </div>
        </div>
    </div>
}