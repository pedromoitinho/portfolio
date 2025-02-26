import { useState, useEffect, useCallback } from 'react';
import "./home.scss";
import Navbar from "../components/navbar";
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
}

export const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isProjectLoading, setIsProjectLoading] = useState(false);
    const [projects] = useState<Project[]>([
        {
            title: "CodeFlix",
            description: "Plataforma de animes, feita com Svelte e SCSS, e GRAPHQL API",
            image: "https://raw.githubusercontent.com/pedromoitinho/codeflix/refs/heads/main/pc.png",
            github: "https://github.com/pedromoitinho/codeflix",
            live: "https://codeflix-pi.vercel.app/",
        },
        {
            title: "Links",
            description: "Plataforma com links para redes sociais",
            image: "https://raw.githubusercontent.com/pedromoitinho/pedrolinks/refs/heads/main/Screenshot_20241107_030457.png",
            github: "https://github.com/pedromoitinho/pedrolinks",
            live: "https://pedrolinks.vercel.app/",
        },
        {
            title: "Jogo Simon",
            description: "Código baseado no famoso jogo Simon",
            image: "https://raw.githubusercontent.com/pedromoitinho/jogo/main/image.png",
            github: "https://github.com/pedromoitinho/jogo",
            live: "https://jogo-red-five.vercel.app/",
        },
    ]);

    useEffect(() => {
        // Preload images
        projects.forEach(project => {
            const img = new Image();
            img.src = project.image;
        });
    }, [projects]);

    // Memoize handlers
    const handleProjectClick = useCallback((url: string) => {
        return (e: React.MouseEvent | React.TouchEvent) => {
            e.preventDefault();
            setIsProjectLoading(true);

            // Delay for loading animation
            setTimeout(() => {
                try {
                    window.location.href = url;
                } catch (error) {
                    console.error('Navigation error:', error);
                    // Fallback for iOS
                    const link = document.createElement('a');
                    link.href = url;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                } finally {
                    setIsProjectLoading(false);
                }
            }, 1000);
        };
    }, []);

    useEffect(() => {
        const animationId = requestAnimationFrame(() => {
            setIsLoading(false);
        });

        return () => cancelAnimationFrame(animationId);
    }, []);

    if (isLoading) {
        return <div className="loading-screen"><div className="loading-spinner"/></div>;
    }

    return (
        <section className="background">
            <Link to="/certificado" id="certificado">Certificados</Link>
            <Navbar />
            
            <div className="hero">
                <h1>Pedro Moitinho</h1>
                <p>Desenvolvedor</p>
                <a 
                    id="curriculo" 
                    href={`${import.meta.env.BASE_URL}assets/PEDRO MOITINHO.pdf`}
                    download="PEDRO MOITINHO.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsDownloading(true);
                        
                        const pdfPath = `${import.meta.env.BASE_URL}assets/PEDRO MOITINHO.pdf`;
                        
                        setTimeout(() => {
                            const link = document.createElement('a');
                            link.href = pdfPath;
                            link.download = 'PEDRO MOITINHO.pdf';
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            setIsDownloading(false);
                        }, 1000);
                    }}
                >
                    Baixar curriculo
                </a>
            </div>

            {isDownloading && (
                <div className="loading-screen">
                    <div className="loading-spinner"></div>
                </div>
            )}

            <div className="skills">
                <h2>Tecnologias:</h2>
                <div className="skill-grid">
                    <div className="skill-item">
                        <i className="fab fa-react"></i>
                        <span>React</span>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-svelte"></i>
                        <span>Svelte</span>
                    </div>
                    <div className="skill-item">
                        <i className="fab fa-sass"></i>
                        <span>SCSS</span>
                    </div>
                    <div className="skill-item">
                        <i className="fa-brands fa-node"></i>
                        <span>NODE.JS</span>
                    </div>
                    <div className="skill-item">
                        <svg viewBox="0 0 24 24" className="typescript-icon">
                            <path fill="currentColor" d="M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z" />
                        </svg>
                        <span>TypeScript</span>
                    </div>
                </div>
            </div>

            <div className="projects">
                <h2>Projetos</h2>
                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <img src={project.image} alt={project.title} />
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-links">
                                <a 
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleProjectClick(project.github)}
                                    onTouchStart={() => {}} // Enable mobile touch events
                                    role="button"
                                    aria-label="View GitHub Repository"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                                <a 
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleProjectClick(project.live)}
                                    onTouchStart={() => {}} // Enable mobile touch events
                                    role="button"
                                    aria-label="View Live Project"
                                >
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {isProjectLoading && (
                <div className="loading-screen">
                    <div className="loading-spinner"></div>
                </div>
            )}
        </section>
    );
};

export default Home;
