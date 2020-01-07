import React, {useEffect, useState} from "react";
import ImageMapper from 'react-image-mapper';
import Guadeloupe from './IMG/Guadeloupe.png'
import Shoelcher from './IMG/schoelcher.jpg'
import Select from '@material-ui/core/Select';
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

function Map() {
    const initialPosShoelcher = [{
        _id: "CUR",
        shape: "circle",
        coords: [333, 575, 10],
        preFillColor: "blue"
    }, {
        _id: "ISEF",
        shape: "circle",
        coords: [377, 209, 10],
        preFillColor: "green"
    }, {
        _id: "BU",
        shape: "circle",
        coords: [412, 421, 10],
        preFillColor: "blue"
    }, {
        _id: "UFR LETTRES",
        shape: "circle",
        coords: [402, 340, 10],
        preFillColor: "blue"
    },]
    const initialPosFouillole = [{
        _id: "1",
        shape: "circle",
        coords: [486, 127, 10],
        preFillColor: "blue"
    }, {
        _id: "2",
        shape: "circle",
        coords: [480, 480, 10],
        preFillColor: "green"
    }, {
        _id: "3",
        shape: "circle",
        coords: [216, 402, 10],
        preFillColor: "blue"
    }, {
        _id: "4",
        shape: "circle",
        coords: [902, 340, 10],
        preFillColor: "blue"
    }, {
        _id: "5",
        shape: "circle",
        coords: [1175, 108, 10],
        preFillColor: "blue"
    }]


    const WIDTH_CARTE_SHOELCHER = 630;
    const WIDTH_CARTE_FOUILLOLE = 1274;


    var [closestInformaticien, setCloserInformaticien] = useState([9999, 9999])
    const [initialPos, setInitialPos] = useState(initialPosShoelcher)
    var [informaticiens, setInformaticiens] = useState(initialPos)
    var [carte, setCarte] = useState(Shoelcher)
    //var [width, setWidth] = useState(window.innerWidth * .8)
    var [initialWidth, setInitialWidth] = useState(WIDTH_CARTE_SHOELCHER)
    const width = initialWidth;
    const ratio = width / initialWidth

    function test() {
        var temp = -2;
        var array = [2, 2]
        var array1 = [-2, -2]
        var array2 = [1, -2]
        console.log({
            "Le plus proche": closestInformaticien,
            "Liste des informaticiens ": informaticiens,
            "Position de départ  ": initialPos,
            "Largeur actuelle ": width,
            "Largeur initiale ": initialWidth
        })
    }

    function searchClosestPoint(e) {
        console.log("searching...")
        var posCursor = getCursorPosition(e)
        let dist = 9999;
        let temp = 9999;
        let tempInformaticiens = informaticiens.map(objet => {
            objet.coords[0] = objet.coords[0] * ratio;
            objet.coords[1] = objet.coords[1] * ratio;
            return objet
        })
        let diff = tempInformaticiens.map(informaticien => distanceEuclidienne(informaticien.coords, posCursor))
        console.log(diff)
        tempInformaticiens.forEach(personel => {
            let posBureau = personel.coords
            temp = distanceEuclidienne(posBureau, posCursor);
            if (temp < dist) {
                dist = temp
                setCloserInformaticien(posBureau)
                console.log(posBureau + "...")
            }
            return personel
        })

        console.log("Employé le plus proche trouvé en " + closestInformaticien)

    }

    function getCursorPosition(e) {
        var rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        console.log("J'ai cliqué en :", x, y)
        return [x, y]

    }

    function distanceEuclidienne(point1, point2) {
        let result = 0;
        result = puissance2(point1[0] - point2[0])
        result += puissance2(point1[1] - point2[1])
        result = Math.sqrt(result)
        //  console.log("Distance entre ", point1, " et ", point2, result)
        return result
    }

    function arrayEgalite(array1, array2) {
        let isEqual = true
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] != array2[i]) {
                isEqual = false;
            }
        }

        return isEqual;
    }

    function puissance2(nombre) {
        return Math.pow(nombre, 2)
    }

    function changeCampus(campusSelectionne) {
        console.log("changeCampus")
        var image;
        var positionDeBase
        if (campusSelectionne.target.value.localeCompare("fouillole") === 0) {
            image = Guadeloupe;
            setInitialWidth(WIDTH_CARTE_FOUILLOLE)
            positionDeBase = initialPosFouillole
        } else {
            image = Shoelcher;
            setInitialWidth(WIDTH_CARTE_SHOELCHER);
            positionDeBase = initialPosShoelcher
        }
        setCarte(image)
        setInitialPos(positionDeBase)
        setInformaticiens(positionDeBase)
    }


    useEffect(() => {
        let newInformaticiens = informaticiens
        let canvas = document.querySelector("div#testMap div canvas")
        let context = canvas.getContext('2d')
        //     console.log(informaticiens)
        let placeholder = informaticiens;
        placeholder.forEach(personnel => {
            if (arrayEgalite(personnel.coords, closestInformaticien)) {
                console.log("Celui qui sera rouge est :", personnel._id, "parce que ce dernier et la variable closestInformaticien vaut :", closestInformaticien)
                newInformaticiens = initialPos.map(individu => {
                    let scaledCoords = [individu.coords[0] * ratio, individu.coords[1] * ratio, individu.coords[2]]
                    if (arrayEgalite(scaledCoords, personnel.coords)) {
                        //            console.log("True dat")
                        individu.preFillColor = 'red'
                    } else {
                        individu.preFillColor = 'blue'
                    }
                    return individu
                })
                personnel.preFillColor = 'red'
            }
            return personnel
        }, [closestInformaticien])
        setInformaticiens(newInformaticiens)
        test();
    }, [closestInformaticien, initialPos, initialWidth, carte, width])
    return (
        <div className={"contact_Map"}>
            <h5>Besoin d'aide ? Trouver l'informaticien le plus proche ! </h5>
            <InputLabel id="labelCampus">Campus</InputLabel>
            <Select labelId="labelCampus" value={carte} onChange={changeCampus}>
                <MenuItem value={"fouillole"}>Campus de Fouillole</MenuItem>
                <MenuItem value={"shoelcher"}>Campus de Schoelcher</MenuItem>
            </Select>
            <div id={"testMap"} onClick={searchClosestPoint}>
                <ImageMapper
                    clas="map"
                    src={carte}
                    map={{name: "Test", areas: informaticiens}}
                    width={width}
                    imgWidth={initialWidth}
                />
                <p id={"closer"}></p>
                {/*console.log(document.querySelector("div#testMap div"))*/}
            </div>
        </div>
    );


}

export default Map;