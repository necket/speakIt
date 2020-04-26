import {observable, action} from 'mobx';
import getWords from '~/api/words.js'

class Store{
    words = [];
    @observable loading = true;

    @action getWords(page, group){
        
        this.loading = true;
        
        getWords(page, group).then(data => {
            this.words = data;
        }).then(() => {
            this.loading = false;
        });
    };
}

export default new Store();