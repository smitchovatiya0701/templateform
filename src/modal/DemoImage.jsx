import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Modal from "react-modal";
import { redirect } from "react-router-dom";

const DemoImage = ({
  forDemoModal,
  setForDemoModal,
  handleImageGenerate,
  cardRef,
  data,
  id,
  setId,
  setEditEntry,
  setCombineEntry,
  deleteEntry,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
    setForDemoModal(false);
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
  const handleReset = () => {
    redirect("/");
    closeModal();
  };

  useEffect(() => {
    if (forDemoModal) {
      openModal();
    } else {
      closeModal();
    }
  }, [forDemoModal]);
  return (
    <Modal
      ariaHideApp={false}
      className={"relative h-auto w-[340px] bg-white rounded-lg shadow-modal"}
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
           Your Image
          </div>
          <div className="p-[6px] pr-[2px] cursor-pointer" onClick={closeModal}>
            <img
              src={"/svgs/close.svg"}
              alt="not found"
              className="w-5 h-5"
            />
          </div>
        </div>
        <div className="relative z-0 mb-3 mx-auto" ref={cardRef}>
          <img
            src="/pngs/inner.png"
            alt="img"
            className="mx-auto w-[215px] h-[300px] object-contain "
          />
          {/* <div className=" flex items-center gap-[50px]"> */}
            {data.image && (
              <img
                src={URL.createObjectURL(data.image)}
                alt="Selected Image"
                className="w-[50px] h-[50px] rounded-[100%] object-fill fixed z-30 bottom-[29%] left-[81px]"
              />
            )}
            
          {/* </div> */}
          <p className=" absolute  w-[90px] text-center right-[46px] bottom-[95px] leading-none text-black font-bold  text-[8px]">
              {data.name} / {data.city}
            </p>
        </div>
        <div className="flex justify-between items-center gap-[10px] w-full">
          <div className="py-1 text-[12px] px-3 hover:text-white border-gray-600 border rounded-lg hover:bg-slate-500 font-semibold">
            <button onClick={handleImageGenerate}>Download</button>
          </div>
          <div className="py-1 px-3 text-[12px] hover:text-white border-gray-600 border rounded-lg hover:bg-slate-500 font-semibold">
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DemoImage;
