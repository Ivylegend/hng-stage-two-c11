"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { decrease, increase } from "@/lib/counter";

interface CounterProps {
  onCountChange?: (count: number) => void;
}

export const NumberCounter: React.FC<CounterProps> = ({ onCountChange }) => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    increase(setCount);
    if (onCountChange) {
      onCountChange(count + 1);
    }
  };

  const handleDecrease = () => {
    if (count > 0) {
      decrease(setCount);
      if (onCountChange) {
        onCountChange(count - 1);
      }
    }
  };

  return (
    <div className="flex">
      <Button
        variant={"outline"}
        className="rounded-none w-6 h-6 md:w-8 md:h-8 border text-sm flex items-center justify-center border-r-0"
        onClick={handleDecrease}
      >
        -
      </Button>
      <div className="w-6 h-6 md:w-8 md:h-8 border  text-center text-sm flex items-center justify-center">
        {count}
      </div>
      <Button
        variant={"outline"}
        className="rounded-none w-6 h-6 md:w-8 md:h-8 border text-sm flex items-center justify-center border-l-0"
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  );
};
