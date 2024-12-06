

let input = document.querySelector('input');
let btn=document.querySelector('button');
let list = document.querySelector('#list');


//btn press krke search krna
btn.addEventListener('click', function(){
    let searchText = input.value;
    let data = fetchData(searchText);
    input.value = '';
})

//api call krna
function fetchData(searchText) {
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        manipulateDom(response.data);
    })  
}

//dom change krega chize
function manipulateDom(datas){    //datas ke andar hai array

    //remove already present movies
    while(list.firstChild) {
        list.firstChild.remove();
    }
    
    //add movies
    for(let data of datas){
        let figure = document.createElement('figure');

        if(data.show.image){
            figure.innerHTML = `
                <img src="${data.show.image.original}"/>
                // <p>#{data.show.summary}</p>
                <h2>${data.show.name}</h2>`;
            
            list.appendChild(figure);
        }
        // else{

        // }
    }
}

















