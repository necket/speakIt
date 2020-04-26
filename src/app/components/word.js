import React from 'react';

class Word extends React.Component{
     
    constructor(props){
        super(props);
        props = props;
    }

    render() {
        return (
            <div className="col-12 col-md-6 col-lg-3 mt-3">
                <div className="item" onClick={() => this.props.selectItem(`${this.props.i}`)} id={`${this.props.i}`}>
                    <p className="word">
                        {this.props.el['word']}
                    </p>
                    <p className="transcription">
                        {this.props.el['transcription']}
                    </p>
                    <span className="audio-icon">
                        <img src="./dist/img/sound.svg" alt="sound"/>
                    </span>
                </div>
            </div>
        )
    }
    
}

export default Word;