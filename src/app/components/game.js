import React from 'react';
import {observer} from 'mobx-react';
import Store from '~/store/store.js';
import getRandomInt from './helpers/random.js'

Store.getWords(getRandomInt(29), 0); // because API have 29 pages with words

@observer class Game extends React.Component {

    words = [];
    currentWord = null;

    setWords(){
        this.words = Store.words.slice(0, 12).sort((a, b) => a['word'] < b['word'] ? -1 : 1);
    }

    image(){
        let img = document.querySelector('#img');
        let root = 'https://raw.githubusercontent.com/irinainina/rslang-data/master/data/';
        img.src = root + this.currentWord['image'].split('/')[1];
    }

    speech(){
        let audio = document.querySelector('#audio');
        let root = 'https://raw.githubusercontent.com/irinainina/rslang-data/master/data/';
        audio.src = root + this.currentWord['audio'].split('/')[1];
    }

    selectItem(id){
     
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

        if(Store.loading === false){

            this.setWords();
            
            let words = this.words.map((el, i) => 
                <div className="col-12 col-md-6 col-lg-3 mt-3" key={el['word'] + '-col'}>
                    <div className="item" onClick={() => this.selectItem(`${i}`)} id={`${i}`}>
                        <p className="word">
                            {el['word']}
                        </p>
                        <p className="transcription">
                            {el['transcription']}
                        </p>
                        <span className="audio-icon">
                            <img src="./dist/img/sound.svg" alt="sound"/>
                        </span>
                    </div>
                </div>
            )

            return (<>
                <div className="row">
                    <div className="col">
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
            
        }else{
            return ( 
                <div className="loader-overlay">
                    <div className="loader"></div>
                </div>
            );
        }
    }
}
export default Game;