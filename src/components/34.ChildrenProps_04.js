//Render props

const List = ({data, children}) => {
    console.log(children);
    return (
        <ul>
            {/* gọi children như 1 function */}
            {data.map((item) => children(item))}
        </ul>
    );
};

const cars = ['BMW', 'Honda', 'Mazda']
const ChildrenProps04 = () => {
    return (
        <article className="wrapper">
            <List data={cars}>
                {/* truyền function vào children */}
                { (item) => <li>{item}</li> }  
            </List>
        </article>
    );
};

export default ChildrenProps04;