import makeRequest from './makeRequest.js'

export default function getWords(page, group){
    return makeRequest(`https://afternoon-falls-25894.herokuapp.com/words?page=${page}&group=${group}`)
}