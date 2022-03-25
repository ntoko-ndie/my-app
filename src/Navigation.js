import './navigation.scss';
import 'boxicons';

function Navigation() {
    return (
        <header id="header" className="d-flex flex-column justify-content-center">
            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li>
                        <a href="#hero" className="nav-link scrollto active"
                        ><i className="bx bx-home"/><span>Home</span></a
                        >
                    </li>
                    <li>
                        <a href="#about" className="nav-link scrollto"
                        ><i className="bx bx-user"/><span>About</span></a
                        >
                    </li>

                    <li>
                        <a href="#projects" className="nav-link scrollto"
                        ><i className="bx bx-book-content"/> <span>Projects</span></a
                        >
                    </li>

                    <li>
                        <a href="#contact" className="nav-link scrollto"
                        ><i className="bx bx-envelope"/> <span>Contact</span></a
                        >
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Navigation;
