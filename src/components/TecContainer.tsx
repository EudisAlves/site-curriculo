import { Key, ReactNode } from 'react'
import {
    DiHtml5,
    DiCss3,
    DiNodejsSmall,
    DiTypo3,
    DiReact
} from 'react-icons/di'

import '../styles/components/teccontainer.sass'

const tech = [
    {id: "html", name: "HTML5", icon: <DiHtml5 />},
    {id: "css", name: "Css3", icon: <DiCss3 />},
    {id: "node", name: "node.js", icon: <DiNodejsSmall />},
    {id: "typo", name: "Typescript", icon: <DiTypo3 />},
    {id: "react", name: "React", icon: <DiReact />}
]

export default function tecContainer() {
    return (
        <section id='tec-container'>
            <h2>Tecnologias</h2>
            <div className="tech-grid">
                {tech.map((tech: {
                    [x: string]: ReactNode; id: Key | null | undefined; 
                     }) => (
                    <div className="tec-card" id='tech.id' key={tech.id}>
                        {tech.icon}
                        <div className="tech-info">
                            <h3>{tech.name}</h3>
                            <p>informações</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}




