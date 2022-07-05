import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const UseDataLoad = () => {
  const [user] = useAuthState(auth);
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["myOrders", user.email], () =>
    fetch(`https://anchor-tools.herokuapp.com/myorder/${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    }).then((res) => res.json())
  );
  return [orders, isLoading, refetch];
};
export default UseDataLoad;
