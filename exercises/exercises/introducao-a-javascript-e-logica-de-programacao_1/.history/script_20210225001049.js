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
    
    de (salario > 155694) :
    inss = salario - 570.88
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
        ir = inss - (inss * 0.15) - 35480
        break

    case (inss >= 466468) :
        ir = inss - (inss * 0.225) - 63613
        break

    default (inss > 466468) :
        ir = inss - (inss * 0.275) - 86936
        break
}

console.log (inss - ir)

