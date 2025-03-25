export default function Acceuil() {
    return(
        <div className="container d-flex justify-content-center align-items-center mt-2" id="accueil-div">
            <div className="text-white text-wrap p-1 w-50 z-3" id="acceuil">
                <h1>
                    <span className="fs-1 fw-bolder text-white-50">
                        Bonjour, <br /> 
                        Je m'appelle <br />
                    </span>
                    <span className="text-info fs-1 fw-bold">Aina Safidy RAMANANTSOA</span>
                </h1>
                <h5 className="fs-4 mb-4 text-secondary">Je suis un développeur passionné et compétent.</h5><br />
                <a href="./ainaSafidyRamanantsoa.pdf" download="cv" className="btn btn-outline-success mt-4">Télécharger mon CV</a>
            </div>
            <div className="w-50 d-flex justify-content-center align-items-center z-1">
                <img src="./nayar_image.png" alt="nayar image" className="nayar-image" style={{maxWidth: "350px"}}/>
            </div>
        </div>
        
    )
}