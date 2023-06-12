function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

async function getResult() {
    try {
        const response = await luckyDraw('Tina');
        console.log(response)
    } catch (error) {
        console.log(error)
    }  

    try {
        const response2 = await luckyDraw('Jorge');
        console.log(response2)
    } catch (error) {
        console.log(error)
    }

    try {
        const response3 = await luckyDraw('Julien')
        console.log(response3)
    } catch (error) {
        console.log(error)
    }
}

getResult()