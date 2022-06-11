let result = document.querySelector('#result');

let formData = document.querySelector('#form-data');

let allInputs = document.querySelector('#inputs');


function getAllCars(){
    fetch("")
    .then(res => res.json())
    result.innerHTML = `${response.map(
        (elemento,index) => 
        `
        <div key="${index}">
        <h6> ${elemento.model} </h6>
        <img src="${elemento.photod[0]}" width="300px" height="auto" />
        `
)
.join("")}`
}

getAllCars()

function getColors(){
    fetch('https://e-carros-api.herokuapp.com/colors')
    .then(res => res.json())
    .then(( result )=> {
        allInputs.innerHTML = `${

            result.map( (el, index) => 
                `<input type="radio" key="${index} value="${el}" />
                 <label for="${el}"> ${el} </label>
                 <br />
                `
            ).join('')}`;
        
        

    } );
}

getColors();

formData.addEventListener("submit", (e) => {
    e.preventDefault();

    let colors = document.querySelectorAll('input[value][type="radio"].checked').Nodelist.value;

    let colorSelected = [];
   
    colors.forEach((Element) => {
        colorSelected.push(Element.value);
    });


    fetch(
        `ttps://e-carros-api.herokuapp.com/adverts?${
            colorSelected.length > 0 && `color=${colorSelected}`
        }`
    )
    .then((ren) => res.json())
    .then((response) => {
        result.innerHTML = `${response.map(
            (elemento,index) => 
            `
            <div key="${index}">
            <h6> ${elemento.model} </h6>
            <img src="${elemento.photod[0]}" width="300px" height="auto" />
            `
    )
.join("")}`
    })






    
})

