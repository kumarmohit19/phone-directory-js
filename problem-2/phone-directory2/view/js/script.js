var submit = document.getElementById("submit");
var pname = document.getElementById("name");
var mobile = document.getElementById("mobile");
var email = document.getElementById("email");
var error = document.getElementById("error");
var nameColumn = document.getElementById("nameColumn");
var summaryTablebody = document.querySelector("#summaryTable tbody");
var search = document.getElementById("search");
var i = 0;
var datas = [];
datas.push(window.contactsList[0]);
var initials =[];
initials.push('Admin');

const numberPattern = /^[0-9]+$/;
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameformat = /^[a-zA-Z ]*$/;

submit.onclick = function(){
  if( pname.value === '' || mobile.value === '' || email.value === ''){
    error.classList.remove("dn");
    setTimeout(()=>{
      error.classList.add("dn");
    },500)
  }else if( !(mobile.value.match(numberPattern) && mobile.value.length === 10) || !(pname.value.length <= 20 && pname.value.match(nameformat)) || !(email.value.length < 40 && email.value.match(mailformat))){
    error.classList.remove("dn");
    setTimeout(()=>{
      error.classList.add("dn");
    },1000)
  }else{
    var newObj = {
      name : pname.value,
      mobile : mobile.value,
      email : email.value
    };
    datas.push(newObj);
    initials.push(pname.value);
    var tr = document.createElement('tr');
    summaryTablebody.appendChild(tr)
    var html = "";
    html+="<td>"+pname.value+"</td>";
    html+="<td>"+mobile.value+"</td>";
    html+="<td>"+email.value+"</td>"
    tr.innerHTML =html;
    //initials.sort();
    //console.table(initials);
    pname.value = "";
    email.value = "";
    mobile.value = "";
  }
};
nameColumn.onclick = function(){
  i++;
  if(i === 1){
    initials.sort();
  }
  if(i === 2){
    initials.sort();
    initials.reverse();
    i=0;
  }
  summaryTablebody.innerHTML='';
  initials.forEach( fname => {
    datas.forEach( data => {
      if(data.name === fname){
        var tr = document.createElement('tr');
        summaryTablebody.appendChild(tr)
        var html = "";
        html+="<td>"+data.name+"</td>";
        html+="<td>"+data.mobile+"</td>";
        html+="<td>"+data.email+"</td>"
        tr.innerHTML =html;
      }
    })
  })
}
search.onkeyup = function() {
  summaryTablebody.innerHTML='';
  var ndatas = datas.filter(checkMobile);
  //console.log(ndatas);
  if(ndatas.length == 0) {
    document.getElementById("noResult").classList.remove("dn");
    setTimeout(()=>{
      document.getElementById("noResult").classList.add("dn");
    },500)
  }
  else{
    ndatas.forEach( data => {
    var tr = document.createElement('tr');
    summaryTablebody.appendChild(tr)
    var html = "";
    html+="<td>"+data.name+"</td>";
    html+="<td>"+data.mobile+"</td>";
    html+="<td>"+data.email+"</td>"
    tr.innerHTML =html;
    })
  }
}

function checkMobile(ele){
  //console.log(ele.mobile.includes(search.value));
  return ele.mobile.includes(search.value);
}