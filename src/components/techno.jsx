import { useState } from "react"

const maimbo = {width: "80px", height: "auto"}
const mouse = {width: "75px", height: "auto"}

export default function Techno(props) {
    const [size, setSize] = useState(maimbo)
    const {image} = props
    return(
        <div className="col-2">
            <img src={image} alt="Technologie" onMouseEnter={() => setSize(mouse)} onMouseLeave={() => setSize(maimbo)} style={size} />
        </div>
    )
}