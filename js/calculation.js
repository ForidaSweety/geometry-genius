 
 let serial = 0;
 // 1st card
document.getElementById('first-card').addEventListener('click',function(){
    serial +=1;
    // get the data using id
    const geometryName = document.getElementById('first-name').innerText;
    const geometryFirstValue = document.getElementById('triFirst-input').value;
    const geometrySecondValue = document.getElementById('triSecond-input').value;

    //calculation
    const areaCal = 0.5 * parseInt(geometryFirstValue) * parseInt(geometrySecondValue);
     
// show the data

   displayData(geometryName,areaCal);

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