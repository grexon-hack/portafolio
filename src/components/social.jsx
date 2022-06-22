import icon from '../image/linkedin.png';
import icon2 from '../image/github.png';
import icon3 from '../image/whatsapp.png';
import icon4 from '../image/cvPicture.png';
import cv from '../image/newCV.pdf'

export default function Social() {
    return (
        <div className='iconSocial'>
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/jose-gregorio-sarabia-lugo-b28791219/" target="_blank" rel="noopener noreferrer">

                <img src={icon} alt="icono" />
                </a>
            </div>
            <div className='github'>
                <a href="https://github.com/grexon-hack" target="_blank" rel="noopener noreferrer">

                <img src={icon2} alt="icono" />
                </a>
            </div>
            <div className='whatsapp'>
                <img src={icon3} alt="icono" />
            </div>
            <div className='cv'>
                <a href={cv} download="CV">

                <img src={icon4} alt="icono" />
                </a>
            </div>
        </div>
    )
}