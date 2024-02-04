import React from "react";
import useGetItem from "../utils/useGetItem";
import Spinner from "./Spinner";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { changePage } from "../utils/itemSlice";
const Home = () => {
  const itemList = useSelector((store) => store.item.itemList);
  const dispatch = useDispatch();
  dispatch(changePage(true));
  useGetItem();
  if (!itemList) return <Spinner />;
  return (
    <div className=" mx-auto flex flex-col justify-center bg-[#f4f4f4]">
      <div className="flex flex-col item-center justify-center ">
        <h1 className="p-4 my-2 mx-2 text-4xl font-semibold">Social Media For Travellers</h1>
        <div className="bg-white border w-[95%] h-8 p-2 mx-auto rounded-xl flex items-center">
          <IoSearchOutline />{" "}
          <span className="text-sm p-2"> Search here ....</span>
        </div>
      </div>
      <div className="p-4 bg-[#f4f4f4] flex flex-wrap items-center justify-around mx-auto gap-8 w-full">
        {itemList.map((item) => (
          <Link key={item.id} id={item.id} to={"/item/" + item.id}>
            <ItemCard id={item.id} item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
