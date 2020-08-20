// 

$(function(){
    'use strict';
    /* $('.dog-header img').on('click',function(){
        $('main').load("../register.html"); //displaying different webpage
    }); */


    //  Displaying txt files when clicking on main section 

    $('main').on('click',loadAjax) //loads txt files

    function loadAjax(){
        $.ajax("js/pets.txt",{
            success:addContent,
            type:"GET",
            dataType: 'text'
        });

    }
    function addContent(data,status, extraVar){
        $('div#data').text(data);
        console.log(status);
    }

    
});