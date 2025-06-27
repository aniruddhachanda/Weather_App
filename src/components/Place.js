import { useContext } from "react";
import weatherContext from "../context/weather.context";

function Place(){

    const {place}= useContext(weatherContext);
    return (
        <div className="Place">
            <i class="bi bi-geo-alt-fill"></i>
            <b>{place.name}</b>,{' '}{place.country}
        </div>
    )
}

export default Place;