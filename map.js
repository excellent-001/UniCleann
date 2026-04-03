// Basic Leaflet map centered roughly between Eswatini and Nigeria
const map = L.map('map').setView([ -5, 20 ], 3);

// Tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Founding chapter markers
const locations = [
  {
    name: 'Chapter 01 — Manzini, Eswatini',
    coords: [-26.4833, 31.3667],
    description: 'Focus: informal settlements, peri-urban fringes, climate-displaced communities.'
  },
  {
    name: 'Chapter 02 — Ilorin, Nigeria',
    coords: [8.4799, 4.5418],
    description: 'Focus: university campus waste, student-led action, urban drain management.'
  }
];

locations.forEach(loc => {
  L.marker(loc.coords)
    .addTo(map)
    .bindPopup(`<strong>${loc.name}</strong><br>${loc.description}`);
});
