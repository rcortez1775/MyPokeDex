import React, {Component} from 'react';
import './Table.css';

const Body = props => { 
    const card = props.characterData.map((row, index) => {
        return (
            <div key={index}>
                <h5>{row.name}</h5>
                <p className="pokecard"><button onClick={() => props.removeCharacter(index)}>Release</button></p>
            </div>
        );
    });
    return <tbody>{card}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table className="table">
                <Body 
                    characterData={characterData} 
                    removeCharacter={removeCharacter} 
                />
            </table>
        );
    }
}

export default Table;