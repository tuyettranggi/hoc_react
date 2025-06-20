// Children prop > String literals, {expression}
const Button = ({ children }) => {
    return (
        <p style={{"marginTop":20}}><button>{children}</button></p>
    );
}

const ChildrenProps03 = () => {
    return (
        <article className="wrapper">
            <Button>Chuỗi ở giữa component vầy gọi là String literals</Button>
            <Button>{ false || "Hoặc là {expression}"}</Button>
        </article>
    );
};

export default ChildrenProps03;