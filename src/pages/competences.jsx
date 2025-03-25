import Techno from "../components/techno"

export default function Competences() {
    return(
        <div className="text-white text-center my-4" id="competences">
            <h2 className="fw-bold fs-1 text-white-50">Compétences</h2>
            <h4 className="fw-bolder fs-3 text-secondary mb-5">Technologie avec lesquelles j'ai travaillé récement</h4>
            <hr className="text-primary" /><br />
            <div className="container mt-4 mb-5">
                <h3 className="fs-1 m-3 text-white-50">Front-End</h3>
                <div className="row d-flex justify-content-evenly flex-wrap gap-3">
                    <Techno image="./images/html-5.png" />
                    <Techno image="./images/css-3.png" />
                    <Techno image="./images/js.png" />
                    <Techno image="./images/react.png" />
                </div>
            </div>
            <div className="w-50 mx-auto">
                <hr />
            </div>
            <div className="container mt-4 mb-5">
                <h3 className="fs-1 m-3 text-white-50">Back-End</h3>
                <div className="row d-flex justify-content-evenly flex-wrap gap-2">
                    <Techno image="./images/php.png" />
                    <Techno image="./images/python.png" />
                </div>
            </div>
            <div className="w-50 mx-auto">
                <hr />
            </div>
            <div className="container mt-4 mb-5">
                <h3 className="fs-1 m-3 text-white-50">Base de Données</h3>
                <div className="row d-flex justify-content-evenly flex-wrap gap-2">
                    <Techno image="./images/sql-server.png" />
                    <Techno image="./images/mysql.png" />
                </div>
            </div>
            <div className="w-50 mx-auto">
                <hr />
            </div>
            <div className="container mt-4 mb-5">
                <h3 className="fs-1 m-3 text-white-50">Frameworks</h3>
                <div className="row d-flex justify-content-evenly flex-wrap gap-2">
                    <Techno image="./images/django.png" />
                    <Techno image="./images/bootstrap.png" />
                </div>
            </div>
        </div>
    )
}