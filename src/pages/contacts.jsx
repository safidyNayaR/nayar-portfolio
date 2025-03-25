export default function Contacts() {
    return (
        <div className="text-white text-center m-5" id="contacts">
            <h2 className="text-white-50 fw-bold">Contacts</h2>
            <h4 className="text-secondary fw-bolder">N'hésitez pas à me contacter</h4>
            <hr className="text-primary" />
            <ul className="list-unstyled m-5">
                <Img 
                    image="./images/email.png" 
                    lien="mailto:safidynayar@gmail.com" 
                    txt="safidynayar@gmail.com" 
                />
                <Img 
                    image="./images/linkedin.png" 
                    lien="www.linkedin.com/in/nayar-safidy-095868332" 
                    txt="Safidy NayaR" 
                /> 
                <Img 
                    image="./images/facebook.png" 
                    lien="https://www.facebook.com/RAMANANTSOA.Safidy.Naya" 
                    txt="Aina" 
                />  
                <Img 
                    image="./images/mobile.png" 
                    lien="tel:+261336004569" 
                    txt="+261 33 60 045 69" 
                />                
            </ul>
            <div className="m-5 p-5">
                <a href="./ainaSafidyRamanantsoa.pdf" download="cv" className="btn btn-outline-success fw-bolder p-2 fs-4 m-3">Télécharger mon CV</a>
                <h1>👋🏿</h1>
            </div>
        </div>
    )
}

function Img({image, lien, txt}) {
    return (
        <li className="my-4">
            <img src={image} alt="logo" style={{width: "35px", height: "auto"}} />
            <a href={lien} className="text-decoration-none text-success p-3 fs-4 fw-bolder">{txt}</a>
        </li>
)
}