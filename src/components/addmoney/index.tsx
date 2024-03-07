import { FaAt, FaCreditCard } from "react-icons/fa6";
import { HiOutlineHashtag } from "react-icons/hi";
import { MdDrafts } from "react-icons/md";
import { TbCashBanknote } from "react-icons/tb";
import { TiLocationArrow } from "react-icons/ti";

const AddMoney = () => {
  return (
    <div className="mt-10 mb-5 shadow-md justify-center bg-white p-5" >
      <div className="flex flex-row gap-10 mx-3 my-5">
        <FaAt />
        <div>
          <h4>Share your @Username</h4>
          <p>Recieve money from other SliceApp users with unique Username</p>
        </div>
      </div>


      <div className="flex flex-row gap-10 mx-3 my-5">
        <MdDrafts />
        <div>
          <h4>Overdraft</h4>
          <p>Borrow from your overdraft account for a small daily fee</p>
        </div>
      </div>

      <div className="flex flex-row gap-10 mx-3 my-5">
        <TiLocationArrow />
        <div>
          <h4>Bank Transfer</h4>
          <p>From bank app or internet banking</p>
        </div>
      </div>

      <div className="flex flex-row gap-10 mx-3 my-5">
        <HiOutlineHashtag />
        <div>
          <h4>USSD</h4>
          <p>With your other bank's USSD code</p>
        </div>
      </div>

      <div className="flex flex-row gap-10 mx-3 my-5">
        <FaCreditCard />
        <div>
          <h4>Card</h4>
          <p>Add money with a debit card</p>
        </div>
      </div>

      <div className="flex flex-row gap-10 mx-3 my-5
      ">
        <TbCashBanknote />
        <div>
          <h4>Cash Deposit</h4>
          <p>Deposit cash at our partner banks</p>
        </div>
      </div>
    </div>
  );
};

export default AddMoney;
