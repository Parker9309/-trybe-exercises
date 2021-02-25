let salario = 3000
let inss;
let ir;

switch (salario) {
    case (salario <= 1.556,94) :
    inss = salario - (salario * 0.08)
    break

    case (salario >= 2.594,92) :
    inss = salario - (salario * 0.09)
    break
    
    case (salario >= 5.189,82) :
    inss = salario - (salario * 0.11)
    break
    
    case (salario > 1.556,94) :
    inss = salario - 570,88
    break
}

switch (inss) {
    case (inss <= 190398) :
        ir = 0
        break

    case (inss >= 282665) :
        ir = inss - (inss * 0.075) - 14280
        break

    case (inss >= 375105) :
        ir = inss - (inss * 0,15) - 35480
        break

    case (inss >= 466468) :
        ir = inss - (inss * 0,225) - 63613
        break

    case (inss > 466468) :
        ir = inss - (inss * 0,275) - 86936
        break
}

console.log (inss - ir)

