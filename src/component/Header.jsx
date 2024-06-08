import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        <header>
            <a href="#" style={{textDecoration: 'none'}}>Logo</a>
            <div >
            <li><NavLink to ="/" style={{textDecoration: 'none'}}>Home</NavLink></li>
            <li><NavLink to ="/about" style={{textDecoration: 'none'}}>About</NavLink></li>
            <li><NavLink to ="/contact" style={{textDecoration: 'none'}}>Contact</NavLink></li>
            </div>
        </header>
        <section><h1>Home page</h1></section>
        </>      
    );
};
export default Header;