const siteConfig = {
  regions: [
    { label: "All", value: "all" },
    { label: "Asia", value: "asia" },
    { label: "America", value: "america" },
    { label: "Europe", value: "europe" },
    { label: "Africa", value: "africa" },
    { label: "Oceania", value: "oceania" },
  ],
  sortingParams: [
    { label: "Name (A-Z)", value: "name-asc" },
    { label: "Name (Z-A)", value: "name-desc" },
    { label: "Population (Low to High)", value: "population-asc" },
    { label: "Population (High to Low)", value: "population-desc" },
  ],
};

module.exports = siteConfig;
