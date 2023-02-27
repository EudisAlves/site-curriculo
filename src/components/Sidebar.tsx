import Avatar from '../img/IMG_20210305_184903_706.jpg'
import InformaçãoContainer from './InformaçãoContainer'
import SocialNetworks from './SocialNetworks';
import '../styles/components/sidebar.sass'


export const Sidebar = () => {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt="foto de Eudis Alves"/>
            <p className="title">Desenvoldor</p>
            <SocialNetworks />
            <InformaçãoContainer />
            <a href="https://docs.google.com/document/d/1IinV3ERzE6O5rjh3b7UJcL-_P3sTc8GI/edit?usp=share_link&ouid=112204861349327507980&rtpof=true&sd=true" className="btn">
                Download currículo
            </a>

        </aside>
    );
}