import Avatar from '../img/IMG_20210305_184903_706.jpg'
import SocialNetworks from './SocialNetworks';
import '../styles/components/sidebar.sass'


export const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="foto de Eudis Alves"/>
            <p className="title">Desenvoldor</p>
            <SocialNetworks />
            <p>informações de contato</p>
            <a href="/" className="btn">
                Download currículo
            </a>

        </aside>
    );
}