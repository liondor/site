import React, { Component } from 'react';
import './App.css';
import DestinationList from "./Components/Destination/DestinationList";
const LIST_URL = 'http://localhost:8900/dsin/web/jsonapi/node/destination';
var qs = require('qs');
class App extends Component {
 constructor() {
    super();
    this.state = { data: null, token:[], articles:[], tokenLoaded:false};
    this.loadDestinations = this.loadDestinations.bind(this);
    this.updateData = this.updateData.bind(this);
    this.loadArticles = this.loadArticles.bind(this);

  }
  render() {
    return (
      <div className="App">
       <DestinationList
          data={this.state.data}
        />


{this.state.token.access_token}
{console.log(this.state.token)}
{console.log(this.state.articles)}



      </div>
    );
  }
 loadDestinations() {
    // Fetch Destinations.
    fetch(LIST_URL, {mode:'cors'})
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.updateData(data))
      .catch(err => console.log('Fetching Destinations Failed', err));
  } updateData(responseData) {
   this.setState({data: responseData.data});
 }componentWillMount() {
   this.loadDestinations();
 }
componentDidMount()
{
fetch('http://localhost:8900/dsin/web/oauth/token', {
  method: 'POST',
  headers: {
    'Response-Type' : 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: qs.stringify({
    grant_type: 'password',
    client_id: 'fd9bc24f-9134-491c-a0d5-4700ad76e021',
    client_secret: 'abc123',
    username:'test',
    password:'test',
  })
}).then((response) => response.json()).then((responseData) =>
	this.setState({token :responseData, tokenLoaded:true},
))
fetch('http://localhost:8900/dsin/web/jsonapi/node/article', {
  method: 'GET',
  headers: {
    'Autohrization': 'Beaver' +this.state.token.access_token,
  },
}).then((response) => response.json()).then((responseData) =>	this.setState({articles :responseData},
))
console.log(this.state.token)
  console.log(this.state.articles)
}
loadArticles(connectionAPI) {
      console.log(connectionAPI)
  if(connectionAPI)
  {



  }
  console.log(this.state.articles)
}


}

export default App;
