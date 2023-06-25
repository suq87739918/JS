//using test data 1:
// const avgDol = (96 + 108 + 89) / 3;
// const avgKoa = (88 + 91 + 110) / 3;
// if(avgDol > avgKoa){
//     console.log(`Dol team is the winner with average score ${avgDol}`);
// }else if(avgKoa > avgDol){
//     console.log(`Koa team is the winner with average score ${avgKoa}`);
// }else{
//     console.log(`this is no winner based on average score`);
// }

//with one more restrivtion: score need to >= 100
const avgDol = (96 + 108 + 89) / 3;
const avgKoa = (88 + 91 + 110) / 3;
if(avgDol > avgKoa && avgDol >= 100){
    console.log(`Dol team is the winner with average score ${avgDol}`);
}else if(avgKoa > avgDol && avgKoa >= 100){
    console.log(`Koa team is the winner with average score ${avgKoa}`);
}else{
    console.log(`this is no winner based on average score`);
}