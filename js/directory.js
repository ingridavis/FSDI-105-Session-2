function display(){

var pets = salon.pets;
//console.log(pets);


// dsiplaying pet by pet 
// creating html code in js to display in HTML webpage

const dogImg="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwt8TGiLtJ1N5SXygH9EkF9rIXe3zVtmM3gg&usqp=CAU";
const catImg="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTia9KhvW6bklrLeLbvU7UGysvhfcTtS1nOng&usqp=CAU";
const petSection= document.getElementById('pets');

var text="";
var icon;
//traveling array of pets, 
for(var i=0;i<pets.length; i++){

    if(pets[i].type ==='dog'){
        icon=dogImg;
    }else if(pets[i].type==='cat'){
        icon=catImg;
    }

    text+=`
        <div class="pet">
            <h2>Pet Name: ${pets[i].name}</h2>
            <img class="icon" src="${icon}">
            <p>Age: ${pets[i].age}</p>
            <p>Type: ${pets[i].type}</p>
            <p>Breed: ${pets[i].breed}</p>
            <p>Gender: ${pets[i].gender}</p>
            <p>Service: ${pets[i].service}</p>
            <p> Owner: ${pets[i].ownersName}<p>
            <p> Phone: ${pets[i].contactPhone}<p>
            <p> Email: ${pets[i].ownersEmail}</p>
        </div>
    `;
} 

petSection.innerHTML=text;
}
display();





