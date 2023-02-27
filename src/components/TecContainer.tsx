
import {
    DiHtml5,
    DiCss3,
    DiNodejsSmall,
    DiReact,
    DiSass,
    DiJsBadge,
    
} from 'react-icons/di'
import {
    SiTypescript,
    SiVite
} from "react-icons/si"

import '../styles/components/teccontainer.sass'

const tech = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />},
    { id: "css", name: "Css3", icon: <DiCss3 />},
    { id: "js", name: "JavaScript", icon: <DiJsBadge />},
    { id: "node", name: "node.js", icon: <DiNodejsSmall />},
    { id: "type", name: "TypeScrpit", icon: <SiTypescript />},
    { id: "vite", name: "Vite", icon: <SiVite />},
    { id: "react", name: "React", icon: <DiReact />},
    { id: "sass", name: "Sass", icon: <DiSass />},
];

export default function tecContainer() {
    return (
        <section id='tech-container'>
            <h2>Tecnologias</h2>
            <div className="tech-grid">
                {tech.map((tech)=> (
                    <div className="tech-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="tech-info">
                            <h3>{tech.name}</h3>
                           
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}




