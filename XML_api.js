const api_url = 'https://jsonplaceholder.typicode.com/todos/';

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if(request.status === 200 && request.readyState === 4){
        console.log(request.responseText);
    }

})


request.open('GET', api_url);
request.send();