function positions(firstPlace, secondPlace, lastPlace){

    let position = [firstPlace, secondPlace, lastPlace]
    
    if(lastPlace == "Daniel"){
        position[2] = secondPlace
        position[1] = lastPlace
    }else if(secondPlace == "Daniel"){
        position[1] = firstPlace
        position[0] = secondPlace
    }
    return `1° - Colocado ${position[0]},
            2° - Colocado ${position[1]}, 
            3° - Colocado ${position[2]}`
    
}

console.log(positions("Daniel", "Manoel", "Rafael",))