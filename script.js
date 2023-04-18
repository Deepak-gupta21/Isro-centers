
var searchInput = document.querySelector(".form-input").value.toLowerCase();
var displayResult = document.querySelector(".display-container");
var displayBox = document.querySelector(".display-box");





let stateObject={
  currentSelectedFilter:'',
  centerData:null
}





fetch("https://isro.vercel.app/api/centres")
  .then((response) => response.json())
  .then((data) => {
    // Processing the data here
    console.log(data.centres);
    stateObject.centerData=data.centres; //stores array with centers data
    // console.log(stateObject.centerData[0]);
  
    // console.log(stateObject.centerData.length);
        // console.log(stateObject.centerData);
   
     MainFunction(stateObject);
    // displayDefaultResults(stateObject);
    // doFilter(stateObject);
   
  })
  .catch((error) => {
    console.error(error);
    displayResult.innerHTML = '<p>An error occurred while fetching data.</p>';
  });






  function onFilterSelect(filterQuery) {
    // const searchInput = document.querySelector(".form-input").value.toLowerCase();
    const filterButtons = document.querySelectorAll(".btn")
    for (let i = 0; i < filterButtons.length; i++) {
     filterButtons[i].classList.remove("selected");
    }
    stateObject.currentSelectedFilter=filterQuery;
    console.log(stateObject.currentSelectedFilter);
    button.classList.toggle("selected");
    button.style.backgroundColor = button.classList.contains("selected") ? "#f00" : "#ccc";
    doFilter(stateObject,searchInput);
  
  }






  function MainFunction(stateObject){
    if(stateObject.currentSelectedFilter==''){
      displayDefaultResults(stateObject);
    }
    else{
      doFilter(stateObject);
    }
  }






function displayResults() {
  doFilter(stateObject,searchInput);
 }


  








function doFilter(){
    
  const searchInput = document.querySelector(".form-input").value.toLowerCase();

  let newArray = stateObject.centerData.filter(function(arrayElement)
  {
  //  return objectElement.stateObject.currentSelectedFilter === searchInput;
  if(stateObject.currentSelectedFilter==='name'){
    return (arrayElement.name.toLowerCase() === searchInput);
  }
  if(stateObject.currentSelectedFilter==='State'){
    // console.log(arrayElement.State);
    return (arrayElement.State.toLowerCase() === searchInput);
  }
  if(stateObject.currentSelectedFilter==='Place'){
    return (arrayElement.Place.toLowerCase() === searchInput);
  }
  });
  // console.log(stateObject.currentSelectedFilter);
  console.log(newArray);

  //clearing the container
  displayResult.innerHTML = "";
  console.log(newArray.length);
  for (let i = 0; i < newArray.length; i++) {
    // access the current object using the index i
    const currentObject = newArray[i];
    console.log(currentObject);
    createTheBox(currentObject);
  }

}
  

function displayDefaultResults(stateObject){
  //use a for loop to iterate through the array
  for (let i = 0; i < stateObject.centerData.length; i++) {
    // access the current object using the index i
    const currentObject = stateObject.centerData[i];
    
    createTheBox(currentObject);
  }
  
  }
  



function createTheBox(currentObject){

// Create the HTML elements
const newdiv = document.createElement('div');
newdiv.classList.add('display-box');

const table = document.createElement('table');
const thead = document.createElement('thead');
const trHead = document.createElement('tr');
const thCenter = document.createElement('th');
const thCity = document.createElement('th');
const thState = document.createElement('th');
const tbody = document.createElement('tbody');
const trBody = document.createElement('tr');
const tdCenter = document.createElement('td');
const tdCity = document.createElement('td');
const tdState = document.createElement('td');

// Add content to the HTML elements
thCenter.textContent = 'CENTER';
thCity.textContent = 'CITY';
thState.textContent = 'STATE';
tdCenter.textContent = `${currentObject.name}`;
tdCity.textContent = `${currentObject.Place}`;
tdState.textContent = `${currentObject.State}`;

// Build the HTML structure
newdiv.appendChild(table);
table.appendChild(thead);
thead.appendChild(trHead);
trHead.appendChild(thCenter);
trHead.appendChild(thCity);
trHead.appendChild(thState);
table.appendChild(tbody);
tbody.appendChild(trBody);
trBody.appendChild(tdCenter);
trBody.appendChild(tdCity);
trBody.appendChild(tdState);

// Apply the CSS styles
newdiv.style.display = 'flex';
newdiv.style.flexDirection = 'column';
newdiv.style.backgroundColor = 'var(--blue)';
newdiv.style.borderRadius = '20px';
newdiv.style.width = '650px';
newdiv.style.height = '50px';
newdiv.style.margin = 'auto';
newdiv.style.justifyContent = 'center';
newdiv.style.padding  = '8px 20px';
newdiv.style.marginBottom = '8px'; 

thCenter.style.textAlign = 'left';
thCenter.style.paddingRight = '90px';
thCenter.style.fontSize = '20px';
thCenter.style.color = 'white';

thCity.style.textAlign = 'left';
thCity.style.fontSize = '20px';
thCity.style.color = 'white';

thState.style.textAlign = 'left';
thState.style.fontSize = '20px';
thState.style.color = 'white';

tdCenter.style.fontSize = '1.5vw';
tdCenter.style.textAlign = 'left';
tdCenter.style.color = 'white';

tdCity.style.fontSize = '1.5vw';
tdCity.style.textAlign = 'left';
tdCity.style.color = 'white';

tdState.style.fontSize = '1.5vw';
tdState.style.textAlign = 'left';
tdState.style.color = 'white';

// Add the HTML element to the page

displayResult.appendChild(newdiv);

  
}

















