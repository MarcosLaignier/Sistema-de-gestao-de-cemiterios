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


/* Validacoes formularios */
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
    /* document.getElementById('form_CCemiterio').reset(); */
        
    
    
  }
}

function validaCadSepultura() {
  if (document.getElementById("name_Sepultura").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("name_Cemiterio").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  }else
  {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
    /* document.getElementById('form_CCemiterio').reset(); */
        
    
    
  }
}

function validaCadFalecido() {
  if (document.getElementById("name_Falecido").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("cpf_Falecido").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("sexo_Falecido").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("nascimento_Falecido").value == "") {
    document.getElementById("alert_Form").style.display = "block";
  } else if (document.getElementById("naturalidade_Falecido").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("date_Falecimento").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else
  {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
    /* document.getElementById('form_CCemiterio').reset(); */
        
    
    
  }
}

function validaCadFuneraria() {
  if (document.getElementById("name_Funeraria").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("city_Funeraria").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("endereco_Funeraria").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("number_Funeraria").value == "") {
    document.getElementById("alert_Form").style.display = "block";
  }else
  {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
    /* document.getElementById('form_CCemiterio').reset(); */
        
    
    
  }
}


function validaCadSepultamento() {
  if (document.getElementById("name_Pessoa").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("cpf_Pessoa").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("name_Funeraria").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("date_Sepultamento").value == "") {
    document.getElementById("alert_Form").style.display = "block";
  } else if (document.getElementById("name_Cemiterio").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("date_Falecimento").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  }else if (document.getElementById("name_Sepultura").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else
  {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
    /* document.getElementById('form_CCemiterio').reset(); */
        
    
    
  }
}


  function dadosInputs() {

  var Dados = document.getElementsByTagName('input');
  var recebeDados
  for (i=0; i<Dados.length; i++){ 
    Dados[i].getAttribute("alt") + ": " + Dados[i].getAttribute("value");
    recebeDados = [Dados[i].value]
    
    console.log(recebeDados)

    }
    
  }

  function sendCadCemiterio(){
    const name = document.getElementById("name_Cemiterio").value
    const endereco = document.getElementById("endereco_Cemiterio").value
    const number = document.getElementById("number_Cemiterio").value
    const city = document.getElementById("city_Cemiterio").value
    const state = document.getElementById("state_Cemiterio").value
    const resp = document.getElementById("responsavel_Cemiterio").value

    
    const consolidaDados = {
      undnome: name,
      undendereco:endereco,
      undnumero:number,
      undcidade:city,
      undestado:state,
      undresponsavel:resp}

    fetch ('http://localhost:8081/insert',{
      "method":"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(consolidaDados)
      
    })
   
  }

  function buscaCadCemiterio(){
    
     
  fetch ('http://localhost:8081/').then(response =>{
    return response.json();
  }).then(data =>{
     for (i=0; i<data.length; i++){ 
      
      recebeDados = data[i]

      var table = document.getElementById('tbody')
      var row = document.createElement("tr");
    
      /* for (td = 1; td <= 5; td++) { 
     
      var cell = document.createElement("td");
      var cellText = document.createTextNode(data[i].);
      

        table.appendChild(row)
        row.appendChild(cell)
        cell.appendChild(cellText)
      console.log(recebeDados)
      }  */
      console.log(recebeDados)
      function createTD(){
        var createTD = document.createElement("td");
        return createTD
      }
      function createDados(){
      table.appendChild(row)
      row.appendChild(cell)
      cell.appendChild(cellText)
      }

    var cell = createTD()
    var cellText = document.createTextNode(data[i].undcodigo);
    createDados()

    var cell = createTD()
    var cellText = document.createTextNode(data[i].undnome);
    createDados()
    var cell = createTD()
    var cellText = document.createTextNode(data[i].undendereco);
    createDados()
    var cell = createTD()
    var cellText = document.createTextNode(data[i].undnumero);
    createDados()
    var cell = createTD()
    var cellText = document.createTextNode(data[i].undresponsavel);
    createDados()

      
      
      }
     } 
  ) }
 
  
  

 /*  function validaInputs() {

    var Dados = document.getElementsByTagName('input');
    for (i=0; i<Dados.length; i++){ 
      Dados[i].getAttribute("alt") + ": " + Dados[i].getAttribute("value");
      if(Dados[i].value == ''){
        document.getElementById("alert_Form_Error").style.display = "block";
        
      }else{
        document.getElementById("alert_Form_Sucess").style.display = "block";
        document.getElementById("alert_Form_Error").style.display = "none";
        alert('false')
      break
      }
    }
  
    } */

    