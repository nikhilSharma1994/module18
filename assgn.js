// // // // // // // // // // Q.1


// // // // // // // // // // let totalusers =["Mithun", "Nikhil", "Shivam", "Sourav", "Amit","Bunty"];

// // // // // // // // // // function userpresent(user){
// // // // // // // // // //     if (totalusers.includes(user)){
// // // // // // // // // //         console.log(`yes ${user} is valid`);
        
// // // // // // // // // //     }else{
// // // // // // // // // //         console.log(`no ${user} is not valid`);
        
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // userpresent("Mithun");
// // // // // // // // // // userpresent("Someone");


// // // // // // // // // // Q.2

// // // // // // // // // function totalcartvalue(){
// // // // // // // // //     let value = 0;
// // // // // // // // //     for(let i = 0 ; i < arguments.length ; i++ ){
// // // // // // // // //         value += arguments[i];
// // // // // // // // //     }
// // // // // // // // //     console.log(`The total cart value is RS ${value} `);
// // // // // // // // // }

// // // // // // // // // totalcartvalue(125,20,30);


// // // // // // // // // Q.3

// // // // // // // // let  Students =[
// // // // // // // //     {
// // // // // // // //         name:"Mithun",
// // // // // // // //         marks:95
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         name:"Prabir",
// // // // // // // //         marks:92
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         name:"Alka",
// // // // // // // //         marks:92
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         name:"Shivam",
// // // // // // // //         marks:70
// // // // // // // //     },
// // // // // // // //     {
// // // // // // // //         name:"Farhan",
// // // // // // // //         marks:99
// // // // // // // //     }
// // // // // // // // ];

// // // // // // // // let checkresults = (name) => {
// // // // // // // //     for ( let student of Students){
// // // // // // // //     if(student.name === name){
// // // // // // // //         return student.marks > 90 ? console.log(`Congratulations ${student.name} ! You have cleared the exam`) : console.log(` sorry !  You have not cleared the exam `);
// // // // // // // //     }
// // // // // // // //     }
// // // // // // // //     console.log("invalid user !!!");
// // // // // // // // };


// // // // // // // // checkresults("Mithun");

// // // // // // // // checkresults("Prabir");

// // // // // // // // checkresults("Mithun s")


// // // // // // // // Q.4


// // // // // // // const products = [
// // // // // // //     {name:"Laptop", price:120000},
// // // // // // //     {name:"Mobile", price:70000},
// // // // // // //     {name:"Laptop Bag", price:20000},
// // // // // // //     {name:"Watch", price:20000},
// // // // // // //     {name:"Mobile Charger",price:1500}
// // // // // // // ];

// // // // // // // let maxProduct = {name:"", price:0};
// // // // // // // let minProduct = {name:"", price:Number.MAX_VALUE};

// // // // // // // for(let product of products){
// // // // // // //     if(product.price > maxProduct.price){
// // // // // // //         maxProduct = product;
// // // // // // //     }
// // // // // // //     if(product.price < minProduct.price){
// // // // // // //         minProduct = product;
// // // // // // //     }
// // // // // // // }

// // // // // // // console.log(`The product with maximum ammount is ${maxProduct.name} which is priced at RS ${maxProduct.price}`);

// // // // // // // console.log(`The  product with minimum amount is ${minProduct.name} which is priced at RS ${minProduct.price}`);


// // // // // // // Q.5

// // // // // // let guests = ["Anurag", "Mithun", "Alka", "Prabir", "Shivam", "Farman"]

// // // // // // let result = guests.join();

// // // // // // console.log(result);



// // // // // // Q.6

// // // // // let productdetails = {
// // // // //     name:"Apple 2020 Macbook Air Laptop",
// // // // //     price:82000,
// // // // //     color:"Grey",
// // // // //     hardDisk:"256 GB",
// // // // // };

// // // // // console.log(`Below are the product details`);

// // // // // for (let keys of Object.keys(productdetails)){
// // // // //     console.log(`${keys}:${productdetails[keys]}`);
// // // // // }


// // // // // Q.7

// // // // function otpgenerator(){
// // // //     let min = 1000;
// // // //     let max = 9999;

// // // //     let otp = Math.floor(Math.random() *(max - min + 1) + min);
// // // //     return otp.toString();
// // // // }
// // // // console.log(`Here is your otp:${otpgenerator()}`);


// // // // OR SIMPLE WAY TO DO THIS IS    
                                



// // // let otpgenerator = Math.floor(1000 + Math.random() * 9000);
// // // console.log(`here is your otp:${otpgenerator}`);




// // // Q.8

// // function remainingDays(eventDate){
// //     let currentDate = new Date();
// //     let dateOfevent = new Date(eventDate);

// //     let timeDifference = dateOfevent - currentDate;
// //     let daysRemaining = Math.ceil(timeDifference / (1000 *60 *60 *24));

// //     return daysRemaining;
// // }

// // let eventDate = '2024-08-31'
// // console.log(remainingDays(eventDate));


// // Q.9

// function uniquecharacter (inputString){
//     let charSet = new Set();

//     for(let char of inputString){
//         if(charSet.has(char)){
//             console.log(`The input string contains duplicates.`);
//             return false;
//         }
//         charSet.add(char);
//     }
//     console.log(`The input string contains only unique characters. `);
//     return true;
// }

// uniquecharacter("mithun");
// uniquecharacter("anurag");


// Q.10

function wordCounter(sentence) {
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/); 

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); 

        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentence = "please please submit your assignment on time, your assignments are important ";
const result = wordCounter(sentence);

console.log(result);
