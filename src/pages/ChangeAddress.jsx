import React, { useState } from "react";

const ChangeAddress = ({ setIsModalOpen, setAddress }) => {
  const [newAddress, setNewAddress] = useState("");
  const newAddressHandle = (e) => {
    setAddress(newAddress);
    setIsModalOpen(false);
  };
  return (
    <div className="">
      <input
        type="text"
        placeholder="Enter New Address"
        className="border rounded p-2 w-full mb-4"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          onClick={() => newAddressHandle()}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
