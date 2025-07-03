// Dormitory data
const dorms = [
  {
    name: "Dorm 1",
    price: 2500,
    location: "Barangay Mariya",
    amenities: ["Wi-Fi", "Laundry", "Mariya Mikhailovna Kujou", "Everything"]
  },
  {
    name: "Dorm 2",
    price: 1800,
    location: "Barangay Winner",
    amenities: ["Parking", "Yotsuba Nakano"]
  },
  {
    name: "Dorm 3",
    price: 3000,
    location: "Barangay Akane",
    amenities: ["Wi-Fi", "Parking", "Kurokawa"]
  },
    {
    name: "Dorm 4",
    price: 3000,
    location: "Barangay 123",
    amenities: ["Wi-Fi", "Parking", "Laundry"]
  },
    {
    name: "Bad Dorm",
    price: 1,
    location: "Barangay Do not Live",
    amenities: ["Rei Ayanami"]
  }
];

// Reference to the section
const container = document.querySelector(".dorm-list");

// Function to create and insert each dorm card
function createDorms() {
  dorms.forEach(dorm => {
    const card = document.createElement("article");
    card.classList.add("dorm-card");

    card.innerHTML = `
      <h2>${dorm.name}</h2>
      <p><strong>Price:</strong> ₱${dorm.price}/month</p>
      <p><strong>Location:</strong> ${dorm.location}</p>
      <ul>
        ${dorm.amenities.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;

    container.appendChild(card);
  });
}

// Auto-fill the copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Run the render function
createDorms();
