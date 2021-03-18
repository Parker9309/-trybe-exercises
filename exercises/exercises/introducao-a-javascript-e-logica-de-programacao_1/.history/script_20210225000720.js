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

    case (inss >= 2826,65) :
        ir = inss - (inss * 0.075) - 142,80
        break

    case (inss >= 3.751,05) :
        ir = inss - (inss * 0,15) - 354,80
        break

    case (inss >= 4.664,68) :
        ir = inss - (inss * 0,225) - 636,13
        break

    case (inss > 4.664,68) :
        ir = inss - (inss * 0,275) - 869,36
        break
}

console.log (inss - ir)

