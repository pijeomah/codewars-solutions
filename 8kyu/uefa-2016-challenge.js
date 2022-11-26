// DESCRIPTION:
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."

//My solution

function uefaEuro2016(teams, scores){
    if(scores[0] > scores[1]){
      return  `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }else if(scores[0] === scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
    else{return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`}
    
  }
//Best Practices

function uefaEuro2016(teams, scores) {
    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2
        ? `At match ${team1} - ${team2}, teams played draw.`
        : `At match ${team1} - ${team2}, ${winner} won!`
}