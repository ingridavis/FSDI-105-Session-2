console.log("loaded");

// object literal for the salon
const salon={
    name:"Scruffy to Fluffy",
    phone:"555-555-555",
    address:{
        city:"San Diego",
        street:"Main St",
        number:"111" 
    },
    pets:[]
}
console.log(salon);
let {name, phone, address:{city, street, number}}=salon;
console.log(city);


//document.getElementById('info').innerHTML="<p>"+name+"<b>"+city+"</b> </p>";  // selecting HTML element

document.getElementById("info").innerHTML=`
<p class="footer-info"> ${name} 
    <br>
    <b> ${city}, ${street} ${number} </b> 
    <br>
    ${phone}
    </p>
    `;

// object constructor for the pets
var c=1;

class Pet{
    constructor(name, age, type, breed, gender,service, ownersName, contactPhone, ownersEmail){
        this.name=name;
        this.age=age;
        this.type=type;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        this.ownersEmail=ownersEmail;
        this.id=c;
        c++;

    }
}

const scooby=new Pet("Scooby", "50", "dog", "Dane", "male",  "full service", "Shaggy", "555-556-8888", "shaggy@gmail.com");
console.log(scooby);

const scrappy= new Pet ("Scrappy", "5", "dog", "Dane", "male", "full service", "Shaggy", "555-611-3222", "shaggy@gmail.com");
console.log(scrappy);

const Tango= new Pet ("Tango", "3", "dog", "Pitbull", "male", "shower", "Ingrid", "555-888-7777", "ingrid@gmail.com");
console.log(Tango);

const Cash= new Pet ("Cash", "1", "dog", "Bulldog", "female", "haircut", "Ingrid", "555-888-7777",  "ingrid@gmail.com");
console.log(Cash);


// add pets to array

salon.pets.push(scooby);
salon.pets.push(scrappy);
salon.pets.push(Tango);
salon.pets.push(Cash);

 // displays number of elements or pets in the array
 console.log("There are " + salon.pets.length + " pets in the salon");
 
// display names of pets using for loop
for(let p=0; p<salon.pets.length; p++){
    console.log("Pet Name: " + salon.pets[p].name);
}

// get info from the inputs and save in variables using an ID 
var txtname=document.getElementById("petName");
var txtage=document.getElementById("petAge");
var txttype=document.getElementById("petType");
var txtbreed=document.getElementById("petBreed");
var txtgender=document.getElementById("petGender");
var txtservice=document.getElementById("petService");
var txtowner=document.getElementById("ownersName");
var txtphone=document.getElementById("contactPhone");
var txtemail=document.getElementById("ownersEmail");


// register function so when we click button
function register(){
    // If everything is correct, we create the pet object
    var thePet = new Pet(txtname.value, txtage.value, txttype.value,txtbreed.value, txtgender.value, txtservice.value, txtowner.value, txtphone.value, txtemail.value);

    // push the pet into the array
    salon.pets.push(thePet);
    console.log(salon.pets);
    // clear the inputs for user experience
    clear();
   // display(); //for directory.js
   displayTable(thePet); 
   
}

function clear(){
    txtname.value="";
    txtage.value="";
    txttype.value="";
    txtbreed.value="";
    txtgender.value="";
    txtservice.value="";
    txtowner.value="";
    txtphone.value="";
    txtemail.value="";
}

// Extra HW: display on the console - the oldest pet and the youngest pet.
// Add CSS to the form
//Graded HW is team tree practice

//Session 3 HW: Team treehouse
//Extra HW: display how many pets in HTML and automatically add a new pet
 
function displayTable(aPet){
    var tbody=document.getElementById('rowPet');
    var row = `<tr id ="${aPet.id}">  
        <td>${aPet.name}</td>
        <td>${aPet.age}</td>
        <td>${aPet.type}</td>
        <td>${aPet.gender}</td>
        <td>${aPet.breed}</td>
        <td>${aPet.service}</td>
        <td>${aPet.ownersName}</td>
        <td>${aPet.contactPhone}</td>
        <td>${aPet.ownersEmail}</td>
        <td><button class="btn btn-danger" onclick="deletePet(${aPet.id})"> <i class="fas fa-trash-alt"></i></button></td> </tr>
    `;
    tbody.innerHTML+=row;
}

function deletePet(petID){
    //select element to delete
    var tr=$('#' +petID); // making an id
    // Made code line 126 - the tr is now the id, so we can delete the whole row.
    var indexDelete; //important, know the position in array

    //travel array 
    for(var i=0; i<salon.pets.length; i++){
        var selected=salon.pets[i]; //the selected at that time
        if(selected.id===petID){ //when the selected id is equal to what I am clicking on in petID
           indexDelete=i; //save location 
         }
    }    

    // delete from array
    salon.pets.splice(indexDelete,1);// 1 means just one element 
    //delete pet row from the HTML using remove function
    tr.remove();
}
// search pet 
function searchPet(){
    var ss=$('#petSearch').val(); // val means value in js
    var searchString= ss.toLowerCase();

    for(var i=0; i<salon.pets.length; i++){
        var selected=salon.pets[i];
        if(selected.name.toLowerCase()===searchString || selected.service.toLowerCase()===searchString || selected.type.toLowerCase()===searchString){
            $("#"+selected.id).addClass('highlight');
        }
    }
}

function init(){
    displayTable(scooby);
    displayTable(scrappy);
    displayTable(Tango);
    displayTable(Cash);

    $('#btn-register').click(register);
    $('#contactPhone').keypress(function(e){
        console.log(e.key);
        if(e.key==="Enter"){
            console.log("Add the pet by hitting enter");
        }
    });
}

//window.onload=init;
$(document).ready(()=>init());