
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import "../styles/components/socialnetworks.sass"

const socialnetworks = [
    { name: "linkedin", icom: <FaLinkedinIn />},
    { name: "github", icom: <FaGithub />}
]

export default function SocialNetworks() {
    return (
        <section id='rs'>
           {socialnetworks.map((network) =>(
            <a href="#" className='social-btn' id={network.name} key={network.name}>
                {network.icom}
            </a>
           ))}
        </section>
    );
}