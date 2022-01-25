function getPromoCode(){
    const promoCode = document.querySelector('input').value;

    function getNumbers(num) {
        let res = []
        let base = 10
        let currNum = Math.abs(num)
        do {
            let baseShiftedNum = Math.floor(currNum / base)
            let diff = currNum - baseShiftedNum * base
            res.unshift(diff)
            currNum = baseShiftedNum
        } while (currNum > 0)
        return res
    }

if(9999999 < promoCode && promoCode < 100000000){
    const arr = getNumbers(promoCode);
    if(arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 1 && arr[4] % 2 === 1 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 && arr[0] < arr[1] && arr[3] < arr[4] && arr[6] < arr[7] ||
       arr[1] % 2 === 1 && arr[2] % 2 === 1 && arr[3] % 2 === 0 && arr[4] % 2 === 0 && arr[5] % 2 === 1 && arr[6] % 2 === 1 && arr[1] < arr[2] && arr[5] < arr[6] ||
       arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 0 && arr[4] % 2 === 0 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 && arr[0] < arr[1] && arr[6] < arr[7] ||
       arr[1] % 2 === 1 && arr[2] % 2 === 1 && arr[3] % 2 === 0 && arr[4] % 2 === 1 && arr[5] % 2 === 1 && arr[1] < arr[2] && arr[4] < arr[5] ||
       arr[2] % 2 === 1 && arr[3] % 2 === 1 && arr[4] % 2 === 0 && arr[5] % 2 === 1 && arr[6] % 2 === 1 && arr[2] < arr[3] && arr[5] < arr[6] ||
       arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 0 && arr[4] % 2 === 0 && arr[5] % 2 === 1 && arr[6] % 2 === 1 && arr[0] < arr[1] && arr[5] < arr[6] ||
       arr[1] % 2 === 1 && arr[2] % 2 === 1 && arr[3] % 2 === 0 && arr[4] % 2 === 0 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 && arr[1] < arr[2] && arr[6] < arr[7] ||
       arr[3] % 2 === 1 && arr[4] % 2 === 1 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 && arr[3] < arr[4] && arr[6] < arr[7] ||
       arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 1 && arr[4] % 2 === 1 && arr[0] < arr[1] && arr[3] < arr[4] ||
       arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 0 && arr[4] % 2 === 1 && arr[5] % 2 === 1 && arr[0] < arr[1] && arr[4] < arr[5] ||
       arr[2] % 2 === 1 && arr[3] % 2 === 1 && arr[4] % 2 === 0 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 && arr[2] < arr[3] && arr[6] < arr[7]) 
       {
        alert("вы выиграли 2000 грн.")
    } else if(arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 1 && arr[4] % 2 === 1 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 ||  
        arr[1] % 2 === 1 && arr[2] % 2 === 1 && arr[3] % 2 === 0 && arr[4] % 2 === 0 && arr[5] % 2 === 1 && arr[6] % 2 === 1 ||
        arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 0 && arr[4] % 2 === 0 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 ||
        arr[1] % 2 === 1 && arr[2] % 2 === 1 && arr[3] % 2 === 0 && arr[4] % 2 === 1 && arr[5] % 2 === 1 ||
        arr[2] % 2 === 1 && arr[3] % 2 === 1 && arr[4] % 2 === 0 && arr[5] % 2 === 1 && arr[6] % 2 === 1 ||
        arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 0 && arr[4] % 2 === 0 && arr[5] % 2 === 1 && arr[6] % 2 === 1 ||
        arr[1] % 2 === 1 && arr[2] % 2 === 1 && arr[3] % 2 === 0 && arr[4] % 2 === 0 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 ||
        arr[3] % 2 === 1 && arr[4] % 2 === 1 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1 ||
        arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 1 && arr[4] % 2 === 1 ||
        arr[0] % 2 === 1 && arr[1] % 2 === 1 && arr[2] % 2 === 0 && arr[3] % 2 === 0 && arr[4] % 2 === 1 && arr[5] % 2 === 1 ||
        arr[2] % 2 === 1 && arr[3] % 2 === 1 && arr[4] % 2 === 0 && arr[5] % 2 === 0 && arr[6] % 2 === 1 && arr[7] % 2 === 1)
        {
            alert("вы выиграли 1000 грн.")
     }else if(
        arr.filter(i => i % 2 == 0).map(i=>x+=i, x=0).reverse()[0] > arr.filter(i => i % 2 == 1).map(i=>x+=i, x=0).reverse()[0]
     ){
        alert("вы выиграли 100 грн.")
    }else {
        alert("К сожалению ваш промокод невыиграшный!")

    }} else {
        alert("Ваш промокод введён не верно!")
}
}