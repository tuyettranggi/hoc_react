import { useState } from "react";

const orders = [100, 200, 300]

const HooksUseStateInitValue01 = () => {
  
  // Cách 1 không tối ưu hiệu xuất, vì phương thức sẽ được gọi lại mỗi lần setCouter gọi.
  const total = orders.reduce((total, cur) => total + cur);
  console.log(total);
  const [counter, setCounter] = useState(total);

  const handleIncrease = () => {
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

export default HooksUseStateInitValue01;


const orders2 = [5, 10, 15]
export const HooksUseStateInitValue02 = () => {

  // Cách 2 tối ưu hiệu xuất, useState lấy giá trị trả về, mà không tính lại callback.
  const [counter, setCounter] = useState(() => {
    const total = orders2.reduce((total, cur) => total + cur);
    console.log(total);
    return total;
  });

  const handleIncrease = () => {
    setCounter(prev => prev + 1);
  };

  return (
    <article className="wrapper subComponent">
      <h2>{counter}</h2>
      <button className="reset" onClick={handleIncrease}>
        Increase
      </button>
    </article>
  );
};
