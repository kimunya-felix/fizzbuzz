// function divisibleBy(num){
    // if(num>=0 && num<=100){
    //     console.log("good number!");
    //     let divby3 = num%3;
    //     let divby5 = num%5;
    //     if (divby3 == 0 && divby5 == 0){
    //         console.log("fizzbuzz");
    //     }else if(divby5 == 0){
    //         console.log("buzz");
    //     }else if(divby3 == 0){
    //         console.log("fizz");
    //     }else{
    //         console.log("num = "+num);
    //     }
//     }else{
//         console.log("number beyond range!")
//     }
// }
// console.log(divisibleBy(15));

function divisibleBy(){
    for(let num=0; num<101; num++){
            let divby3 = num%3;
            let divby5 = num%5;
            if (divby3 == 0 && divby5 == 0){
                console.log("fizzbuzz");
            }else if(divby5 == 0){
                console.log("buzz");
            }else if(divby3 == 0){
                console.log("fizz");
            }else{
                console.log(num);
            }
    }
}
console.log(divisibleBy());