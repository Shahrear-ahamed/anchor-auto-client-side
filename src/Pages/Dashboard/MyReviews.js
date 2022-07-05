import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const MyReviews = () => {
  const [user, loading] = useAuthState(auth);
  const url = `https://anchor-tools.herokuapp.com/review/${user.email}`;
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch(url).then((res) => res.json())
  );
  if (loading || isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="dashboard-title">My Reviews</h2>
      <p>Total my reviews {reviews.length}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div
            key={review._id}
            className="shadow-lg rounded-md bg-white my-5 py-3 px-5"
          >
            <h3 className="text-secondary font-semibold">
              {review.productName}
            </h3>
            <p>
              <small>{review.name}</small>
            </p>
            <p className="my-2">{review.reviewMessage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
