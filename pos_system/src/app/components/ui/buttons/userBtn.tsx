"use client";
import React, { useState } from "react";
import Modal from "../modal/Modal";
import AccountEdit from "../forms/AccountEdit";

export default function UserBtn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Edit Profile
      </button>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <AccountEdit onClose={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}
