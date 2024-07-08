export const increase = (
  setCount: React.Dispatch<React.SetStateAction<number>>
) => {
  setCount((prevCount) => prevCount + 1);
};

export const decrease = (
  setCount: React.Dispatch<React.SetStateAction<number>>
) => {
  setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
};
