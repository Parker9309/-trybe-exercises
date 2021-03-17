let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0

for (let indeximpar = 0; indeximpar < numbers.length; indeximpar += 1) {
    if (numbers[indeximpar] %2 == 0) {
        impar+=1
    }

}
    if (impar === 0)