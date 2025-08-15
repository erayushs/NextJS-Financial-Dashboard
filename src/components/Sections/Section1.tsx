import React from "react";
import TransactionSnapshot from "../TransactionSnapshot";
import ToDos from "../ToDos";

const Section1 = () => {
  return (
    <div className="h-[300px] m-4 flex gap-4">
      <TransactionSnapshot />
      <ToDos />
    </div>
  );
};

export default Section1;
