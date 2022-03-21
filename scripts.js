/* var extendleftBar = document.getElementById('button');
extendleftBar.onclick = function() {
    if  (document.getElementById('extend_left_bar').style.display = 'block'){
    document.getElementById('extend_left_bar').style.display = 'none';
}
}  */

function toogle() {
  if (document.getElementById("extend_left_bar").style.display == "none") {
    document.getElementById("extend_left_bar").style.display = "block";
  } else document.getElementById("extend_left_bar").style.display = "none";
}

function validaCadCemiterio() {
  if (document.getElementById("name_Cemiterio").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("endereco_Cemiterio").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("city_Cemiterio").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("state_Cemiterio").value == "") {
    document.getElementById("alert_Form").style.display = "block";
  } else if (document.getElementById("responsavel_Cemiterio").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else
  {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
  }
}
