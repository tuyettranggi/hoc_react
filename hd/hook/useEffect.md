# 🎆🎆 `useEffect` 🎆🎆

## 🌟 Ứng dụng của `useEffect`

* **Events**: Add / remove event listener
* **Observer pattern**: Subscribe / unsubscribe
* **Closure**
* **Timers**: `setInterval`, `setTimeout`, `clearInterval`, `clearTimeout`
* **State**: Kết hợp với `useState`
* **Vòng đời component**: Mounted / Unmounted
* **Gọi API**

---

## 🧠 Các trường hợp sử dụng phổ biến

### 1. Cập nhật DOM

* Ví dụ: Đổi tiêu đề F8 Blog

### 2. Gọi API

* Fetch dữ liệu khi component mount

### 3. Lắng nghe sự kiện DOM

* Ví dụ:

  * **Scroll**
  * **Resize**

### 4. Cleanup

* Remove listener / Unsubscribe
* Clear timer

---

## ⚙️ Cú pháp `useEffect`

### `useEffect(callback)`

* Gọi `callback` **mỗi khi component re-render**
* Gọi `callback` **sau khi component thêm element vào DOM**

### `useEffect(callback, [])`

* Gọi `callback` **một lần duy nhất** sau khi component **mounted**

### `useEffect(callback, [deps])`

* Gọi `callback` **mỗi khi các `deps` thay đổi**

---

## 📌 Ghi nhớ

* `Callback` luôn được gọi **sau khi component đã mounted**
