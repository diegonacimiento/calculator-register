import React from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsTrash3 } from "react-icons/bs";
import { Sum } from "../types/sums.models";
import useSums from "../hooks/useSums";

interface ItemsProps {
  sum: Sum;
}

const Items: React.FC<ItemsProps> = ({ sum }) => {
  
  const { removeSum, addAmount, removeAmount } = useSums();

  const handleDelete = () => {
    removeSum(sum);
  };

  const handleAddAmount = () => {
    addAmount(sum);
  };

  const handleRemoveAmount = () => {
    removeAmount(sum);
  };
  return (
    <>
      <p className="text-center">{sum.product}</p>
      <p>{sum.price}</p>

      <div className="flex justify-center gap-2 w-full">
        <button
          title="Eliminar unidad"
          type="button"
          onClick={handleRemoveAmount}
          className="rounded-full md:p-1 hover:bg-slate-400 hover:bg-opacity-10"
        >
          <AiOutlineMinusCircle />
        </button>
        <p>{sum.amount}</p>
        <button
          title="Agregar unidad"
          type="button"
          onClick={handleAddAmount}
          className="rounded-full md:p-1 hover:bg-slate-400 hover:bg-opacity-10"
        >
          <AiOutlinePlusCircle />
        </button>
      </div>

      <p>{parseInt(sum.price) * sum.amount}</p>

      <button
        title="Eliminar suma"
        type="button"
        className="rounded-full md:p-1 hover:bg-red-400 hover:bg-opacity-10 text-red-700"
        onClick={handleDelete}
      >
        <BsTrash3 />
      </button>
    </>
  );
};

export default Items;
