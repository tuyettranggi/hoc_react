import { useState } from "react";

const HooksUseStateCallback = () => {
  console.log("render HooksUseStateCallback");
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
    //→ Khi cập nhật state nhiều lần liên tiếp mà phụ thuộc vào giá trị cũ, bạn phải dùng callback:
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
    setCounter(prev => prev + 1);
 };
  return (
    <article className="wrapper">
      <h2>{counter}</h2>
      <button className="reset" onClick={handleIncrease}>
        Increase
      </button>
    </article>
  );
};

export default HooksUseStateCallback;
