import React from 'react';
import {observer} from 'mobx-react';
import Store from '~/store/store.js';
import getRandomInt from './helpers/random.js';
import Loader from './loader.js';
import Word from './word.js';

Store.getWords(getRandomInt(29), 0); // because API have 29 pages with words

@observer class Game extends React.Component {

    words = [];
    currentWord = null;

    setWords(){
        this.words = Store.words.slice(0, 12).sort((a, b) => a['word'] < b['word'] ? -1 : 1);
    }

    image(){
        let img = document.querySelector('#img');
        let root = 'https://raw.githubusercontent.com/necket/rslang-data/master/';
        img.src = root + this.currentWord['image'];
    }

    speech(){
        let audio = document.querySelector('#audio');
        let root = 'https://raw.githubusercontent.com/necket/rslang-data/master/';
        audio.src = root + this.currentWord['audio'];
    }

    selectItem = (id) => {
        
        this.currentWord = this.words[id];

        this.image();
        this.speech();

        [...(document.querySelectorAll('.item'))].map(el =>
            el.id === id ? 
            el.classList.add('item-active') :
            el.classList.remove('item-active')
        );
    }

    render(){

        let words = <Loader></Loader>

        if(Store.loading === false){

            this.setWords();
            
            words = this.words.map((el, i) => 
                <Word key={el['word'] + '-col'} el={el} i={i} selectItem={this.selectItem}></Word>
            )
        }
        
        return (<>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="static">
                        <img src="./dist/img/blank.jpg" alt="blank" id="img" className="img-fluid"/>
                    </div>
                </div>
            </div>
            <div className="row" id='words'>
                {words}
            </div>
            <audio src="" id="audio" autoPlay></audio>
        </>);
            
        
    }
}

export default Game;