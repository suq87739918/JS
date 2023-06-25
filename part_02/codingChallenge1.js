const averageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//Dol team:
const dolTeam = averageScore(44,23,71);
//Koa team
const koaTeam = averageScore(65,54,49);
// const checkWinner = function(dolTeam, koaTeam){
//     if(dolTeam >= koaTeam * 2){
//         console.log(`Dol team win with (${dolTeam} vs ${koaTeam})`)
//     }else if(koaTeam >= dolTeam * 2){
//         console.log(`Koa team win with (${koaTeam} vs ${dolTeam})`)
//     }else{
//         console.log(`There is no winner based on the rules`)
//     }
// }
function checkWinner(dolTeam, koaTeam){
    if(dolTeam >= koaTeam * 2){
        console.log(`Dol team win with (${dolTeam} vs ${koaTeam})`)
    }else if(koaTeam >= dolTeam * 2){
        console.log(`Koa team win with (${koaTeam} vs ${dolTeam})`)
    }else{
        console.log(`There is no winner based on the rules`)
    }
}
//call the function
checkWinner(dolTeam, koaTeam);