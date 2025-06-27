import "../style/components/Search.scss";
import { searchPlaces } from "../api";
import weatherContext from "../context/weather.context";
import { useContext, useState } from "react";

function Search(){

    const {setPlace}=useContext(weatherContext);
    const [text,setText]= useState('');
    const [searchResult,setSearchResult]=useState([]);
    const [openSearchResult,setOpenSearchResult]=useState(false);

    async function onSearch(e){
        setText(e.target.value);
        const data = await searchPlaces(e.target.value);
        setSearchResult(data);
        setOpenSearchResult(data.length);
    };

    const changePlace = (place) =>{
        setPlace(place);
        setText("");
        setOpenSearchResult(false);
    };
    return <>
    <div className="search-container">
        <div className="search-icon">
            <i class="bi bi-search"></i>
        </div>
        <div className="search-input">
            <input
            type="text"
            name="search-city"
            placeholder="search city"
            value={text}
            onChange={onSearch}
            />
        </div>
        {openSearchResult && (
                <div className="search-results">
            <div className="results-container">
                {
                    searchResult.map((place)=>(
                        <div className="result" key={place.place_id} onClick={()=> changePlace(place)}>
                            {place.name}, {place.adm_area1}, {place.country}
                        </div>
                    ))
                }
            </div>
        </div>)}
    </div>
    </>
}

export default Search;