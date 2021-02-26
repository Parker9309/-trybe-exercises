let numbers = []

for (i = 1; i <= 25; i += 1 ) {
    numbers.push(i)
    numbers = i / 2
    console.log(i)
}