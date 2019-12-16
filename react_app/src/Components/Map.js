import React, {useEffect, useState} from "react";
import ImageMapper from 'react-image-mapper';


function Map() {
    var [closestInformaticien, setCloserInformaticien] = useState([9999, 9999])
    const initialPos = [{
        _id: "2",
        shape: "circle",
        coords: [20, 50, 10],
        preFillColor: "blue"
    }, {
        _id: "3",
        shape: "circle",
        coords: [480, 480, 10],
        preFillColor: "blue"
    }]
    var [informaticiens, setInformaticien] = useState(initialPos)
    let batiment = {_id: "1", shape: "circle", coords: [250, 250, 50], preFillColor: "brown"}

    function searchClosestPoint(e) {
        var posCursor = getCursorPosition(e)
        let dist = 9999;
        let temp = 9999;
        let tempInformaticiens = informaticiens
        tempInformaticiens.forEach(personel => {
            let posBureau = personel.coords
            temp = distanceEuclidienne(posBureau, posCursor);
            if (temp < dist) {
                dist = temp
                setCloserInformaticien(posBureau)
                console.log("ON entre là ?")

            }
            return personel
        })
    }

    function getCursorPosition(e) {
        var rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        return [x, y]
    }

    function distanceEuclidienne(point1, point2) {
        let result = 0;
        result = puissance2(point1[0] - point2[0])
        result += puissance2(point1[1] - point2[1])
        result = Math.sqrt(result)
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
        console.log(informaticiens)
        let placeholder = informaticiens;
        placeholder.forEach(personnel => {
            if (arrayEgalite(personnel.coords, closestInformaticien)) {
                console.log("Celui qui sera rouge est :", personnel)
                newInformaticiens = initialPos.map(individu => {
                    if (arrayEgalite(individu.coords, personnel.coords)) {
                        individu.preFillColor = 'red'
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

            <ImageMapper clas="map"
                         src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Solid_white.svg/512px-Solid_white.svg.png"}
                         map={{name: "Test", areas: [batiment, informaticiens].flat()}}/>
            <p id={"closer"}></p>
        </div>

    );

}

export default Map;