





// let random = Math.round(Math.random() * 10) ;

// if(random == 5){
//     console.log('anda benar saya menebak angka 5')
// }

// console.log(random)


// fitur guess angka 

// 1.SELEKSI ELEMENT 


const buttonGuess = document.querySelector('.btn-guess');
let inputGuess = document.querySelector('.input-number');
let guessCount = 1;

// 2.add event for button
buttonGuess.addEventListener('click',function(){
    // 2.1 membuat angka random
    let random = Math.round(Math.random() * 30);
        if(inputGuess.value == random){
            console.log('ok')
        }else if(inputGuess.value == ''){
            console.log('masukan angka')
        }
        else{   
         console.log(guessCount++);
        }
})

inputGuess.addEventListener('input',function(){
    if(inputGuess.value.length > 2) {
      alert('panjang angka tidak boleh lebih dari 3 digit')
      inputGuess.value = '';
    }
})