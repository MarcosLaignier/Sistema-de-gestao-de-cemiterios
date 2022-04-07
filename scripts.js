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


/* --------------------- Validacoes formularios ------------------------ */
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
  } else {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
    /* document.getElementById('form_CCemiterio').reset(); */



  }
}

function validaCadSepultura() {
  if (document.getElementById("desc_Sepultura").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("name_Cemiterio").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else {
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
  } else {
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
  } else {
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
  } else if (document.getElementById("name_Sepultura").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
    /* document.getElementById('form_CCemiterio').reset(); */



  }
}


function validaForms() {
  if (document.getElementsByClassName("form_I").value == null) {
    document.getElementById("alert_Form_Error").style.display = "block";
    console.log(document.getElementsByClassName("form_I"))
  } else {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
    /* document.getElementById('form_CCemiterio').reset(); */
    console.log(document.getElementsByClassName("form_I"))


  }
}


function dadosInputs() {

  var Dados = document.getElementsByTagName('input');
  var recebeDados
  for (i = 0; i < Dados.length; i++) {
    Dados[i].getAttribute("alt") + ": " + Dados[i].getAttribute("value");
    recebeDados = [Dados[i].value]

    console.log(recebeDados)

  }

}
/* --------------------------------------------CADASTRO CEMITERIO ---------------------------------------------- */
function sendCadCemiterio() {
  const name = document.getElementById("name_Cemiterio").value
  const endereco = document.getElementById("endereco_Cemiterio").value
  const number = document.getElementById("number_Cemiterio").value
  const city = document.getElementById("city_Cemiterio").value
  const state = document.getElementById("state_Cemiterio").value
  const resp = document.getElementById("responsavel_Cemiterio").value


  const consolidaDados = {
    undnome: name,
    undendereco: endereco,
    undnumero: number,
    undcidade: city,
    undestado: state,
    undresponsavel: resp
  }

  fetch('http://localhost:8081/insert', {
    "method": "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  })

}

function buscaCadCemiterio() {

  fetch('http://localhost:8081/').then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {

      recebeDados = data[i]

      var table = document.getElementById('tbody')
      var row = document.createElement("tr");

      console.log(recebeDados)
      function createTD() {
        var createTD = document.createElement("td");
        return createTD
      }
      function createDados() {
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
  )
}


function buscaCadCemiterioCod(req) {
  const cod = document.getElementById("cod_Cemiterio").value

  const consolidaDados = {
    undcodigo: cod
  }


  fetch('http://localhost:8081/cod', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  }).then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {
      recebeDados = data[i]

      console.log(recebeDados)
      createTable(data)
    }
  })
}

/* --------------------------------------------CADASTRO FALECIDO ------------------------------------------------ */
function sendCadFalecido() {
  const nameF = document.getElementById("name_Falecido").value
  const cpf = document.getElementById("cpf_Falecido").value
  const sexoFal = document.getElementById("sexo_Falecido").value
  const dateNasc = document.getElementById("nascimento_Falecido").value
  const natFal = document.getElementById("naturalidade_Falecido").value
  const dateFalecimento = document.getElementById("date_Falecimento").value
  const respF = document.getElementById("medico_Falecido").value

  const consolidaDados = {
    falnome: nameF,
    falcpf: cpf,
    falsexo: sexoFal,
    falnascimento: dateNasc,
    falnaturalidade: natFal,
    falfalecimento: dateFalecimento,
    falmedresp: respF
  }


  fetch('http://localhost:8081/insertFal', {
    "method": "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  })

}

function buscaCadFalecido() {

  fetch('http://localhost:8081/fal').then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {

      recebeDados = data[i]
      var table = document.getElementById('tbody')
      var row = document.createElement("tr")
      function createTD() {
        var createTD = document.createElement("td");
        return createTD
      }
      function createDados() {
        table.appendChild(row)
        row.appendChild(cell)
        cell.appendChild(cellText)
      }

      var cell = createTD()
      var cellText = document.createTextNode(data[i].falcodigo);
      createDados()

      var cell = createTD()
      var cellText = document.createTextNode(data[i].falnome);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].falcpf);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].falnascimento);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].falfalecimento);
      createDados()
    }
  })
}


function buscaCadFalNome(req) {
  const nomeFal = document.getElementById("name_Falecido").value

  const consolidaDados = {
    falnome: nomeFal
  }


  fetch('http://localhost:8081/falnome', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  }).then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {
      recebeDados = data[i]

      var table = document.getElementById('tbody')
      var row = document.createElement("tr")
      function createTD() {
        var createTD = document.createElement("td");
        return createTD
      }
      function createDados() {
        table.appendChild(row)
        row.appendChild(cell)
        cell.appendChild(cellText)
      }

      var cell = createTD()
      var cellText = document.createTextNode(data[i].falcodigo);
      createDados()

      var cell = createTD()
      var cellText = document.createTextNode(data[i].falnome);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].falcpf);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].falnascimento);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].falfalecimento);
      createDados()
    }
  })
}
/* --------------------------------------------CADASTRO FUNERARIAS ------------------------------------------------ */
function sendCadFunerarias() {
  const nameFun = document.getElementById("name_Funeraria").value
  const cidadeFun = document.getElementById("city_Funeraria").value
  const endFun = document.getElementById("endereco_Funeraria").value
  const numFun = document.getElementById("number_Funeraria").value

  const consolidaDados = {
    fundescricao: nameFun,
    funcidade: cidadeFun,
    funendereco: endFun,
    funnnumero: numFun
  }


  fetch('http://localhost:8081/insertFun', {
    "method": "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  })

}


function buscaCadFunerarias() {

  fetch('http://localhost:8081/fun').then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {

      recebeDados = data[i]
      var table = document.getElementById('tbody')
      var row = document.createElement("tr")
      function createTD() {
        var createTD = document.createElement("td");
        return createTD
      }
      function createDados() {
        table.appendChild(row)
        row.appendChild(cell)
        cell.appendChild(cellText)
      }

      var cell = createTD()
      var cellText = document.createTextNode(data[i].funcodigo);
      createDados()

      var cell = createTD()
      var cellText = document.createTextNode(data[i].fundescricao);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].funcidade);
      createDados()
     
    }
  })
}

function buscaCadFunCod(req) {
  const codFun = document.getElementById("codigo_Funeraria").value

  const consolidaDados = {
    funcodigo: codFun
  }


  fetch('http://localhost:8081/funCod', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  }).then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {
      recebeDados = data[i]

      var table = document.getElementById('tbody')
      var row = document.createElement("tr")
      function createTD() {
        var createTD = document.createElement("td");
        return createTD
      }
      function createDados() {
        table.appendChild(row)
        row.appendChild(cell)
        cell.appendChild(cellText)
      }

      var cell = createTD()
      var cellText = document.createTextNode(data[i].funcodigo);
      createDados()

      var cell = createTD()
      var cellText = document.createTextNode(data[i].fundescricao);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].funcidade);
      createDados()
     
    }
  })
}

/* --------------------------------------------CADASTRO SEPULTURAS ------------------------------------------------ */
function sendCadSepulturas() {
  const descSep = document.getElementById("desc_Sepultura").value
  const nameCem = document.getElementById("name_Cemiterio").value


  const consolidaDados = {
    sepdescricao: descSep,
    sepcemiterio: nameCem,
   
  }


  fetch('http://localhost:8081/insertSep', {
    "method": "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  })

}


function buscaCadSepultura() {

  fetch('http://localhost:8081/sep').then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {

      recebeDados = data[i]
      var table = document.getElementById('tbody')
      var row = document.createElement("tr")
      function createTD() {
        var createTD = document.createElement("td");
        return createTD
      }
      function createDados() {
        table.appendChild(row)
        row.appendChild(cell)
        cell.appendChild(cellText)
      }

      var cell = createTD()
      var cellText = document.createTextNode(data[i].sepcodigo);
      createDados()

      var cell = createTD()
      var cellText = document.createTextNode(data[i].sepdescricao);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].sepcemiterio);
      createDados()
     
    }
  })
}



function buscaCadSepCod(req) {
  const codSep = document.getElementById("codigo_Sepultura").value

  const consolidaDados = {
    sepcodigo: codSep
  }


  fetch('http://localhost:8081/sepCod', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  }).then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {
      recebeDados = data[i]

      var table = document.getElementById('tbody')
      var row = document.createElement("tr")
      function createTD() {
        var createTD = document.createElement("td");
        return createTD
      }
      function createDados() {
        table.appendChild(row)
        row.appendChild(cell)
        cell.appendChild(cellText)
      }

      var cell = createTD()
      var cellText = document.createTextNode(data[i].sepcodigo);
      createDados()

      var cell = createTD()
      var cellText = document.createTextNode(data[i].sepdescricao);
      createDados()
      var cell = createTD()
      var cellText = document.createTextNode(data[i].sepcemiterio);
      createDados()
     
    }
  })
}


/* --------------------------------------------FUNC CRIA CEMITERIO ---------------------------------------------- */
function createTable(data) {

  var table = document.getElementById('tbody')
  var row = document.createElement("tr")
  function createTD() {
    var createTD = document.createElement("td");
    return createTD
  }
  function createDados() {
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


/*   function clearTable(){
    document.getElementById('tbody').remove();
  } */


