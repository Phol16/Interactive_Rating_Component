const rateButtons = document.querySelector('.rateButtons') as HTMLDivElement;


const rating = [1,2,3,4,5]
const dispalyButtons = rating.map((rate)=>{
  return `
  <div class='indivButton'>
  <p>${rate}</p>
  </div>
  `
}).join('')

rateButtons.innerHTML = dispalyButtons;