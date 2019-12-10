import React from 'react'
import {MdSearch} from 'react-icons/md'
import Bouton from "../Bouton";

const SearchBar = (props) => {
    if (props.size === "small") {
        return (
            <div className={"searchbar_container"}>
                <input type={"text"} placeholder={"Rechercher..."}/>
                <label className={'headerSearchSubmitWrapper'}>
                    <input type={"submit"} className={'headerSearchSubmit'}/>
                    <Bouton contenu={<MdSearch onClick={alert}/>}/>
                </label>
            </div>
        );
    } else {
        return (
            <div className={"searchbar_container"}>
                <input type={"text"} placeholder={"Rechercher..."}/>
                <label className={'headerSearchSubmitWrapper'}>
                    <input type={"submit"} className={'headerSearchSubmit'}/>
                    <Bouton contenu={<MdSearch onClick={alert}/>}/>
                </label>
            </div>
        );
    }
}
export default SearchBar;
