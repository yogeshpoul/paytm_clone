
import { useEffect, useState } from "react"
import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Dashboard=()=>{
    const [balance,setBalance]=useState(null);
    const [name,setName]=useState('');
    const [notifications,setNotifications]=useState('');
    
    useEffect(() => {
        const fetchBalance = async () => {
          try {
            const response = await axios.get(
              "https://paytm-clone-coral-two.vercel.app/api/v1/account/balance",
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
      }, [notifications]);

      const fetchNotifications = async () => {
        // console.log("reacthed")
        try {
          const response = await axios.get(`https://paytm-clone-coral-two.vercel.app/api/v1/account/notifications`,
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
          );
          setNotifications(response.data);
          console.log(response.data)
          toast.success(`Payment Received Rs ${response.data[0].amount} from ${response.data[0].senderName}`);
        } catch (error) {
          console.error('Error fetching notifications:', error);
        }
      };
    
      // Fetch notifications initially and then poll every 5 seconds
      useEffect(() => {
        fetchNotifications();
        
        const interval = setInterval(fetchNotifications, 5000);
        return () => clearInterval(interval);
      }, []);

    return <div>
        <Appbar name={name}/>
        <div className="m-8">
            <Balance value={balance}/>
            <Users/>
        </div>
        <ToastContainer />
    </div>
}