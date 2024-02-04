import { useEffect } from "react";
import { MAIN_URL } from "./constants";
import { useDispatch } from "react-redux";
import { addItem } from "./itemSlice";

const useGetItem = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchItemList();
  }, []);
  async function fetchItemList() {
    try {
      const res = await fetch(MAIN_URL);
      const itemList = await res.json();
      dispatch(addItem(itemList));
    } catch (error) {}
  }
};

export default useGetItem;
