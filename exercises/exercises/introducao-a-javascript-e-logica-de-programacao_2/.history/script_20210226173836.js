let numbers = []
let divisor = 2

for (i = 1; i <= 25; i += 1 ) {
    numbers.push(i)
}

for (i = 0; i < numbers.length; i++) {
    divisor /= numbers[i];
    console,log(divisor) 
}

