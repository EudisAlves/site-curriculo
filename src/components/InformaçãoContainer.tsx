import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai'
import '../styles/components/infor.sass'


export default function informaçãoContainer() {
    return <section id="infor">
        <div id='info-card'>
            <AiFillPhone id='phone-icon' />
            <div>
                <h3>Telefone</h3>
                <p>(21) 97457-3303</p>
            </div>
        </div>

        <div id='info-card'>
            <AiOutlineMail id='email-icon' />
            <div>
                <h3>E-mail</h3>
                <p>deleudis@gmail.com</p>
            </div>
        </div>

        <div id='info-card'>
            <AiFillEnvironment id='pin-icon' />
            <div>
                <h3>localização</h3>
                <p>São Gonçalo / RJ</p>
            </div>
        </div>
    </section>
}