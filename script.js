 
    const cars = [
        { number:1, name:'Джентра' },
        { number:2, name:'Жугили' },
        { number:3, name:'Кобольт' }
    ];

    if (!confirm('Хотите купить машину?')) {
        alert('Ну тогда пока!');
    }

    
    let carName = '';
    cars.forEach((car, ) => {
        carName += `${car.number}) ${car.name}  `;
    });

    
    const userInput = prompt(`Введите номер или название машины:${carName}`);

    // здесь ищют машину 
    const selectedCar = cars.find(car => car.number.toString() === userInput || car.name.toLowerCase() === userInput.toLowerCase()
    );

    if (selectedCar) {
        if (confirm(`Вы выбрали ${selectedCar.name}. у вас есть последний шанс либо на богатай либо на тарантайке! `)) {
            alert('Ура новая бибика!');
        } else {
            alert('эх ты упустил свой шанс!');
        }
    } else {
        alert('А больше нету!');
    }






