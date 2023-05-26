const btnAdd = document.getElementById('btnAdd');
const table = document.getElementById('table');

const dateInput = document.getElementById('date');
const descriptInput = document.getElementById('descript');
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');


function deleteRow(row) {
  const r = row.parentNode.parentNode.rowIndex;
  document.getElementById('table').deleteRow(r);
}

btnAdd.addEventListener('click', function() {
  const date = dateInput.value;
  const descript = descriptInput.value;
  const category = categoryInput.value;
  const amount = amountInput.value;
  
  
  const form = `<tr>
                  <td>${date}</td>
                  <td>${descript}</td>
                  <td>${category}</td>
                  <td>${'$'+ amount}</td>
                  <td><input type="button" value="Delete" onclick="deleteRow(this)"></td>
                </tr>`;

                dateInput.value = "";
                descriptInput.value = "";
                categoryInput.value = "";
                amountInput.value = "";
  
                
  
  table.innerHTML += form;
})

