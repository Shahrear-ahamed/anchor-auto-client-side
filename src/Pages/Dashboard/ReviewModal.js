import React, { useState } from "react";
import { toast } from "react-toastify";

const ReviewModal = ({ showModalData, setShowModalData }) => {
  const { name, email, productName } = showModalData;
  const [error, setError] = useState("");
  const handleReview = (e) => {
    e.preventDefault();
    const rating = e.target.rating.value;
    const reviewMessage = e.target.reviewMessage.value;
    const reviewData = {
      name,
      email,
      productName,
      reviewMessage,
      rating,
    };
    if (rating && reviewMessage) {
      fetch("https://anchor-tools.herokuapp.com/review", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
        body: JSON.stringify(reviewData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setShowModalData(null);
            toast.success("Review setSuccessfully");
          }
        });
    } else {
      setError("Please input all requirements");
    }
  };
  return (
    <>
      <input type="checkbox" id="review-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box py-3 px-5">
          <div name="order">
            <label
              htmlFor="review-modal"
              className="btn btn-sm btn-circle bg-secondary border-0 absolute right-2 top-2 hover:rotate-180 duration-200 text-white hover:text-gray-200"
            >
              ✕
            </label>
            <h3 className="text-2xl font-semibold mb-2">Review now</h3>
            <div className="w-32 h-[2px] bg-secondary"></div>
            <form onSubmit={handleReview} className="my-5 space-y-5">
              <input
                value={name}
                readOnly
                className="input input-bordered w-full"
              />
              <input
                value={email}
                readOnly
                className="input input-bordered w-full"
              />
              <select
                name="rating"
                defaultValue={"5 Star"}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select your Rating
                </option>
                {[...Array(5)].map((opt, i) => (
                  <option defaultValue={i} key={i}>{`${i + 1} Star`}</option>
                ))}
              </select>
              <textarea
                onClick={() => setError("")}
                name="reviewMessage"
                className="textarea textarea-bordered w-full"
                placeholder="Write Review"
              ></textarea>
              <br />
              {error && <p className="text-red-500">{error}</p>}
              <input
                type="submit"
                value="Give review"
                className="bg-secondary text-white px-7 py-2 cursor-pointer hover:bg-black"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewModal;
