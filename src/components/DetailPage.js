import React, { useState } from "react";
import { CiHeart, CiShare2 } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { changePage } from "../utils/itemSlice";
import ItemCard from "./ItemCard";
const DetailPage = () => {
  const dispatch = useDispatch();
  dispatch(changePage(false));
  const [showDetail, setShowDetail] = useState(true);
  const itemList = useSelector((store) => store.item.itemList);
  const postId = useParams();
  const postInfo = itemList.filter((item) => item.id == postId.id);
  const { userId, id, title, body } = postInfo[0];
  return (
    <div className="flex flex-col items-center w-full bg-[#f4f4f4]">
      <div className="flex flex-col  w-full h-[28rem] p-8">
        <h1 className="font-medium text-2xl my-2 p-2 text-left">
          Post Number {id}{" "}
        </h1>
        <div className="flex  justify-center w-full py-4">
          <div className="flex flex-col items-center justify-center h-[20rem] w-[50%] ">
            <img
              className="w-full h-full object-cover rounded-[1.2rem]"
              src={`https://picsum.photos/200?random=${id}`}
              alt="body-pic"
            />
            <div className="flex items-center justify-between mt-[-2.5rem] text-white w-full px-2 pb-2">
              <h2 className="bg-transparent font-medium capitalize ">
                {title.substring(0, 20)}
              </h2>
              <div className="flex items-center justify-center gap-2">
                <CiShare2 size={24} />
                <CiHeart size={24} />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full items-start justify-start px-8 py-2">
            <div className="flex gap-4">
              <button
                className={
                  showDetail
                    ? "bg-[#f05a22] text-white px-4 py-1 rounded-lg"
                    : "bg-white px-4 py-1 rounded-lg"
                }
                onClick={() => setShowDetail(!showDetail)}
              >
                Detail
              </button>
              <button
                className={
                  +showDetail
                    ? "bg-white px-4 py-1 rounded-lg"
                    : "bg-[#f05a22] text-white px-4 py-1 rounded-lg"
                }
                onClick={() => setShowDetail(!showDetail)}
              >
                User Info
              </button>
            </div>
            {showDetail ? (
              <p className="py-10 text-[#898989] first-letter:capitalize">
                {body}
              </p>
            ) : (
              <p className="py-10 text-[#898989]">
                Post Was Posted By {userId}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full py-8">
        <h1 className="font-medium text-2xl py-4 text-left px-8">More Posts</h1>
        {
          <div className="p-4 bg-[#f4f4f4] flex flex-wrap items-center justify-around mx-auto gap-8 w-full">
            {itemList.map((item) => (
              <Link key={item.id} id={item.id} to={"/item/" + item.id}>
                <ItemCard id={item.id} item={item} />
              </Link>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default DetailPage;
