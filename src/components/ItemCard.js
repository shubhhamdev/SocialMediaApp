import React from "react";
const ItemCard = ({ item }) => {
  const { id, title, body } = item;
  return (
    <div className="px-7 py-4 bg-white flex flex-col items-center justify-around w-[24rem] h-[24rem] rounded-lg">
      <img
        src={`https://picsum.photos/200?random=${id}`}
        alt="item-pic"
        className="w-full h-[60%] object-cover rounded-lg"
      />
      <div className="flex items-center justify-between w-60%">
        <div>
          <h2 className="py-2 text-sm font-medium capitalize">{title}</h2>
          {body.length < 80 ? (
            <p className="py-2 text-sm h-[20%] first-letter:capitalize">
              {body}
            </p>
          ) : (
            <p className="py-2 text-sm h-[20%] first-letter:capitalize">
              {body.substring(0, 80)}
              <span className="text-[#f05a22] text-sm font-medium">
                Read more ..
              </span>{" "}
            </p>
          )}
        </div>
        <div className="bg-gradient-to-b from-[#f05a22] px-4 py-2 m-2 rounded-lg">
          <p className="-rotate-90 text-white"> V </p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
