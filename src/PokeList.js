import React from 'react';

import axios from 'axios';

export default class PokeList extends React.Component {
    state = {
      pokemon: []
    }

    componentDidMount() {
        axios.get(`https://pokeapi.co/api/v2/ability/?limit=20&offset=20`)
          .then(res => {
            const pokemon = res.data;
            this.setState({ pokemon });
          });
      }

      render() {
        return (
          <ul>
            { this.state.pokemon.map(pokemon => <li>{pokemon.name}</li>)}
          </ul>
        )
      };
}