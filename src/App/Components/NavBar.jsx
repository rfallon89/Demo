import { Link,useNavigate  } from "react-router-dom";
import Logo from "../../Assets/Logo.svg"
import '../Styles/NavBar.css'
import { useState, useEffect } from "react";

function NavBar () {
    const navigate = useNavigate()
    const route = () =>{
        navigate("/log-in")
    }
    const [isMobile, setIsMobile] = useState(window.innerWidth<=750)

    useEffect(()=>{
        window.addEventListener("resize", () =>{
            setIsMobile(window.innerWidth<=750)
        })
    },[])

    return(
        <nav>
            <div id='logo-container'>
                {isMobile && <Link to={'/'}><img id="logo" src={Logo} alt='company logo'/></Link>}
                {!isMobile && <img id="logo" src={Logo} alt='company logo'/>}
            </div>
            <div id="link-container">
                <ul>
                    <li>
                        <Link to={'/'}>HOME</Link>
                    </li>
                    <li>
                        <Link to={'/about-us'}>ABOUT US</Link>
                    </li>
                    <li>
                        <Link to={'/contact-us'}>CONTACT US</Link>
                    </li>
                </ul>
                <button id="login" onClick={route}>Log in</button>
            </div>
        </nav>
    )
}

export default NavBar