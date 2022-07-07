let numero1 = parseInt(prompt('Ingrese un numero'));

if(numero1 % 2 === 0 || (numero1 % 3 === 0) || (numero1 % 5 === 0 || (numero1 % 7 === 0))) {
    document.write('El numero ingresado es divisible');
 }else {
    document.write('El numero ingresado no es divisible');
 }

 