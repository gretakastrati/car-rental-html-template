
fetch('http://127.0.0.1:7070/cars/list')
  .then(response => response.json())
  .then(data => {


    const selectElementById = document.getElementById("select-cars");
    let options = `<option value="0">Select a Car</option>`

    data.content.forEach(car => {
      console.log(car,selectElementById)

      options += `<option value="${car.id}"> ${car.make} ${car.model}</option>`

      // const carOptionElement = document.createElement('option');
      // carOptionElement.value = car.id;
      // carOptionElement.textContent = `${car.make} ${car.model}`
      // selectElementById.appendChild(carOptionElement);
    });

    selectElementById.innerHTML = options;
  });
  