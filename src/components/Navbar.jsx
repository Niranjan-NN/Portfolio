import { FaGithub, FaLinkedin, FaTelegram, } from "react-icons/fa"
import logo from "../assets/niju.png"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center"> 
            <a href="/" aria-label="Home">
                <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex item-center justify-content-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/niranjan-nn/"
                target="_blank"
                rel="nooper noreferrer"
                aria-label="LinkedIn">
                    <FaLinkedin />    
            </a>
            <a href="https://x.com/imniranjan360"
                target="_blank"
                rel="nooper noreferrer"
                aria-label="Twitter">
                    <FaSquareXTwitter />    
            </a>
            <a href="https://github.com/Niranjan-NN"
                target="_blank"
                rel="nooper noreferrer"
                aria-label="GitHub">
                    <FaGithub />    
            </a>
            <a href="https://t.me/Niranjan_360"
                target="_blank"
                rel="nooper noreferrer"
                aria-label="Telegram">
                    <FaTelegram />    
            </a>
        </div>
    </nav>
  )
}

export default Navbar
