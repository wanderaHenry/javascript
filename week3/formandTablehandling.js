const form1 = document.getElementById("chicksRequestform");
const table = document.getElementById("tb1").getElementsByTagName("tbody")[0];
//const table = document.queryselector('#tb1 tbody')
const errorMsg = document.getElementById("errormsg");
console.log(table);
form1.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("farmerName").value.trim();
  const age = Number(document.getElementById("age").value);
  const quantity = Number(document.getElementById("quantity").value);
  const type = document.getElementById("chickType").value;

  errorMsg.textContent = "";

  // Basic Validation
  if (!name || age <= 0 || quantity <= 0 || !type) {
    errorMsg.textContent = "Please fill in all fields correctly.";
    return;
  }
  //save tolocal
  saveToLocalStorage();

  addToTable(name, age, quantity, type);
  form1.reset();
  
});
function saveToLocalStorage(){
  
}
//funcction stringfy
function addToTable(name, age, quantity, type) {
  let newRow = table.insertRow();
  let cell1 = newRow.insertCell();
  let cell2 = newRow.insertCell();
  let cell3 = newRow.insertCell();
  let cell4 = newRow.insertCell();

  cell1.textContent = name;
  cell2.textContent = age;
  cell3.textContent = quantity;
  cell4.textContent = type;
}



