

function ageInDays(){
    var birthYear=prompt("What year were you born... Good friend?");
    var ageInDays=(2020 - birthYear)*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('You are '+ ageInDays+ ' days');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

// Challenge 2: Cat Generator

function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src="https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}