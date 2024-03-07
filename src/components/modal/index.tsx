import ReactModal from "react-modal";

ReactModal.setAppElement("#appRoot");

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}
const Modal = ({ isOpen, closeModal, children }: IProps) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="w-full h-full bg-black bg-opacity-70 fixed top-0 left-0 flex flex-col justify-start p-6"
      className="w-auto h-auto flow-root mx-auto"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
