import {observable, action} from 'mobx';
import getWords from '~/api/getWords.js';

class Store{
    words = [];
    @observable loading = true;

    @action getWords(page, group){
        
        this.loading = true;
        
        getWords(page, group).then(data => {
            this.words = data;
        }).catch((e) => {
            console.log(e);
        }).then(() => {
            this.loading = false;
        });
    };
}

export default new Store();