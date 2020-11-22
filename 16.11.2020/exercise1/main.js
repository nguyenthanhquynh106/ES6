function editRow(no) {
  document.getElementById("edit-button" + no).style.display = "none";
  document.getElementById("cancel-button" + no).style.display = "inline-block";
  document.getElementById("save-button" + no).style.display = "inline-block";

  var name = document.getElementById("name-row" + no);
  var gender = document.getElementById("gender-row" + no);
  var age = document.getElementById("age-row" + no);

  name.innerHTML = "<input type='text' id='name-text" + no + "' value='" + name.innerHTML + "'>";
  gender.innerHTML = "<input type='text' id='gender-text" + no + "' value='" + gender.innerHTML + "'>";
  age.innerHTML = "<input type='text' id='age-text" + no + "' value='" + age.innerHTML + "'>";
}

function saveRow(no) {
  var nameValue = document.getElementById("name-text" + no).value;
  var genderValue = document.getElementById("gender-text" + no).value;
  var ageValue = document.getElementById("age-text" + no).value;

  document.getElementById("name-row" + no).innerHTML = nameValue;
  document.getElementById("gender-row" + no).innerHTML = genderValue;
  document.getElementById("age-row" + no).innerHTML = ageValue;

  document.getElementById("edit-button" + no).style.display = "inline-block";
  document.getElementById("cancel-button" + no).style.display = "none";
  document.getElementById("save-button" + no).style.display = "none";
}

function cancelRow(no) {
  document.getElementById("name-row" + no).innerHTML = '0'
  document.getElementById("gender-row" + no).innerHTML = '0';
  document.getElementById("age-row" + no).innerHTML = '0';

  document.getElementById("edit-button" + no).style.display = "inline-block";
  document.getElementById("cancel-button" + no).style.display = "none";
  document.getElementById("save-button" + no).style.display = "none";
}

function deleteRow(no) {
  document.getElementById("row" + no + "").outerHTML = "";
}