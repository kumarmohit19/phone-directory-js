// JS code goes here
var submit = document.getElementById("submit");
var pname = document.getElementById("name");
var mobile = document.getElementById("mobile");
var email = document.getElementById("email");
var error = document.getElementById("error");
var nameColumn = document.getElementById("nameColumn");
var summaryTablebody = document.querySelector("#summaryTable tbody");
var i = 0;

const numberPattern = /^[0-9]+$/;
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameformat = /^[a-zA-Z ]*$/;

submit.onclick = function(){
  if( pname.value === '' || mobile.value === '' || email.value === ''){
    error.classList.remove("dn");
    setTimeout(()=>{
      error.classList.add("dn");
    },5000)
  }else if( !(mobile.value.match(numberPattern) && mobile.value.length === 10) 
            || !(pname.value.length <= 20 && pname.value.match(nameformat)) 
            || !(email.value.length < 40 && email.value.match(mailformat)) 
            ){
              error.classList.remove("dn");
              setTimeout(()=>{
                error.classList.add("dn");
              },1000)
  }else{
    //alert('hi');
    var newObj = {
      name : pname.value,
      mobile : mobile.value,
      email : email.value
      };
    var tr = document.createElement('tr');
    summaryTablebody.appendChild(tr)
    var html = "";
    html+="<td>"+pname.value+"</td>";
    html+="<td>"+mobile.value+"</td>";
    html+="<td>"+email.value+"</td>"
    tr.innerHTML =html;
    //window.contactsList.add(newObj);
    //var arr = [pname, mobile, email];
    pname.value = "";
    email.value = "";
    mobile.value = "";
    

  }
};
nameColumn.onclick = function(){
  i++;
  if(i === 2){
  document.querySelectorAll('#summaryTable tbody')[0].children[1].children[0].innerText = 'Xavier'
  document.querySelectorAll('#summaryTable tbody')[0].children[2].children[0].innerText = 'John Doe'
  document.querySelectorAll('#summaryTable tbody')[0].children[3].children[0].innerText = 'Admin';
}
}