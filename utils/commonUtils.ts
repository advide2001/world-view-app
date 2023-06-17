export function formatPopulation(population: number): string {
  return population.toLocaleString();
}

export async function getCountriesData() {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
