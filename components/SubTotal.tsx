// components/SubtotalComponent.tsx
import React from "react";

interface SubtotalProps {
  price: number;
  count: number;
}

const SubTotal: React.FC<SubtotalProps> = ({ price, count }) => {
  const subtotal = price * count;

  return (
    <div className="py-4 flex justify-between">
      <p>Sub-total</p>
      <p>${subtotal.toFixed(2)}</p>
    </div>
  );
};

export default SubTotal;
