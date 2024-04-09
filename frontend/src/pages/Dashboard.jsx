import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard=()=>{
    return <div>
        <Appbar/>
        <div className="m-8">
            <Balance value={"100"}/>
            <Users/>
        </div>
    </div>
}