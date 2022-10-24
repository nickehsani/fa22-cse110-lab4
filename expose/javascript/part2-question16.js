let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 30,
    rareCars: 2,
};

for (const myCars in statistics){
	if (myCars[0] === 'r' || statistics[myCars] % 2 === 1) {
		console.log(statistics[myCars]);
	}
}
