const randomNum = arr => {
    var random = Math.floor(Math.random()*4);
    return arr[random];
}

var arr = ['Si te caes siete veces, levantate ocho', 'La perfeccion no es alcazable, pero si perseguimos la perfeccion podemos conseguir la excelencia', 'Tienes que esperar cosas de ti mismo antes de poder hacerlas', 'transforma tus heridas en sabiduria','La edad no es barrera', 'Piensa, Sueña, cree y atrevete'];

console.log(randomNum(arr));
