// Spread/Rest props

// `...inputProps` ở đây là rest (thu nhận các props còn lại)
const Input = ({label, styleLabel, ...inputProps}) => {
    return (
        <div>
            <label style={styleLabel}>{label}</label>
            {/* {...inputProps} ở đây là spread (trải các prop ra input) */}
            <input {...inputProps} />
        </div>
    );
}

const ChildrenProps02 = () => {
    const styleLabel = { "margin-right": 15 }
    const styleInput = { "padding": 5 }
    return (
        <article className="wrapper">
            <Input 
                label="Full name"
                styleLabel = {styleLabel}
                type="text"
                placeholder="Enter name..."
                onFocus={() => {
                    console.log('Đã focus input ' + Math.random());
                }}
                styleInput = {styleInput}
            />
        </article>
    );
};

export default ChildrenProps02;