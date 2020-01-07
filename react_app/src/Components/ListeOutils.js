import React, {useEffect, useState} from 'react'
import Outil from "./Outils";

function ListeOutils(props) {
    var [categories, setCatergories] = useState(null)
    var [formattedCategories, setFormattedCategories] = useState(null)

    useEffect(() => {

        fetch('http://localhost:8900/dsin/web/jsonapi/node/categorie_outils?include=field_image&fields[node--categorie_outils]=title,field_description,field_description.value,field_image', {
            method: 'GET',
            headers: {
                'Autohrization': 'Beaver' + props.token.access_token,
                'Accept': 'application/vnd.api+json',
            },
        }).then((response) => response.json()
        ).then((data) => setCatergories(data),
        ).catch(function (error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
        })
        if (categories !== null && categories !== undefined)
            setFormattedCategories(pairData())
        console.log(formattedCategories);
    }, [props.token])

    function pairData() {
        let content = categories.data
        let images = categories.included
        images = images.map(image => {
            let imageURL = image.attributes.uri.url
            let imageID = image.id
            return {id: imageID, url: imageURL}
        })
        console.log(images);
        let pairedArray = content.map(categorie => {
            let imageID
            let titre
            let content
            let result
            let imageURL
            if (categorie.relationships.field_image.data !== null) {
                imageID = categorie.relationships.field_image.data.id
                images.forEach(image => {
                    if (image.id === imageID)
                        imageURL = image.url
                })
            } else {
                imageURL = "/dsin/web/sites/default/files/default_images/question-mark.png"
            }
            titre = categorie.attributes.title
            content = categorie.attributes.field_description.processed
            result = {titre: titre, description: content, urlImage: imageURL}
            return result;
        })
        return pairedArray
    }

    function renderOutils() {
        let result = formattedCategories
        if (result !== null)
            return result.map(item => (
                <Outil titre={item.titre} description={item.description} urlImage={item.urlImage}>Test</Outil>))
        else
            return <p>Loading...</p>
    }
    return (
        <div id={"#listeOutils"} className={"conteneur"}>
            {renderOutils()}

        </div>
    );
}

export default ListeOutils