import { Header } from './Header/Header.jsx'
import { About } from './About/About.jsx'
import { Skills } from './Skills/Skills.jsx'
import { Hobbies } from './Hobbies/Hobbies.jsx'
import { Works } from './Works/Works.jsx'
import { Contact } from './Contact/Contact.jsx'
import { Footer } from './Footer/Footer.jsx'

export function WebES() {
    
    return (
        <div>
            <Header />
            <div className='fondo1'>
                <About />
                <Skills />
                <Hobbies />
            </div>
            <Works />
            <Contact />
            <Footer />
        </div>
    )
}