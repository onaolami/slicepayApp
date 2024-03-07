import AddMoney from "@/components/addmoney";
import AuthHeader from "@/components/authheader";
import Balance from "@/components/balance";
import Payment from "@/components/payment";
import Transfer from "@/components/tranfer";
import Transaction from "@/components/transactions";

const Dashboard= ()=>{
  return(
    <div className="w-7/12 mx-auto">
     <AuthHeader/>
     <Balance/>
     <Payment/>
     <Transaction/>
     
    </div>
  )
}


export default Dashboard;

