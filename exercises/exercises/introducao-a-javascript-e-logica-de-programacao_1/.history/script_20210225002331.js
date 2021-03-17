let salario = 3000
let inss;
let ir;

switch (salario) {
    case (salario <= 155694) :
    inss = salario - (salario * 0.08)
    break

    case (salario >= 259492) :
    inss = salario - (salario * 0.09)
    break
    
    case (salario >= 518982) :
    inss = salario - (salario * 0.11)
    break
    
    default :
    inss = salario - 570.88
    
}

switch (inss) {
    case (inss <= 190398) :
        ir = 0
        break

    case (inss >= 282665) :
        ir = (inss * 0.075) - 142.80
        break

    case (inss >= 375105) :
        ir = (inss * 0.15) - 354.80
        break

    case (inss >= 4664.68) :
        ir = (inss * 0.225) - 636.13
        break

    default :
        ir = (inss * 0.275) - 869.36
        
}

console.log (inss - ir)

