export default function makeRequest(url){
    return fetch(url).then((response) => {
        if(response.status !== 200){
            return response.text().then(text => {
                throw new Error(text);
            });
        }
        return response.json();
    });
}