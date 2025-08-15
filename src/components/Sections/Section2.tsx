import React from "react";
import TransactionSnapshot from "../TransactionSnapshot";
import ToDos from "../ToDos";
import AssetsUnderMangement from "../AssetsUnderMangement";
import NseBse from "../NseBse";

const Section1 = () => {
  return (
    <div className="h-[300px] m-4 flex gap-4">
      <AssetsUnderMangement />
      <NseBse />
    </div>
  );
};

export default Section1;
