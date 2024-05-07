import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";

const CreateBy = ({
  forModal,
  setForModal,
  id,
  setId,
  setEditEntry,
  setCombineEntry,
  deleteEntry,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
    setForModal(false);
    setId && setId("");
    document.body.style.overflow = "unset";
  };
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const handleDelete = () => {
    deleteEntry(id); // Call the delete function with the id of the entry
    closeModal(); // Close the modal after deletion
    toast.success("Successfully deleted!");
  };
  const handleOpenEmail = () => {
    window.open(`mailto:${`ekceroinfotech@gmail.com`}`);
  };
  const handleOpenContact1 = () => {
    window.open(`tel:${`+9194093 27827`}`);
  };
  const handleOpenContact = () => {
    window.open(`tel:${`+9197730 63667`}`);
  };
  const handleOpenfb = () => {
    window.open(`https://www.facebook.com/ekceroinfotech`);
  };
  const handleOpenInsta = () => {
    window.open(`https://www.instagram.com/ekcero_infotech?igsh=MWFlYXp6N2xuc2V5YQ==`);
  };
  useEffect(() => {
    if (forModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [forModal]);
  return (
    <Modal
      ariaHideApp={false}
      className={"relative h-auto w-[365px] bg-white rounded-lg shadow-modal"}
      onRequestClose={closeModal}
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 100,
        },
        content: {
          backgroundColor: "rgba(255, 255, 255)",
          outline: "none",
          position: "absolute",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          padding: 0,
          boxShadow:
            "0px 0px 8px 0px rgba(0, 0, 0, 0.20), 0px 14px 28px 0px rgba(0, 0, 0, 0.24)",
        },
      }}
    >
      <div className="flex flex-col justify-center items-start p-6 gap-[20px]">
        <div className="w-full flex justify-center items-center gap-2">
          <div className="w-full text-[#242424] font-inter text-[17px] font-bold">
            Contact Information
          </div>
          <div className="p-[6px] pr-[2px] cursor-pointer" onClick={closeModal}>
            <img
              src={"/src/assets/svg/close.svg"}
              alt="not found"
              className="w-5 h-5"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h4 className="font-bold text-[18px]">Ekcero Infotech</h4>
          <div className="flex flex-col gap-0.5 w-full">
            <h5 className="font-medium text-[14px] text-black"> Email :</h5>
            <span
              onClick={handleOpenEmail}
              className="p-2 w-full text-[#242424] text-[14px] font-bold border border-gray-700 rounded-lg cursor-pointer"
            >
              ekceroinfotech@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-0.5 w-full">
            <h5 className="font-medium text-[14px] text-black"> Mobile :</h5>
            <span className="p-2 w-full text-[#242424] text-[14px]  border border-gray-700 rounded-lg font-bold">
              <p onClick={handleOpenContact} className="inline">
                {" "}
                +9197730 63667
              </p>{" "}
              &nbsp;|&nbsp;{" "}
              <p onClick={handleOpenContact1} className="inline">
                +9194093 27827
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h4>Social Links:</h4>
            <div className="flex gap-3">
              <div
                onClick={handleOpenfb}
                className="flex gap-1 items-center bg-blue-700 py-1 px-3 hover:bg-blue-800 rounded-lg cursor-pointer"
              >
                <img src="/src/assets/svg/facebook.svg" className="w-4 h-4" />
                <span className="text-white text-[15px]">Facebook</span>
              </div>
              <div
                onClick={handleOpenInsta}
                className="flex items-center gap-1 bg-red-600 py-1 px-3 hover:bg-red-700 rounded-lg cursor-pointer"
              >
                <img src="/src/assets/svg/insta.svg" className="w-4 h-4" />
                <span className="text-white text-[15px]">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateBy;
