 
 let serial = 0;
 // 1st card
document.getElementById('first-card').addEventListener('click',function(){
    serial +=1;
    // get the data using id
    const geometryName = document.getElementById('first-name').innerText;
    const geometryFirstValue = document.getElementById('triFirst-input').value;
    const geometrySecondValue = document.getElementById('triSecond-input').value;

    //calculation
    const areaCal = 0.5 * parseFloat(geometryFirstValue) * parseFloat(geometrySecondValue);

     //validation
    if( isNaN(geometryFirstValue)||isNaN(geometrySecondValue)|| isNaN(geometryFirstValue && geometrySecondValue)||geometryFirstValue == ""||
    geometrySecondValue == ""||
    geometryFirstValue <= 0 ||
    geometrySecondValue <= 0 ){
        alert('please provide a valid number');
        return;
    }
   
// show the data

   displayData(geometryName,areaCal.toFixed(2));

}) 


//2nd card
document.getElementById('second-card').addEventListener('click',function(){
    serial +=1;
    
    const geometryName = document.getElementById('second-name').innerText;
    const geometryFirstValue = document.getElementById('recFirst-input').value;
    const geometrySecondValue = document.getElementById('recSecond-input').value;
    

//calculation
    const areaCal = parseFloat(geometryFirstValue) * parseFloat(geometrySecondValue);
//validation
      if( isNaN(geometryFirstValue)||isNaN(geometrySecondValue)|| isNaN(geometryFirstValue && geometrySecondValue)||geometryFirstValue == ""||geometrySecondValue == ""|| geometryFirstValue <= 0 ||geometrySecondValue <= 0 ){
        alert('please provide a valid number');
        return;
    }
   

    displayData(geometryName,areaCal.toFixed(2));

})


// common function to display data
function displayData(geometryName,areaCal){
    const container = document.getElementById('table-container');

    const tr =document.createElement('tr');
    tr.innerHTML =`
    <td>${serial}</td>
    <td>${geometryName}</td>
    <td>${areaCal}cm<sup>2</sup></td>
    <td><button class="rounded-full p-1 text-white bg-cyan-600 hover:bg-blue-600">Convert to m<sup>2</sup></button></td>
    `;
    container.appendChild(tr); 
}


/* document.getElementById('card-1').addEventListener('mouseover',function(){
    getNewColor();
})

function getNewColor(){
    let symbols, color;
    symbols = "0123456789ABCDEF";
    color = "#";
    for(let i = 0; i<6 ;i++){
        color = color + symbols[Math.floor(Math.random()*16)];
    }
    document.main.style.background = color;
} */