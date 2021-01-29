const api_url = 'https://jsonplaceholder.typicode.com/todos/';

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if(request.status === 200 && request.readyState === 4){
        const data = JSON.parse(request.responseText);
        console.log(data);
    }else if(request.readyState === 4){
        console.log('No data to fetch');
    }
});


request.open('GET', api_url);
request.send();