import React, { Component } from 'react';
import './App.css';
import DestinationList from "./Components/Destination/DestinationList";
const LIST_URL = 'http://localhost:8900/dsin/web/jsonapi/node/destination';

class App extends Component {
 constructor() {
    super();
    this.state = { data: null };
    this.loadDestinations = this.loadDestinations.bind(this);
    this.updateData = this.updateData.bind(this);
  }
  render() {
    return (
      <div className="App">
        <DestinationList
          data={this.state.data}
        />
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
}

export default App;
