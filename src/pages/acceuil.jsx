export default function Acceuil() {
    return(
       
        <div className="text-white text-wrap px-5 py-5 mx-5 my-5 w-50" id="acceuil">
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
      
        
    )
}