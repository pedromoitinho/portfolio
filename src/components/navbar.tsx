import "./navbar.scss";

export default function Navbar() {
    return (
        <nav className="navBar">
            <div className="navBarBrand">
                <i className="fa-solid fa-code" id="icon"></i>
            </div>
            <div className="navBarEnd">
                <a 
                    id="title" 
                    href="https://pedrolinks.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contato
                </a>
            </div>
        </nav>
    );
}