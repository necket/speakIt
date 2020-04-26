import React from 'react';
import Game from './components/game.js'
import Switch from './components/switch.js'

class App extends React.Component{

    render(){
        return (
            <div className="container">
                <Switch></Switch>
                <Game></Game>
            </div>
        )
    }
}

export default App;