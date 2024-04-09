import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import SubHeading from "../components/SubHeading"

export const Signin=()=>{
    return <div className="flex justify-center bg-gray-900 h-screen">

        <div className="flex justify-center flex-col">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign in"}/>
                <SubHeading label={"Enter your credentials to access your account"}/>
                <InputBox label={"Email"} placeholder={"yogeshpoul9999@gmail.com"}/>
                <InputBox label={"Password"} placeholder={"IlovePriya"}/>
                <div className="pt-3">
                    <Button label={"Sign in"}/>
                </div>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}/>
            </div>
        </div>
    </div>
}