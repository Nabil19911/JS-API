const api_url = 'https://jsonplaceholder.typicode.com/todos/';

const todoList = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.status === 200 && request.readyState === 4){
            // Convert JSON data to JS array
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4){
            callback('Could not fetch data', undefined);
        }
    });
    request.open('GET', api_url);
    request.send();
}

todoList((err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})