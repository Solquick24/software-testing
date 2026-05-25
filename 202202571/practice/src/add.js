function add(a,b){
    /* 숫자만 입력받는 예제
    if(typeof a !== "number" || typeof b !== "number"){
        throw new Error("number only");
    }*/
    // return a+b;

   const numA = Number(a);
   const numB = Number(b);

   if(isNaN(numA) || isNaN(numB)){
    throw new Error("invalid input");
   }



   return numA + numB;

}

module.exports = add;