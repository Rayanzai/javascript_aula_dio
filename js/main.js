/*var nome = "Rayan Anzai";
var idade = 23;
var idade2 = 10;
//alert(nome + " tem " + idade + " anos!");
//alert(idade + idade2);

console.log(nome); //Para ver no console do navegador
console.log(idade + idade2);


var frase = "Japão é o melhor time do mundo";
console.log(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())*/


//AULA 2 - ARRAYS E DICIONÁRIO
var lista = ["Maçã", "Pêra", "Laranja"]
//console.log(lista);

//alert(lista[1]) //Chamando

//lista.push("Uva") //Adiciona na array
//console.log(lista)

//lista.pop() //Tira do Array

//console.log(lista.length) //Ta,anho da lista
//console.log(lista.reverse()) //Inverte a ordem da lista

//console.log(lista[0]);
//console.log(lista.toString()); //converte para str
//console.log(lista.join(" - ")); //transforma em str e muda o separador

/*var fruta = {nome: "maçã", cor:"vermelha"}
console.log(fruta.nome);
console.log(fruta.cor);*/


/*var frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
//alert(frutas[1].nome)
console.log(frutas[0].cor)*/


//AULA 3

/*var idade = prompt("Qual a sua idade?") //Exibe uma pergunta e é salvo na variavel
//var idade = 18;
if (idade >= 18){
    alert("Maior de idade")
}else{
    alert("Menor de idade")
}*/


/*var count = 0;
while (count < 5){
    console.log(count);
    //count = count + 1;
    count++;
};*/


/*var count;
for (count=0; count <=5; count++){
    //alert(count);
    console.log(count);
}*/

//var d = new Date();
//alert(d.getMonth()+1)
//alert(d.getMinutes())
//alert(d.getDay())
//alert(d.getHours())


//AULA 4

/*function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}
alert(soma(5, 10));
alert(setReplace("Vai Japão!", "Japão", "Brasil"));*/


/*function validarIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual a sua idade?")
console.log(validarIdade(idade));*/


// AULA 5

function botao(){
    //alert("Obrigado por clicar!")
    //document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar(){
    //window.open("https://web.dio.me/home");
    //window.location.href = "https://web.dio.me/home";
}

function trocar(elemento){
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página Carregada!")
}

function funcaoChange(elemento){
    console.log(elemento.value);
}