let salario = 3000.00
let inss;
let ir;


switch (true) {
    case (salario <= 1556.94) :
    inss = salario - (salario * 0.08)
    break

    case (salario >= 1556.94) :
    inss = salario - (salario * 0.09)
    break
    
    case (salario >= 2594.93) :
    inss = salario - (salario * 0.11)
    break
    
    default :
    inss = salario - 570.88
    
}

switch (true) {
    case inss - (inss <= 1903.98) :
        ir = 0
        break

    case (inss >= 28) :
        ir = (inss * 0.075) - 142.80
        break

    case (inss >= 3751.05) :
        ir = (inss * 0.15) - 354.80
        break

    case (inss >= 4664.68) :
        ir = (inss * 0.225) - 636.13
        break

    default :
        ir = (inss * 0.275) - 869.36
        
}

console.log(inss - ir)

