const form = document.querySelector('form');

// This usecase will give you empty

// const height = parseInt(document.querySelector('#height').value)

const submit = document.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span></br> ${
      bmi < 18.6 ? 'Under Weight' : bmi > 24.9 ? 'Overweight' : 'Normal'
    }`;
  }
});
