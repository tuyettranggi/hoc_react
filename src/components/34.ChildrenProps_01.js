// Props default to "true"

const Button = ({title, primary, style}) => {
    console.log(primary);
    return <button style={style}>{title}</button>
}

const ChildrenProps01 = ({title, primary, style}) => {
    return (
        <article className="wrapper">
            <Button primary title={title} style={style} />
        </article>
    );
};

export default ChildrenProps01;