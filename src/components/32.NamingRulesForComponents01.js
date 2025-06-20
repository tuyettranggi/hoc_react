const NamingRulesForComponents01 = (props) => {
    const Form = {
        Input: () => <input type="text" />,
        Checkbox: () => <input type="checkbox" />,
        Button: () => <button>Click me!</button>
    }
    const type = "Button";
    const NewComponent = Form[type];
    return (
        <article className="wrapper" style={props.style}>
            <Form.Input />
            <Form.Checkbox />
            <NewComponent />
        </article>
    );
};

export default NamingRulesForComponents01;