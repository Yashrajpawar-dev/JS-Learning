const form= document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()


  const height = parseInt(  document.querySelector('#height').value)

  const weight = parseFloat(  document.querySelector('#weight').value)

  const result =   document.querySelector('#result')
  if(height === '' || height <=0 || isNaN(height)){
    result.innerHTML = 'please enter a valid height';

  }
 else if (weight ===  '' || weight<=0 || isNaN(weight)){
    result.innerHTML = 'please enter a valid weight';
  }
  else{
    const bmi = (weight  / ((height  / 100) ** 2)).toFixed(2);
    result.innerHTML =`<span>your BMI is ${bmi}</span>`;
   
  }
})