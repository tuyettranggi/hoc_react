import "./header.css";
import logo from '../../logo.svg';
import { useContext } from "react";
import HeadingContext from "../HeadingContext";

const Header = () => {
    const { heading1 } = useContext(HeadingContext);

    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h1>{heading1 || "My Website"}</h1>
        </header>
    );
};

export default Header;