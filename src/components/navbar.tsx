import "./navbar.scss";
import { useState } from "react";

export default function Navbar() {
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setIsLoading(true);
        const url = "https://pedrolinks.vercel.app/";
        
        setTimeout(() => {
            try {
                // Try window.open first
                const newWindow = window.open(url, '_system');
                if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
                    // Fallback to location.href
                    window.location.href = url;
                }
            } catch (error) {
                window.location.href = url;
            }
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
                        href="https://pedrolinks.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClick}
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