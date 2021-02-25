let salario = 3000
let inss;

switch (salario) {
    case (salario <= 1.556,94) :
    inss = salario - (salario * 0.08)
    break

    case (salario <= 2.594,92) :
    inss = salario - (salario * 0.09)
    break
    
    case (salario <= 5.189,82) :
    inss = salario - (salario * 0.11)
    break
    
    case (salario > 1.556,94) :
    inss = salario - 570,88
    break
}

switch (salario-)