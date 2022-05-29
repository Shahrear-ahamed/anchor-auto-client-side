import React from "react";

const AdminDeleteModal = ({ deleteModal, AdminDeleteModal }) => {
  const { _id, name } = deleteModal;

  return (
    <>
      <input type="checkbox" id="adminDeleteModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box py-3 px-5">
          <div name="order">
            <label
              htmlFor="adminDeleteModal"
              className="btn btn-sm btn-circle bg-secondary border-0 absolute right-2 top-2 hover:rotate-180 duration-200 text-white hover:text-gray-200"
            >
              ✕
            </label>
            <h3 className="text-2xl font-semibold mb-2">
              Do you delete this <span className="inline-block">{name}</span>
            </h3>
            <div>
              <button
                onClick={() => AdminDeleteModal(_id)}
                className="bg-red-500 text-white rounded-sm py-1 px-3"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDeleteModal;
