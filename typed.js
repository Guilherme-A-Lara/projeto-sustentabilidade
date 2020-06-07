/*Esse código faz o efeito typed (escrevendo)*/

var typed = new Typed("#typed1", { //crio a variavel typed , instacio comouma nova Typed e coloco o ID responsável
  strings: ["Seja Sustentavel"], //aqui seto o que será escrito
  typeSpeed: 100, //aqui é a velocidade de escrita
  backSpeed: 150, //aqui é a velocidade de backspace
  loop: true, //aqui seto o loop como true
});

/* ********** O restante dos códigos é igual , muda o ID e o que será escrito ********** */

var typed = new Typed("#typed2", {
  strings: ["Seja Responsável"],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
});
var typed = new Typed("#typed3", {
  strings: ["Seja Consciente"],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
});
var typed = new Typed("#typed4", {
  strings: ["Seja Reutilizável"],
  typeSpeed: 100,
  backSpeed: 150,
  loop: true,
});