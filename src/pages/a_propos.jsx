export default function A_propos() {
    return(
        <div className="container" id="a_propos">
            <div className="text-white w-75 py-4 my-3">
                <h2 className="fw-bold text-secondary">A propos de Moi</h2>
                <hr className="text-primary" /><br />
                <p className="text-wrap font-monospace fs-4 fw-light text-white-50">
                    Je m'appelle RAMANANTSOA Aina Safidy, 20 ans née le 06 mars 2005. Je suis un développeur informatique passionnée par les nouvelles téchnologies et la création de solutions innovantes. Dans une société, j'ai pu évoluer et me familiariser avec différents langages de développement ainsi que de nombreux frameworks.
                </p>
            </div>
            <div className="d-flex">
                <div className="text-white w-50 text-wrap">
                    <h2 className="fw-bold text-secondary">Expérience Proféssionnelle</h2>
                    <hr />
                    <div>
                        <h5 className="text-secondary">Stage : <span className="fw-light">html, Javascript, PhP & MySQL</span> </h5>
                        <div className="d-flex justify-content-between fs-5 text-white-50">
                            <p>
                                <img src="./images/entreprise.png" alt="icôn" class="image d-inline-block p-2" />
                                <span className="d-inline-block p-2">CHRD</span>
                            </p>
                            <p>
                                <img src="./images/epingle.png" alt="icôn" class="image d-inline-block p-2" />
                                <span className="d-inline-block p-2">Mahitsy</span>
                            </p>
                            <p>
                                <img src="./images/calendrier.png" alt="icôn" class="image d-inline-block p-2" />
                                <span className="d-inline-block p-2">Juin à Août 2024</span>
                            </p>                        
                        </div>                                               
                    </div>                    
                    <hr />
                </div>
                <div className="text-center opacity-50 p-4 m-4">
                    <img src="./images/agile.png" alt="Methode Agile" style={{maxWidth : "200px", height:"auto", paddingLeft: "75px"}} className="method_agile"/>
                </div>
        </div>
            
        </div>
    )
}