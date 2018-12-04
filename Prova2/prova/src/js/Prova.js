aLivros = [];

function salvar() {
  let sNomeLivro = document.getElementById('titulo').value;
  console.log(sNomeLivro);
  aLivros.push(sNomeLivro);
}

function result() {
  let div = document.getElementById('root');
  let sHtml = '<table>';
  for(let i in aLivros) {
    sHtml += '<tr>';
    sHtml += '<td>';
      i;
    sHtml += '</td>';
    sHtml += '</tr>';
  }
  sHtml += '</table>';
  console.log(sHtml);
  div.innerHTML = sHtml;
}

