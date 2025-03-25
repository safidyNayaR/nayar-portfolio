import Card from "../components/card"

export default function Projets() {
    return(
        <div className="text-white text-center py-5" id="projets">
            <h1 className="fw-bold text-secondary">Mes Projets</h1>
            <h4 className="text-white-50 m-4">La plus part des choses que j'ai construites jusqu'à présent</h4>
            <hr className="text-primary" />
            <div className="row d-flex mt-5 my-4 flex-wrap gap-5 justify-content-evenly z-2">                
                <Card 
                    className="col-4"
                    img="./images/chrd.PNG"
                    titre="Gestion de la Pharmacie"
                    description="Une application de gestion de la pharmacie que j'ai réalisé lors mon stage au CHRD Mahitsy. Cet projet m'a appris beaucoup de chose et ainsi renforçant mes connaissances en developpement."   
                    tech = "html, css, JavaScript, JQuery, php & Mysql"          
                />
                <Card 
                    className="col-4"
                    img="./images/portfolio.PNG"
                    titre="Mon Portfolio"
                    description="Mon site web portfolio est une représentation visuelle de mon travail en tant que développeur. Il met en valeur mes compétences technologique, mes projets et mon expérience de manière professionnelle et attrayante."   
                    tech = "React, BootsTrap"          
                />
                <Card 
                    className="col-4"
                    img="./images/student_registration.PNG"
                    titre="Student's Registration"
                    description="Une application d'inscription des étudiants avec interface graphique GUI. Un projet qui m'a attiré sur YouTube. Ainsi renforcer mes compétences sur les bases des données et GUI. "   
                    tech = "Python, TKinter, MySQL"          
                />
                <Card 
                    className="col-4"
                    img="./images/car_accessoirs.PNG"
                    titre="Car Accessoirs"
                    description="Une petite site que j'ai créer à partir d'un maquette proposé par un amie, pour renforcer mes compétences"   
                    tech = "Django, BootsTrap"          
                />
                <Card 
                    className="col-4"
                    img="./images/carnet_adresse.PNG"
                    titre="Carnet d'Adresse"
                    description="Petit projet que j'ai créer dans un cours en ligne sur Udemy, qui consiste à la gestion des utilisateurs (CRM). Cet projet m'a appris la Programation Orienté Objet POO."   
                    tech = "Django, BootsTrap, MySQL"          
                />
            </div>
        </div>
    )
}