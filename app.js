const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log("Garden Area:", area);

// the max number of plants
const plantSpace = 0.8;
const maxPlants = Math.floor(area / plantSpace);
console.log("Maximum number of plants:", maxPlants);
