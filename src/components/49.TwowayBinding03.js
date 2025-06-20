import { useState } from "react";

const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  }
]

const TwowayBinding03 = () => {
  const [arrChecked, setArrChecked] = useState([]);

  const handleCheck = (id) => {
    //cập nhật handleCheck thành 1 mảng mới
    setArrChecked(prev => {
      const isChecked = arrChecked.includes(id);
      if(isChecked){
        // nếu arrChecked chứa id hiện tại => xóa id ra
        return arrChecked.filter(item => item !== id);
      }
      else {
        // nếu arrChecked không chứa id hiện tại => thêm vào
        return [...prev, id];
      }
    })
  }

  const handleSubmit = () => {
    // Call API
    console.log({ids: arrChecked});
  }

  return (
    <article className="wrapper">
      {
        courses.map(course => (
          <div key={course.id}>
            <input
              type="checkbox"
              //nếu arrChecked chứa id hiện tại thì trả về true
              checked={arrChecked.includes(course.id)}
              //khi click thì gọi hàm xử lý
              onChange={() => handleCheck(course.id)}
              id={"chk_" + course.id}
            />
            <label htmlFor={"chk_" + course.id}>{course.name}</label>
          </div>
        ))
      }
      <button onClick={handleSubmit}>Register</button>
    </article>
  );
};

export default TwowayBinding03;

// Two-way binding là ràng buộc dữ liệu 2 chiều, 
// điều này thường được nhắc tới khi các bạn làm việc với biểu mẫu (form)
// trong các lib/framework front-end.
