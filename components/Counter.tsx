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
        className="rounded-none w-7 h-7 border text-sm flex items-center justify-center"
        onClick={handleDecrease}
      >
        -
      </Button>
      <div className="w-7 h-7 border  text-center text-sm flex items-center justify-center">
        {count}
      </div>
      <Button
        variant={"outline"}
        className="rounded-none w-7 h-7 border text-sm flex items-center justify-center"
        onClick={handleIncrease}
      >
        +
      </Button>
    </div>
  );
};
