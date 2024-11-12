import React, { useState } from "react";
import { useAuth } from "../../ContextAuth/ContextAuth";
import { CiEdit } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import ModalEdit from "./ModalEdit";
const UserProfile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  const openEditModal = () => {
    const modal = document.getElementById("my_modal_3"); // Get the modal element
    modal.showModal(); // Show the modal
  };

  return (
    <div className="">
      <div className="relative flex items-center justify-center w-[100px] h-[100px] overflow-hidden bg-gray-100 rounded-full dark:bg-black">
        <span className="font-bold text-gray-600 dark:text-gray-300 text-[60px]  h-full flex items-center justify-center">
          {/* {user?.fullName[0]} */}
        </span>
      </div>

      <div className="p-2 pt-4 text-black space-y-1">
        <h2 className="">
          {" "}
          name: <span className="font-bold text-xl">{user?.fullName}</span>
        </h2>
        <p>
          Email:{" "}
          <span className="text-sm text-gray-400 font-semibold">
            {user?.email}
          </span>
        </p>
      </div>
      <div className="px-2 py-2  space-x-2 flex items-center ">
        <button
          onClick={openEditModal}
          className="bg-black hover:bg-gray-800 text-white p-2 rounded flex  items-center"
        >
          Edit Pro
          <CiEdit />
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-800 text-white p-2 rounded flex  items-center"
        >
          Log Out <CiLogout />
        </button>

        <ModalEdit />
      </div>
    </div>
  );
};

export default UserProfile;
