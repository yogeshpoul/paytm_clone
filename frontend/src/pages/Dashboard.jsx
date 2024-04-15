
import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"


export const Dashboard=()=>{
    const [balance,setBalance]=useState(null);
    const [name,setName]=useState('');
    
    useEffect(() => {
        const fetchBalance = async () => {
          try {
            const response = await axios.get(
              "https://vercel.com/yogeshpoulpatils-projects/paytm-clone/api/v1/account/balance",
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            );
            setBalance(response.data.balance);
            setName(response.data.name)
          } catch (error) {
            console.error("Error fetching balance:", error);
          }
        };
        fetchBalance();
      }, []);

    return <div>
        <Appbar name={name}/>
        <div className="m-8">
            <Balance value={balance}/>
            <Users/>
        </div>
    </div>
}