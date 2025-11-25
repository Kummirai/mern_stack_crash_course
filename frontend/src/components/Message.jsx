import React from "react";

const Message = ({ message }) => {
  return (
    <div className={message === "" ? "hidden" : "absolute block"}>
      {message.success === true ? (
        <div
          className={
            " bg-green-100 text-green-800 py-2 px-8 border border-green-500 rounded-lg"
          }
        >
          <p>{message.message}</p>
        </div>
      ) : (
        <div className=" bg-red-100 text-red-800 py-2 px-8 border border-red-500 rounded-lg">
          <p>{message.message}</p>
        </div>
      )}
    </div>
  );
};

export default Message;
