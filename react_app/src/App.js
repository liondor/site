import React, {Component} from 'react';
import './App.css';
import HeaderHook from "./Components/Header/HeaderHook"
import Footer from "./Components/Footer/Footer";
import Accueil from "./Components/Accueil"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const LIST_URL = 'http://localhost:8900/dsin/web/jsonapi/node/conseils?fields[node--conseils]=title,body,field_image&fields[file--file]=uri&include=field_image';
var qs = require('qs');

class App extends Component {
    constructor() {
        super();
        this.state = {database: null, token: [], articles: null, tokenLoaded: false, test: ''};
        this.loadDestinations = this.loadDestinations.bind(this);
        this.updateData = this.updateData.bind(this);
        this.loadArticles = this.loadArticles.bind(this);

    };

    render() {
        if (this.state.database !== null) {
            console.log("Pas null")
            if (this.state.database !== undefined) {
                console.log("Pas undefined")

                var arrayOfConseils = this.state.database.data.map(item => item.attributes.body.value)
                var arrayOfTitle = this.state.database.data.map(item => item.attributes.title)
                var arrayOfImage = this.state.database.included.map(item => item.attributes.uri.url)
                var arrayOfCards;
            }


        } else {

        }


        return (
            <div className="App">
                <hr/>
                <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet"/>
                <Router>
                    <header>
                        <HeaderHook/>
                    </header>
                    <Switch>
                        <Route exact path="/">
                            <Accueil/>
                        </Route>
                        <Route path="/about">

                        </Route>
                        <Route path="/outils">

                        </Route>
                        <Route path="/projets">
                        </Route>
                    </Switch>
                </Router>

                    {
                        /*
                        this.state.articles.map(item => <div><h1>{item.attributes.title}</h1>  <div dangerouslySetInnerHTML={{__html:item.attributes.body.value}}></div>
                            <img src={item.relationships.field_image.data.id}/></div>)
                        */
                    }
                {/*     <DestinationList
              data={this.state.data}
            />
            {this.state.articles !== null &&
            this.state.articles !== undefined &&
            this.state.articles.length > 0 ?
              this.state.articles.map(item =><div> {item.attributes.title} </div> )
              :
              <div>No articles found.</div>
            }*/}
                <Footer/>

            </div>
        );
    }

    loadDestinations() {
        // Fetch Destinations.
        fetch(LIST_URL, {mode: 'cors'})
            .then(function (response) {
                return response.json();
            })
            .then((data) => this.updateData(data))
            .catch(err => console.log('Fetching Destinations Failed', err));
    }

    updateData(responseData) {
        this.setState({database: responseData}, () => console.log(this.state));
    }

    componentWillMount() {
        this.loadDestinations();
    }

    componentDidUpdate() {
        console.log(this.state.token)
        console.log(this.state.articles)
        console.log(this.state.database)
    }

    componentDidMount() {
        if (this.state.token == null) {

        }
        fetch('http://localhost:8900/dsin/web/oauth/token', {
            method: 'POST',
            headers: {
                'Response-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: qs.stringify({
                grant_type: 'password',
                client_id: 'fd9bc24f-9134-491c-a0d5-4700ad76e021',
                client_secret: 'abc123',
                username: 'test',
                password: 'test',
            })
        }).then((response) => response.json()).then((responseData) =>
            this.setState({token: responseData, tokenLoaded: true},
            ))
        fetch('http://localhost:8900/dsin/web/jsonapi/node/conseils', {
            method: 'GET',
            headers: {
                'Autohrization': 'Beaver' + this.state.token.access_token,
                'Accept': 'application/vnd.api+json',
            },
        }).then((response) => response.json()).then((data) => this.setState({articles: data.data,}, () => console.log(this.state)
        ))
    }

    loadArticles(connectionAPI) {
        console.log(connectionAPI)
        if (connectionAPI) {

        }
        console.log(this.state.articles)
    }

}

export default App;
