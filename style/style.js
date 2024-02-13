function play(){
    const homeScreen = document.getElementById('home');
    // console.log(homeScreen.classList)
    homeScreen.classList.add('hidden');



    const playGround = document.getElementById('playground-section')
    playGround.classList.remove('hidden');



    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
  
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    const colorFull = document.getElementById('alphabet')
    colorFull.classList.add('bg-orange-400')



}





