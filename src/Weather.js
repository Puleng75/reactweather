
import React,{useState} from "react";


export default function Weather() {
    let [setCity] = useState("");


function handleSubmit(event) {
    event.preventDefault();
    alert(`15°C`);
}

function updateCity(event){
    setCity(event.target.value);
}

return(
    <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity}/>
        <input type="submit" value="Search" />
        </form>
);
}