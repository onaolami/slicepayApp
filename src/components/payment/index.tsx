"use client";
import { CiCirclePlus } from "react-icons/ci";
import { SlArrowUpCircle } from "react-icons/sl";
import Modal from "../modal";
import Transfer from "../tranfer";
import { useState } from "react";
import AddMoney from "../addmoney";

const Payment = () => {
  const [transferModalIsOpen, setTransferModalIsOpen] = useState(false);

  const closeTransferModal = () => {
    setTransferModalIsOpen(false);
  };
  const [addMoneyModalIsOpen, setAddMoneyModalIsOpen] = useState(false);
  
  const closeAddMoneyModal = () => {
    setAddMoneyModalIsOpen(false);
  };
  return (
    <div className=" mb-10  flex flex-row gap-5 justify-center">
      <button
        onClick={() => setTransferModalIsOpen(true)}
        className=" flex flex-row border-1 border-solid shadow-gray-400 shadow-md border-white size-1/5 justify-center gap-5"
      >
        <SlArrowUpCircle className="mt-3" />
        <h4 className="mb-3 mt-2">Transfer</h4>
      </button>

      <button
        onClick={() => setAddMoneyModalIsOpen(true)}
        className="flex flex-row border-1 border-solid shadow-gray-400 shadow-md border-white size-1/5 justify-center gap-5 "
      >
        <CiCirclePlus className="mt-3 w-5 h-5" />
        <h4 className="mb-3 mt-2">Add Money</h4>
      </button>

      <Modal isOpen={transferModalIsOpen} closeModal={closeTransferModal}>
        <Transfer />
      </Modal>

      <Modal isOpen={addMoneyModalIsOpen} closeModal={closeAddMoneyModal}>
        <AddMoney />
      </Modal>
    </div>
  );
};

export default Payment;
