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
    case (inss <= 1.903,98) :
        ir = 0
        break

        case (inss >= 2.826,65) :
        ir = inss - (inss * 0.075) - 142,80
        break

        case (inss >= ) :
            ir = inss - (inss * 0.075) - 142,80
            break

        case (inss >= 2.826,65) :
            ir = inss - (inss * 0.075) - 142,80
            break

            case (inss >= 2.826,65) :
                ir = inss - (inss * 0.075) - 142,80
                break
                
            
            
        
        
}