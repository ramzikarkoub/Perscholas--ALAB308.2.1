const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;
console.log("Garden Area:", area);

// the max number of plants
const plantSpace = 0.8;
const maxPlants = Math.floor(area / plantSpace);
console.log("Maximum number of plants:", maxPlants);

// Predict the plant growth after a specific number of weeks.
const predictGrowth = () => {
  let plants = 20;
  for (let i = 1; i <= 3; i++) {
    plants *= 2;
    console.log(`Predicted growth after ${i} week${i > 1 ? "s" : ""}`);
  }

  return plants;
};

predictGrowth(5);

function controlGrowth(plants, maxPlants) {
  const plantPercentage = (plants / maxPlants) * 100;

  if (plantPercentage > 80) {
    console.log("Action: Prune the plants.");
  } else if (plantPercentage >= 50) {
    console.log("Action: Monitor the plants.");
  } else {
    console.log("Action: Plant more.");
  }
}
