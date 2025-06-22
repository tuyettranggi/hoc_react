# 🎆🎆useState🎆🎆
## Dùng khi nào?
Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại theo dữ liệu).
## Cáu trúc:
```
const [counter, setCounter] = useState(initValue);
```
### Ví dụ:
```
const HooksUseState = () => {
    const [state, setState] = useState(1);
    const handleIncrease = () => {
        setCounter(counter + 1);
    }
    return (
        <article className="wrapper">
            <h2>{counter}</h2>
            <button className="reset" onClick={handleIncrease}>Increase</button>
        </article>
    );
};
```

## Lưu ý:
Khi gọi `setState`, nó `sẽ render lại toàn component`.
Nên khi sử dụng giá trị `initValue` bằng 1 phương thức tính toán nào đó nằm trong component, thì khi gọi lại `setState` nó sẽ render lại phương thức đó, gây ra hiệu suất không tốt.

### Ví dụ: