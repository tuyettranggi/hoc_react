import { useState } from "react";

const gifts = ["móc khóa", "bình nước", "sách"];

const HooksUseState05 = () => {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]); // Cách 2
  };

  return (
    <article className="wrapper">
      <h2>{gift || "Chưa có phần thưởng"}</h2>
      <button className="reset" onClick={randomGift}>Chọn quà</button>
    </article>
  );
};

export default HooksUseState05;
