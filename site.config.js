const siteConfig = {
  regions: [
    { label: "All", value: "All" },
    { label: "Asia", value: "Asia" },
    { label: "America", value: "Americas" },
    { label: "Europe", value: "Europe" },
    { label: "Africa", value: "Africa" },
    { label: "Oceania", value: "Oceania" },
  ],
  sortingParams: [
    { label: "Name (A-Z)", value: "name-asc" },
    { label: "Name (Z-A)", value: "name-desc" },
    { label: "Population (Low to High)", value: "population-asc" },
    { label: "Population (High to Low)", value: "population-desc" },
  ],
};

module.exports = siteConfig;
