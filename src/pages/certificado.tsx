import Navbar from "../components/navbar";
import "./certificado.scss";
import { Link } from "react-router-dom";

interface Certificate {
    title: string;
    issuer: string;
    link: string;
    date: string;
}

export default function Certificado() {
    const certificates: Certificate[] = [
        {
            title: "The Complete 2024 Web Development Bootcamp ",
            issuer: "Udemy",
            link: "https://www.udemy.com/certificate/UC-dfab14b3-600e-4fc5-83eb-51b1a129ddda/",
            date: "2024"
        },
        // Add more certificates here
    ];

    return (
        <section className="background">
            <Link to="/" id="voltar">Voltar</Link>
            <Navbar/>
            <div className="certificates">
                <h2>Certificados</h2>
                <div className="certificate-grid">
                    {certificates.map((cert, index) => (
                        <div className="certificate-card" key={index}>
                            <div className="certificate-info">
                                <h3>{cert.title}</h3>
                                <p>{cert.issuer}</p>
                                <span className="date">{cert.date}</span>
                                <a 
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="view-certificate"
                                >
                                    Ver Certificado
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}