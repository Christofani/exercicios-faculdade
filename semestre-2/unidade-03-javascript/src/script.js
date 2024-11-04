const tarefa = document.querySelector('#tarefa');
const lista = document.querySelector('#lista');
const botao = document.querySelector('#btn');

botao.addEventListener('click', function() {
  if (tarefa.value == "") {
    alert('Digite uma tarefa!');
  } else {
    lista.innerHTML  += `<li><i class="fas fa-check-circle check"></i><span>${tarefa.value}</span><i class="fa-solid fa-trash-can close"></i></li>`;
  }
  tarefa.value = "";

  const close = document.querySelectorAll('.close');
  for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
      this.parentElement.remove();
    });
  }

  lista.addEventListener('click', function(e) {
    e.target.parentElement.querySelector(".check").style.color = "#349223";
    e.target.parentElement.querySelector("span").style.textDecoration = "line-through";
  });
});