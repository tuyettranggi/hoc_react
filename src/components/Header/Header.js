import "./header.css";
import logo from '../../logo.svg';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <h1>My Website</h1>
        </header>
    );
};

export default Header;