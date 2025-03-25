export default function Card(props) {
    const {img, titre, description, tech} = props

    return(
        <div className="card text-bg-dark" style={{width: '22rem'}}>    
            <img src={img} alt="image" className="card-img-top mw-75"/>    
            <div className="card-body text-bg-dark">
                <h4 className="card-title fw-bolder text-white-50" children={titre}></h4><br />
                <h6 className="card-text text-wrap fw-semibold font-monospace text-secondary">{description}</h6><br />
                <h5 className="text-secondary"><u>Tech stack :</u> {tech}</h5>
            </div>
        </div>
    )
}