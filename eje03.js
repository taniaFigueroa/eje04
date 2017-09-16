var isDone = true;

var name = "Tania Marbella";
var salary = 149.09;
var arreglo = ["uno", "dos", "tres"];
var objeto = {
    name: {
        firstName: "Tania",
        lastName: "Figueroa",
        apemat: "Benitez"
    },
    salary: 149.90,
   calificacion:[
       {
        materia:"ingles",   
        calif:100},
       {
           materia:"español",
           calif:90}]
   //calificacion:[9,10,8,5,6,9,10],
}
/*
for (var i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

for (element in arreglo) {
    console.log(element); 
}

for(var i=0; i<calificacion.length; i++){
    calificacion[i]
    console.log(calificacion[i])

}

var a=0, b=0;

objeto.calificacion.forEach(function(element) {
    console.log(element);
    b=b+a;
    a
}, this);



console.log(objeto.name.apemat);
console.log(objeto);
*/



console.log(objeto.calificacion);

objeto.calificacion.forEach(function (element) {
    console.log("materia:"+ element.materia);
    console.log("calificacio:"+element.calif+"\n");
    suma +=element.calif;
})

console.log("el promedio es: "+ suma/objeto.calificacion.length);