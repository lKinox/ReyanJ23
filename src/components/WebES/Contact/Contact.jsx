import ContactVec from './ContactVec.svg'
import TelegramIcon from './TelegramIcon.svg'
import FacebookIcon from './FacebookIcon.svg'
import InstagramIcon from './InstagramIcon.svg'
import WhatsappIcon from './WhatsappIcon.svg'
import GmailIcon from './GmailIcon.svg'


export function Contact() {
    return (
        <div className='Contact'>
            <img src={ContactVec}></img>
            <h1>Contacto:</h1>
            <div className='ContactImg'>
                <a target='_blank' href='https://t.me/ReyanJ23'><img src={TelegramIcon}></img></a> 
                <a target='_blank' href='https://www.facebook.com/reyan.jimenez'><img src={FacebookIcon}></img></a>
                <a target='_blank' href='https://www.instagram.com/reyanj23/'><img src={InstagramIcon}></img></a>
                <a target='_blank' href='https://wa.me/584122532702'><img src={WhatsappIcon}></img></a>
                <a target='_blank' href='mailto:reyanjimenez@gmail.com'><img src={GmailIcon}></img></a>
            </div>
        </div>
    )
}