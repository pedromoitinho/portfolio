import "./navbar.scss";
import { useState } from "react";

export default function Navbar() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsLoading(true);
        
        setTimeout(() => {
            window.open("https://pedrolinks.vercel.app/", "noopener,noreferrer");
            setIsLoading(false);
        }, 1000);
    };

    return (
        <>
            <nav className="navBar">
                <div className="navBarBrand">
                    <i className="fa-solid fa-code" id="icon"></i>
                </div>
                <div className="navBarEnd">
                    <a 
                        id="title" 
                        onClick={handleClick} 
                        href="https://pedrolinks.vercel.app/"
                        rel="noopener noreferrer"
                    >
                        Contato
                    </a>
                </div>
            </nav>

            {isLoading && (
                <div className="loading-screen">
                    <div className="loading-spinner"></div>
                </div>
            )}
        </>
    );
}