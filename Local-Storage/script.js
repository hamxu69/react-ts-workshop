let nameinput = document.querySelector("#name");
let emailinput = document.querySelector("#email");
let phoneinput = document.querySelector("#phone");
let tablebody = document.querySelector("#tablebody");
let local = JSON.parse(localStorage.getItem("localArray")) || [];
function generateRandomNumericID(length) {
  let id = "";
  const digits = "0123456789";
  for (let i = 0; i < length; i++) {
    id += digits.charAt(Math.floor(Math.random() * digits.length));
  }
  return id;
}

function render() {
  let innerhtml = "";
  local.forEach(el => {
    innerhtml += `        
      <tr id="row-${el.ID}">
        <td><input type="text" value="${el.namev}" id="name-${el.ID}" disabled /></td>
        <td><input type="email" value="${el.emailv}" id="email-${el.ID}" disabled/></td>
        <td><input type="tel" value="${el.phonev}" id="tel-${el.ID}" disabled/></td>
        <td>
          <button style="display: none;" id="savebtn-${el.ID}" onclick="save('${el.ID}')">Save</button>
          <button onclick="edit('${el.ID}')" id="editbtn-${el.ID}">Edit</button>
        </td>
        <td><button onclick="remove('${el.ID}')" id="remove-${el.ID}">Remove</button></td>
      </tr>`;
  });
  tablebody.innerHTML = innerhtml;
}

function edit(btnid) {
  let inputs = document.querySelectorAll(`#row-${btnid} input`);
  let editbtn = document.querySelector(`#editbtn-${btnid}`);
  let savebtn = document.querySelector(`#savebtn-${btnid}`);
  editbtn.style.display = 'none';
  savebtn.style.display = 'block';
  inputs.forEach(input => {
    input.disabled = false;
  });
}

function save(btnid) {
  let inputs = document.querySelectorAll(`#row-${btnid} input`);
  let editbtn = document.querySelector(`#editbtn-${btnid}`);
  let savebtn = document.querySelector(`#savebtn-${btnid}`);
  editbtn.style.display = 'block';
  savebtn.style.display = 'none';
  inputs.forEach(input => {
    input.disabled = true;
  });
  
  let namevinput = document.querySelector(`#name-${btnid}`);
  let emailvinput = document.querySelector(`#email-${btnid}`);
  let phonevinput = document.querySelector(`#tel-${btnid}`);
  
  local = local.map(element => {
    if (element.ID === btnid) {
      element.namev = namevinput.value;
      element.emailv = emailvinput.value;
      element.phonev = phonevinput.value;
    }
    return element;
  });
  
  localStorage.setItem('localArray', JSON.stringify(local));
}

function remove(btnid) {
  let row = document.querySelector(`#row-${btnid}`);
  row.remove();
  local = local.filter(el => el.ID !== btnid);
  localStorage.setItem('localArray', JSON.stringify(local));
}

function setinLocal() {
  if (nameinput.value.trim() && emailinput.value.trim() && phoneinput.value.trim() !== "") {
    let obj = {
      namev: nameinput.value,
      emailv: emailinput.value,
      phonev: phoneinput.value,
      ID: generateRandomNumericID(3),
    };
    local.push(obj);
    localStorage.setItem('localArray', JSON.stringify(local));
    phoneinput.value = '';
    emailinput.value = '';
    nameinput.value = '';
    render();
  } else {
    console.log("Fill inputs properly.");
  }
}

window.onload = () => {
  render();
};
