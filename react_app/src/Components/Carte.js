import React from 'react';


export default class Carte extends React.Component {
    render() {
        return (
            <div>
                {this.props.data == null ? <h2> Loading...</h2> : <h2> {this.props.data.data.id}</h2>}

            </div>
        );
    }
}