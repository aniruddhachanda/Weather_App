import { useContext, useState } from "react";
import theamContext from "../context/theme.context";
import { MEASUREMENT_SYSTEM } from "../constants";
import "../style/components/Settings.scss";
import weatherContext from "../context/weather.context";

function Settings(){
    const [opensetting,setopenSetting]=useState(false);

    const {dark,setDark,saveThemeToLocalStorage} = useContext(theamContext);
    const {measurementSystem,setMeasurementSystem} = useContext(weatherContext);

    const changeMeasurementSystem =(system)=>{
        setMeasurementSystem(system);
        setopenSetting(false);
    }

    const toggleTheam =()=>{
        setDark((prevDark) => !prevDark);
        saveThemeToLocalStorage(!dark);
    }
    return (
        <div className="Settings">
            <div className="theme-toggler">
                <div className="theme-buttons" onClick={toggleTheam}>
                    <div className={`light-theme-btn ${dark ?'':'active'}`}>
                        <i class="bi bi-sun"></i>
                    </div>

                    <div className={`dark-theme-btn ${dark ?'active':''}`}>
                        <i class="bi bi-moon"></i>
                    </div>
                </div>
            </div>
            <div className="settings-btn" onClick={()=> setopenSetting(prevVal=>!prevVal)}>
                <i className={`bi bi-gear${opensetting ? '-fill':''}`}></i>
            </div>

            <div className={`settings-menu ${opensetting ? 'open': ''}`}>
                <div className="measurement-systems">
                    <h4>Measurement System</h4>
                    <div className="systems">
                        {
                            Object.values(MEASUREMENT_SYSTEM).map(system =>
                                <div className={`system ${system===measurementSystem ? 'active' : ''}`} key={system} onClick={()=>changeMeasurementSystem(system)}>{system}</div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Settings;