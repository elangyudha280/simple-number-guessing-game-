





// let random = Math.round(Math.random() * 10) ;

// if(random == 5){
//     console.log('anda benar saya menebak angka 5')
// }

// console.log(random)


// fitur guess angka 

// 1.SELEKSI ELEMENT 


const buttonGuess = document.querySelector('.btn-guess');
let inputGuess = document.querySelector('.input-number');

let congratuliationText = document.querySelector('.congratulation-text');
let congratuliationGuess = document.querySelector('.text-number-guess');
let numCount = document.querySelector('.num-count');
let guessCount = 1;
let random = Math.round(Math.random() * 20);

// 2.add event for button
buttonGuess.addEventListener('click',function(){
    // 2.1 membuat angka random
        if(inputGuess.value == random){
            
            congratuliationText.style.display = 'initial';
            congratuliationGuess.style.display = 'initial';
            setTimeout(() => {
                congratuliationText.classList.add('congratuliation-active');
               setTimeout(() => {
                congratuliationGuess.classList.add('congratuliation-active');
               }, 300);
            }, 200);
            setTimeout(() => {
                    window.location = location;
            }, 400);
            inputGuess.value = '';
        }else if(inputGuess.value == ''){
            console.log('masukan angka')
        }
        else{   
        numCount.textContent = guessCount++;
        }
})

inputGuess.addEventListener('input',function(){
    if(inputGuess.value.length > 2) {
      alert('panjang angka tidak boleh lebih dari 3 digit')
      inputGuess.value = '';
    }
})