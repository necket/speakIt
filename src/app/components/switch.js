import React from 'react';
import {observer} from 'mobx-react';
import Store from '~/store/store.js';
import getRandomInt from './helpers/random.js'

@observer class Switch extends React.Component {

    switch(id){
        Store.getWords(getRandomInt(29), id);

        [...(document.querySelectorAll('.point'))].map(el =>
            el.id === 'point-' + id ? 
            el.classList.add('point-active') :
            el.classList.remove('point-active')
        );
    }
    
    componentDidMount(){
        document.querySelector('#point-0').classList.add('point-active')
    }

    render(){

        let groups = [0, 1, 3, 4, 5].map(el => 
            <li className="point" key={el} id={'point-' + el} onClick={() => this.switch(el)}></li>
        )

        return (
            <div className="row">
                <div className="col-12">
                    <ul className="points">
                        {groups}
                    </ul> 
                </div>
            </div>
        )
    }
}

export default Switch;