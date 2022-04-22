

/* ---------------------------- SideBar -------------------------------- */

let btn = document.querySelector('#btn')
let leftBar = document.querySelector('.leftBar')
let leftMenu = document.querySelector('.left_Menu')
let subMenu = document.querySelector('.subMenu')

btn.onclick = function () {
  leftBar.classList.toggle("active")
}


function openCadInicial() {
  let subMenuCadInicial = document.getElementById('subMenuCadInicial')
  if (subMenuCadInicial.style.display == 'none') {
    document.getElementById('subMenuCadInicial').style.display = 'block'
  } else {
    document.getElementById('subMenuCadInicial').style.display = 'none'
  }
}

function openCad() {
  let subMenuCad = document.getElementById('subMenuCad')
  if (subMenuCad.style.display == 'none') {
    document.getElementById('subMenuCad').style.display = 'block'
  } else {
    document.getElementById('subMenuCad').style.display = 'none'
  }
}

function openMov() {
  let subMenuMov = document.getElementById('subMenuMov')
  if (subMenuMov.style.display == 'none') {
    document.getElementById('subMenuMov').style.display = 'block'
  } else {
    document.getElementById('subMenuMov').style.display = 'none'
  }
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
    return true;

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
    return true;
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
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("naturalidade_Falecido").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else if (document.getElementById("date_Falecimento").value == "") {
    document.getElementById("alert_Form_Error").style.display = "block";
  } else {
    document.getElementById("alert_Form_Error").style.display = "none";
    document.getElementById("alert_Form_Sucess").style.display = "block";
    return true;
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
    return true;
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
    return true;

  }
}


/* --------------------------------------------CADASTRO CEMITERIO ---------------------------------------------- */


function sendCadCemiterio() {
  const codUnd = document.getElementById("cod_Cemiterio").value
  const name = document.getElementById("name_Cemiterio").value
  const endereco = document.getElementById("endereco_Cemiterio").value
  const number = document.getElementById("number_Cemiterio").value
  const city = document.getElementById("city_Cemiterio").value
  const state = document.getElementById("state_Cemiterio").value
  const resp = document.getElementById("responsavel_Cemiterio").value


  const consolidaDados = {
    undcodigo: codUnd,
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
    limpaTable()
    for (i = 0; i < data.length; i++) {

      dadosTable(data[i].undcodigo, data[i].undnome, data[i].undendereco, data[i].undnumero, data[i].undresponsavel)

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
      dadosTable(data[i].undcodigo, data[i].undnome, data[i].undendereco, data[i].undnumero, data[i].undresponsavel)

    }
  })
}


function populaNomeCemiterio() {

  fetch('http://localhost:8081/popNameUnd').then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {

      recebeDados = data[i]
      var select = document.getElementById('name_Cemiterio')
      var option = document.createElement('option');
      var textOpt = document.createTextNode(data[i].undnome);
      select.appendChild(option)
      option.appendChild(textOpt)
    }
  })

}

function altCadCemiterio() {
  const codUnd = document.getElementById("cod_Cemiterio").value
  const name = document.getElementById("name_Cemiterio").value
  const endereco = document.getElementById("endereco_Cemiterio").value
  const number = document.getElementById("number_Cemiterio").value
  const city = document.getElementById("city_Cemiterio").value
  const state = document.getElementById("state_Cemiterio").value
  const resp = document.getElementById("responsavel_Cemiterio").value


  const consolidaDados = {
    undcodigo: codUnd,
    undnome: name,
    undendereco: endereco,
    undnumero: number,
    undcidade: city,
    undestado: state,
    undresponsavel: resp
  }

  fetch('http://localhost:8081/updateUnd', {
    "method": "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  })

}


/* --------------------------------------------CADASTRO FALECIDO ------------------------------------------------ */
function sendCadFalecido() {
  const codF = document.getElementById("cod_Falecido").value
  const nameF = document.getElementById("name_Falecido").value
  const cpf = document.getElementById("cpf_Falecido").value
  const sexoFal = document.getElementById("sexo_Falecido").value
  const dateNasc = document.getElementById("nascimento_Falecido").value
  const natFal = document.getElementById("naturalidade_Falecido").value
  const dateFalecimento = document.getElementById("date_Falecimento").value
  const respF = document.getElementById("medico_Falecido").value

  const consolidaDados = {
    falcodigo: codF,
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
    limpaTable()
    for (i = 0; i < data.length; i++) {
      var dataNasc= formataData(data[i].falnascimento)
      var dataFalecimento = formataData(data[i].falfalecimento)

      dadosTable(data[i].falcodigo, data[i].falnome, data[i].falcpf, dataNasc, dataFalecimento)
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
      dadosTable(data[i].falcodigo, data[i].falnome, data[i].falcpf, data[i].falnascimento, data[i].falfalecimento)


    }
  })
}


function populaCadFalNome(req) {
  const nomeFale = document.getElementById("name_Pessoa").value

  const consolidaDados = {
    falnome: nomeFale
  }
  if (document.getElementById("name_fal").style.display == "none") {
    document.getElementById("name_fal").style.display = "block";
  } else { document.getElementById("name_fal").style.display = "none"; }


  fetch('http://localhost:8081/falnome', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  }).then(response => {
    return response.json();
  }).then(data => {
    for (let i in data) {
      recebeDados = data[i]

      var list = document.getElementById('name_fal')
      var optList = document.createElement("li")
      var textList = document.createTextNode(data[i].falnome)
      console.log(data[i].falnome)
      list.appendChild(optList)
      optList.appendChild(textList)

      optList.onclick = () => {
        var dateFal = formataDataInverso(data[i].falfalecimento)
        document.getElementById('name_Pessoa').value = (data[i].falnome)
        document.getElementById('cpf_Pessoa').value = (data[i].falcpf)
        document.getElementById('date_Falecimento').value = (dateFal)
        document.getElementById("name_fal").style.display = "none";



      }



    }
  })
}
/* --------------------------------------------CADASTRO FUNERARIAS ------------------------------------------------ */
function sendCadFunerarias() {
  const codFun = document.getElementById("cod_Funeraria").value
  const nameFun = document.getElementById("name_Funeraria").value
  const cidadeFun = document.getElementById("city_Funeraria").value
  const endFun = document.getElementById("endereco_Funeraria").value
  const numFun = document.getElementById("number_Funeraria").value

  const consolidaDados = {
    funcodigo: codFun,
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
    limpaTable()
    for (i = 0; i < data.length; i++) {
      dadosTable(data[i].funcodigo, data[i].fundescricao, data[i].funcidade)

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
      dadosTable(data[i].funcodigo, data[i].fundescricao, data[i].funcidade)

    }
  })
}


function populaNomeFunerarias() {

  fetch('http://localhost:8081/popNameFun').then(response => {
    return response.json();
  }).then(data => {
    for (i = 0; i < data.length; i++) {

      recebeDados = data[i]
      var select = document.getElementById('name_Funeraria')
      var option = document.createElement('option');
      var textOpt = document.createTextNode(data[i].fundescricao);
      select.appendChild(option)
      option.appendChild(textOpt)
    }
  })

}

/* --------------------------------------------CADASTRO SEPULTURAS ------------------------------------------------ */
function sendCadSepulturas() {
  const codSep = document.getElementById("cod_Sepultura").value
  const descSep = document.getElementById("desc_Sepultura").value
  const nameCem = document.getElementById("name_Cemiterio").value


  const consolidaDados = {
    sepcodigo: codSep,
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
    limpaTable()
    for (i = 0; i < data.length; i++) {
      dadosTable(data[i].sepcodigo, data[i].sepdescricao, data[i].sepcemiterio)

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
      dadosTable(data[i].sepcodigo, data[i].sepdescricao, data[i].sepcemiterio)

    }
  })
}
/* --------------------------------------------CADASTRO SEPULTAMENTO ---------------------------------------------- */
function sendCadSepultamento() {
  const codSepul = document.getElementById("cod_Sepultamento").value
  const nomeFal = document.getElementById("name_Pessoa").value
  const cpfFal = document.getElementById("cpf_Pessoa").value
  const nomeFun = document.getElementById("name_Funeraria").value
  const dateSep = document.getElementById("date_Sepultamento").value
  const nomeCem = document.getElementById("name_Cemiterio").value
  const dateFal = document.getElementById("date_Falecimento").value
  const nomeSep = document.getElementById("name_Sepultura").value

  const consolidaDados = {
    sepulcodigo: codSepul,
    sepulfalecido: nomeFal,
    sepulcpffal: cpfFal,
    sepulfuneraria: nomeFun,
    sepdatasepultamento: dateSep,
    sepulcemiterio: nomeCem,
    sepdatafalecimento: dateFal,
    sepulsepultura: nomeSep
  }


  fetch('http://localhost:8081/insertSepul', {
    "method": "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(consolidaDados)

  })

}

function buscaCadSepultamento() {

  fetch('http://localhost:8081/sepul').then(response => {
    return response.json();
  }).then(data => {
    limpaTable()
    for (i = 0; i < data.length; i++) {
      dadosTable(data[i].sepulcodigo, data[i].sepulfalecido, data[i].sepulcpffal, data[i].sepdatasepultamento, data[i].sepulcemiterio)


    }
  })
}


/* --------------------------------------------FUNC POPULA ESTADOS ---------------------------------------------- */


clicado = false;
function buscaEstados() {

  if (clicado == false) {

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then(response => {
      return response.json();
    }).then(data => {
      for (i = 0; i < data.length; i++) {


        var select = document.getElementById('state_Cemiterio')
        var option = document.createElement('option');
        var textOpt = document.createTextNode(data[i].sigla);
        select.appendChild(option)
        option.appendChild(textOpt)

      }
      clicado = true

    })
  }
}
/* --------------------------------------------FUNC LIMPA TABELAS ---------------------------------------------- */

function limpaTable() {
  var tabela = document.getElementById('tbody');
  var linhas = tabela.getElementsByTagName('tr');
  var tamanhoT = linhas.length
  console.log(tamanhoT)

  for (i = 0; i < tamanhoT; i++) {
    document.getElementsByTagName("tr")[1].remove();

  }
}

/* --------------------------------------------FUNC CRIA TABELAS ---------------------------------------------- */
function dadosTable(d1, d2, d3, d4, d5) {

  var table = document.getElementById('tbody');
  var row = document.createElement("tr");

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
  var cellText = document.createElement("button");
  cellText.onclick = function () {
    linkTable()
  }
  cellText.id = d1
  cellText.className = 'btnAlter'
  createDados()
  if (typeof d1 !== 'undefined') {
    var cell = createTD()
    var cellText = document.createTextNode(d1);
    createDados()
  }
  if (typeof d2 !== 'undefined') {
    var cell = createTD()
    var cellText = document.createTextNode(d2);
    createDados()
  }
  if (typeof d3 !== 'undefined') {
    var cell = createTD()
    var cellText = document.createTextNode(d3);
    createDados()
  }
  if (typeof d4 !== 'undefined') {
    var cell = createTD()
    var cellText = document.createTextNode(d4);
    createDados()
  }
  if (typeof d5 !== 'undefined') {
    var cell = createTD()
    var cellText = document.createTextNode(d5);
    createDados()
  }


}

/* ------------------------------FUNC POPULA COD ------------------------------ */

function populaCodCemiterio() {


  fetch('http://localhost:8081/populaCodigoUnd').then(response => {
    return response.json();
  }).then(data => {
    recebeCodUnidade = data[0].undcodigo
    populaCod = recebeCodUnidade + 1

    document.getElementById("cod_Cemiterio").value = populaCod
  }
  )
}

function populaCodFalecido() {


  fetch('http://localhost:8081/populaCodigoFal').then(response => {
    return response.json();
  }).then(data => {
    recebeCodUnidade = data[0].falcodigo
    populaCod = recebeCodUnidade + 1
    console.log(populaCod)

    document.getElementById("cod_Falecido").value = populaCod
  }
  )
}


function populaCodsepulturas() {


  fetch('http://localhost:8081/populaCodigoSep').then(response => {
    return response.json();
  }).then(data => {
    recebeCodUnidade = data[0].sepcodigo
    populaCod = recebeCodUnidade + 1
    console.log(populaCod)

    document.getElementById("cod_Sepultura").value = populaCod
  }
  )
}

function populaCodFunerarias() {


  fetch('http://localhost:8081/populaCodigoFun').then(response => {
    return response.json();
  }).then(data => {
    recebeCodUnidade = data[0].funcodigo
    populaCod = recebeCodUnidade + 1
    console.log(populaCod)

    document.getElementById("cod_Funeraria").value = populaCod
  }
  )
}


function populaCodSepultamentos() {


  fetch('http://localhost:8081/populaCodigoSepul').then(response => {
    return response.json();
  }).then(data => {
    recebeCodUnidade = data[0].sepulcodigo
    populaCod = recebeCodUnidade + 1
    console.log(populaCod)

    document.getElementById("cod_Sepultamento").value = populaCod
  }
  )
}



/* ------------------------------FUNCAO DOS BUTTONS ------------------------------ */

function button_SaveCemiterio() {
  var btnSalvarCemiterio = document.querySelector('#btn_SaveCemiterio')

  btnSalvarCemiterio.onclick = function () {
    validaCadCemiterio();
    if (validaCadCemiterio() == true) {
      if (urlParametros() == true) {
        altCadCemiterio()

      } else {
        sendCadCemiterio()
      }
    }
  }
}

function button_LimparTable() {
  var btnLimparTable = document.querySelector('#btn_LimpaTable')

  btnLimparTable.onclick = function () {
    limpaTable()
  }
}


/* ------------------------------POPULA DADOS PARA ALTERACAO ------------------------------ */

function dados_Cemiterio(cod) {

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

      document.getElementById("cod_Cemiterio").value = data[i].undcodigo
      document.getElementById("name_Cemiterio").value = data[i].undnome
      document.getElementById("endereco_Cemiterio").value = data[i].undendereco
      document.getElementById("number_Cemiterio").value = data[i].undnumero
      document.getElementById("city_Cemiterio").value = data[i].undcidade
      document.getElementById("state_Cemiterio").value = data[i].undestado
      document.getElementById("responsavel_Cemiterio").value = data[i].undresponsavel


    }
  })
}

function dados_Sepulturas(cod) {

  const consolidaDados = {
    sepcodigo: cod
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

      document.getElementById("cod_Sepultura").value = data[i].sepcodigo
      document.getElementById("desc_Sepultura").value = data[i].sepdescricao
      document.getElementById("name_Cemiterio").value = data[i].sepcemiterio
      


    }
  })
}

/* ------------------------------FUNCAO COLETA IDS DA TABLE ------------------------------ */


function linkTable() {

  document.querySelectorAll("button").forEach(function (button) {

    button.addEventListener("click", function (event) {
      const el = event.target;
      var id = el.id;
      console.log(id);

      
      mudaTela(id)

    });

  });
}

/* ------------------------------FUNCAO MUDA A TELA PASSANDO O ID NA URL ------------------------------ */


function mudaTela(id) {
  if( location.pathname == '/pages/filter_Cemiterio.html'){
  window.location.href = (`/pages/cad_Cemiterio.html?id=${id}`)
}else if( location.pathname == '/pages/filter_Sepultura.html'){
  window.location.href = (`/pages/cad_Sepultura.html?id=${id}`)
}
}

/* ------------------------------FUNCAO PEGA O ID E RODA A POPULA ------------------------------ */

function urlParametros() {
  const urlParam = new URLSearchParams(window.location.search);
  const idParam = urlParam.get("id")
  if (idParam > 0) {
    if( location.pathname == '/pages/cad_Cemiterio.html'){
      dados_Cemiterio(idParam)
    }else if( location.pathname == '/pages/cad_Sepultura.html'){
      dados_Sepulturas(idParam)
    }
    
    return true
  }
}

/* ------------------------------FUNCAO FORMATA DATA ------------------------------ */
function adicionaZero(numero){
  if (numero <= 9) 
      return "0" + numero;
  else
      return numero; 
}

function formataData(dataDB){
  dataDB = new Date
 dataFormatada = (adicionaZero(dataDB.getDate().toString()) + "/" + (adicionaZero(dataDB.getMonth()+1).toString()) + "/" + dataDB.getFullYear());

 return dataFormatada
}

function formataDataInverso(dataDB){
  dataDB = new Date
 dataFormatadaInverso = (  + dataDB.getFullYear() + "-" + (adicionaZero(dataDB.getMonth()+1).toString()) + "-" + adicionaZero(dataDB.getDate().toString()));

 return dataFormatadaInverso
}

function formataCPF(){
   cpf = getElementById('cpffal')
  
    cpf.split('.',3)
  
}