import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];

const TwowayBinding02 = () => {
  const [idChecked, setIdChecked] = useState(1);
  return (
    <article className="wrapper">
      {
        courses.map((course) => (
          <div key={course.id}>
            <label>
              <input
                type="radio"
                //trả về true nếu idChecked = id của input hiện tại
                checked={idChecked === course.id}
                onChange={() => setIdChecked(course.id)}
              />
              {course.name}
            </label>
          </div>
        ))
      }
    </article>
  );
};

export default TwowayBinding02;

// Two-way binding là ràng buộc dữ liệu 2 chiều,
// điều này thường được nhắc tới khi các bạn làm việc với biểu mẫu (form)
// trong các lib/framework front-end.
