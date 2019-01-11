import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';
import './App.css';
import {Button} from 'react-materialize';
import {Modal} from 'react-materialize';
import {Slider} from 'react-materialize';
import {Slide} from 'react-materialize';


class App extends Component {
    state = {
        characters: [],
    };

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <div className="intro">
                    <h1 className="Title">MyPok&eacute;dex</h1>
                </div>
                <Table className="table"
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <Modal className="modal"
                trigger={<div className="containment">
                <Button floating large className='pulse-button' waves='light' />
                </div>}>
                <div>
                    <h4>Add a Pok&eacute;mon</h4>
                    <Form handleSubmit={this.handleSubmit} /></div>
                </Modal>
                <Modal
                    trigger={<Button floating large className="rules"></Button>}>
                    <Slider>
                        <Slide 
                            src="assets/charizard.jpg" 
                            title="Collect!" 
                            placement="left" className="sub1">
                            Hit the flashing Pok&eacute;ball to add to your collection.
                        </Slide>
                        <Slide 
                            src="assets/bulbasaur.jpg"
                            title="Cherish!"
                            placement="right" className="sub">
                            Storing all your Pok&eacute;mon has never been easier.
                        </Slide>
                        <Slide 
                            src="assets/squirtle.jpg" 
                            title="Discover!"
                            placement="right" className="sub">
                            Become a true Pok&eacute;mon master with MyPok&eacute;dex.
                        </Slide>
                    </Slider>
                </Modal>
            </div>
            
        );

    }
    
}

export default App;