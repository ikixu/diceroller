function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const totalDisplay = document.getElementById('totalDisplay');
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}">`);
    }
    
    diceResult.textContent = `${values.join(', ')}`;
    totalDisplay.textContent = `Total: ${values.reduce((partialSum, a) => partialSum + a, 0)}`;
    diceImages.innerHTML = images.join('');
}