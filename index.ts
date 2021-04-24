export {}

let shade:number = 10;

const setGradientTimer = setInterval(
            () => setGradient(shade++),
            10
         );


const setGradient = (shade:number = 10):void => {
      const maxShade:number = 400
         shade === maxShade && clearInterval(setGradientTimer);

             document.body.style.background = ` 
               no-repeat 
               fixed 
               center 
               center
               linear-gradient(150deg ,#f06d${shade} 40%, #${shade}0afe 10%) `;

};