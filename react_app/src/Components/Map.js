import React, {useEffect, useState} from "react";
import ImageMapper from 'react-image-mapper';
import Guadeloupe from './IMG/Guadeloupe.png'

function Map() {
    var [closestInformaticien, setCloserInformaticien] = useState([9999, 9999])
    const initialPos = [{
        _id: "2",
        shape: "circle",
        coords: [486, 127, 10],
        preFillColor: "blue"
    }, {
        _id: "3",
        shape: "circle",
        coords: [480, 480, 10],
        preFillColor: "green"
    }]
    var [informaticiens, setInformaticien] = useState(initialPos)
    const width = 500;
    const initialWidth = 1274;
    const ratio = width / initialWidth


    //let batiment = {_id: "1", shape: "circle", coords: [250, 250, 50], preFillColor: "brown"}
    function test() {
        var temp = -2;
        var array = [2, 2]
        var array1 = [-2, -2]
        var array2 = [1, -2]
        console.log({
            "Le plus proche": closestInformaticien,
            "Fonction puissance": puissance2(temp),
            "Fonction distance": distanceEuclidienne(array, array1),
            "Fonction Array": arrayEgalite(array, array)
        })
    }

    function searchClosestPoint(e) {
        var posCursor = getCursorPosition(e)
        let dist = 9999;
        let temp = 9999;
        let tempInformaticiens = informaticiens
        tempInformaticiens = tempInformaticiens.map(objet => {
            objet.coords[0] = objet.coords[0] * ratio;
            objet.coords[1] = objet.coords[1] * ratio;
            return objet
        })
        tempInformaticiens.forEach(personel => {
            let posBureau = personel.coords
            temp = distanceEuclidienne(posBureau, posCursor);
            if (temp < dist) {
                dist = temp
                setCloserInformaticien(posBureau)
            }
            return personel
        })
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
        console.log("Distance entre ", point1, " et ", point2, result)
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


    useEffect(() => {
        let newInformaticiens = informaticiens
        let canvas = document.querySelector("div#testMap div canvas")
        let context = canvas.getContext('2d')
        //     console.log(informaticiens)
        let placeholder = informaticiens;
        placeholder.forEach(personnel => {
            if (arrayEgalite(personnel.coords, closestInformaticien)) {
                console.log("Celui qui sera rouge est :", personnel.preFillColor, "parce que ce dernier et la variable closestInformaticien vaut :", closestInformaticien)
                newInformaticiens = initialPos.map(individu => {
                    let scaledCoords = [individu.coords[0] * ratio, individu.coords[1] * ratio, individu.coords[2]]
                    if (arrayEgalite(scaledCoords, personnel.coords)) {
                        console.log("True dat")
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
        setInformaticien(newInformaticiens)
    }, [closestInformaticien])
    return (
        <div id={"testMap"} onClick={searchClosestPoint}>
            <ImageMapper
                clas="map"
                src={Guadeloupe}
                map={{name: "Test", areas: [informaticiens].flat()}}
                width={width}
                imgWidth={initialWidth}
            />
            <p id={"closer"}></p>
            {console.log(document.querySelector("div#testMap div"))}

        </div>
    );


}

export default Map;