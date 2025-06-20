import { useState } from "react";

const TwowayBinding01 = () => {
  const [name, setName] = useState();
  console.log(name);
  return (
    <article className="wrapper">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button className="reset" onClick={() => setName('Nguyen Van B')}>Change</button>
    </article>
  );
};

export default TwowayBinding01;

// Two-way binding là ràng buộc dữ liệu 2 chiều, 
// điều này thường được nhắc tới khi các bạn làm việc với biểu mẫu (form)
// trong các lib/framework front-end.
