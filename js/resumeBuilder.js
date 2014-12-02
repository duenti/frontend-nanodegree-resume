//Printar nome com JQuery
$("#main").append("Neli Fonseca");

//Converter Velocidade da luz
vLuzM = 299792458; //Em mestros por segundo
vluzC = vLuzM * 100; //Velocidade da Luz em cm/s
vLuzNC = vluzC * (1/1000000000); //Velocidade da Luz em cm/ns
$("#main").append("<br>");
$("#main").append(vLuzNC);

//Testando Variaveis
var awesomeToughts = "Im Neli and I am AWESOME!"

//console.log(awesomeToughts); //Imprime no Console

//String.replace
var funToughts = awesomeToughts.replace("AWESOME", "FUN");

console.log(funToughts);