function dwarfRollCall(dwarves) {
  if(dwarves.length >= 1) {
    let new_array = []
    for(let i = 0; i < dwarves.length; i++) {
      new_array.push(`${i+1}. ${dwarves[i]} `)
    }
    return(new_array.join(""))
  }
}

function summonCaptainPlanet(planeteerCalls){
  if(planeteerCalls.length >= 1) {
    let heIsOurHero = []
    for(let i = 0; i < planeteerCalls.length; i++) {
      heIsOurHero.push(planeteerCalls[i].toUpperCase + '!')
    }
    return heIsOurHero
  }
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
    if(words[i].length > 4)
    return true
  }
  return false
}

function findTheCheese (foods) {
  let cheese = ['gouda', 'cheddar', 'camembert']
  for(let i = 0; i < foods.length; i++) {
    for(let c = 0; c < cheese.length; c++) {
      if(foods[i] === cheese[c]){
        return foods[i]
      }
    }
  }

  return 'no cheese!'
}
