import React from "react";

const AdminDeleteOrder = ({ adminDeleteModal, productDeleteByAdmin }) => {
  const { _id, productName } = adminDeleteModal;
  return (
    <>
      <input type="checkbox" id="deleteOrderAdmin" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box py-3 px-5">
          <div name="delete-admin-order">
            <label
              htmlFor="deleteOrderAdmin"
              className="btn btn-sm btn-circle bg-secondary border-0 absolute right-2 top-2 hover:rotate-180 duration-200 text-white hover:text-gray-200"
            >
              ✕
            </label>
            <h3 className="text-2xl font-semibold mb-2">
              Do you delete this{" "}
              <span className="inline-block">{productName}</span>
            </h3>
            <div>
              <button
                onClick={() => productDeleteByAdmin(_id)}
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

export default AdminDeleteOrder;
