import ContactVec from './ContactVec.svg'
import TelegramIcon from './TelegramIcon.svg'
import FacebookIcon from './FacebookIcon.svg'
import InstagramIcon from './InstagramIcon.svg'
import WhatsappIcon from './WhatsappIcon.svg'
import GmailIcon from './GmailIcon.svg'


export function Contact() {
    return (
        <div className='Contact' id='Contact'>
            <img src={ContactVec} alt=''></img>
            <h1>Contacto:</h1>
            <div className='ContactImg'>
                <a target='_blank' rel="noreferrer" href='https://t.me/ReyanJ23'><img src={TelegramIcon} alt=''></img></a> 
                <a target='_blank' rel="noreferrer" href='https://www.facebook.com/reyan.jimenez'><img src={FacebookIcon} alt=''></img></a>
                <a target='_blank' rel="noreferrer" href='https://www.instagram.com/reyanj23/'><img src={InstagramIcon} alt=''></img></a>
                <a target='_blank' rel="noreferrer" href='https://wa.me/584122532702'><img src={WhatsappIcon} alt=''></img></a>
                <a target='_blank' rel="noreferrer" href='mailto:reyanjimenez@gmail.com'><img src={GmailIcon} alt=''></img></a>
            </div>
        </div>
    )
}