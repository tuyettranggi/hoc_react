const NamingRulesForComponents02 = ({title, textAlert, href, onClick}) => {
    let Component = 'button';
    const props = {};
    if(href){
        props.href = "http://localhost:3000/"
        Component = 'a';
    }
    if(onClick){
        props.onClick= () => onClick(textAlert);
    }
    
    return (
        <article className="wrapper">
            <Component {...props}>{title}</Component>
        </article>
    );
};

export default NamingRulesForComponents02;