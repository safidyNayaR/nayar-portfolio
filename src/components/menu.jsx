import { useState } from "react"
import { Link } from "react-scroll"

export default function Menu() {
    const [bgColor, setBgColor] = useState(false)
    const ChangeColor = () => {
        if (window.scrollY >= 50){
            setBgColor(true)
        }else{
            setBgColor(false)
        }
    }

    window.addEventListener('scroll', () => {
        ChangeColor()
        const listMenu = document.querySelector(".liste-menu")
        listMenu.classList.remove("mobile-menu")
    })
    return(                 
        <div className={bgColor ? "text-bg-dark mx-5 p-2 position-sticky z-3 rounded-pill d-flex justify-content-between" : 'bg-transparent mx-5 pt-2 position-sticky z-3 rounded-pill  d-flex justify-content-between'} style={{top:"5px"}}>
            <div className="liste-menu">
                <ul className="d-flex justify-content-evenly flex-wrap list-unstyled nav-menu ms-3">
                    <li className="nav-item mx-3">
                        <Lien to="acceuil" children="Acceuil" />       
                    </li>
                    <li className="nav-item mx-3">
                        <Lien to="a_propos" children="A Propos" />
                    </li>
                    <li className="nav-item mx-3">
                        <Lien to="projets" children="Projets" />                     
                    </li>
                    <li className="nav-item mx-3">
                        <Lien to="competences" children="Compétences" /> 
                    </li>
                    <li className="nav-item mx-3">
                        <Lien to="contacts" children="Contacts" />                      
                    </li>                      
                </ul>
            </div>
            <img src="./images/menu-bar.png" alt="menu-bar" className="menu-bar" onClick={() => {
                const listMenu = document.querySelector(".liste-menu");
                listMenu.classList.toggle("mobile-menu")
            }}/>
            <a href="./ainaSafidyRamanantsoa.pdf" download="cv" className="me-2 btn btn-outline-success fw-bolder">Télécharger mon CV</a>  
        </div>
    )
}

function Lien({to, children}) {
    return (
        <Link to={to} spy={true} smooth={true} offset={-100} duration={400}
            style={{textDecoration : "none", fontSize: "20px", fontWeight: "bold"}}>
            {children}
        </Link>
    )
}