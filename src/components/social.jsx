import cv from '../image/newCV.pdf'
import { FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa'

export default function Social() {
    return (
        <div className='iconSocial'>
            <div className='linkedin'>
                <a href="https://www.linkedin.com/in/jose-gregorio-sarabia-lugo-b28791219/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a>
            </div>
            <div className='github'>
                <a href="https://github.com/grexon-hack" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
            <div className='cv'>
                <a href={cv} download="CV">

                <FaFileDownload />
                </a>
            </div>
        </div>
    )
}