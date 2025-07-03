// ==== Dormitory data =========================================
const dorms = [
  {
    id: "dorm_1",
    name: "Dorm 1",
    price: 2500,
    location: "Barangay Mariya",
    amenities: ["Wi-Fi", "Laundry", "Mariya Mikhailovna Kujou", "Everything"]
  },
  {
    id: "dorm_2",
    name: "Dorm 2",
    price: 1800,
    location: "Barangay Winner",
    amenities: ["Parking", "Yotsuba Nakano"]
  },
  {
    id: "dorm_3",
    name: "Dorm 3",
    price: 3000,
    location: "Barangay Akane",
    amenities: ["Wi-Fi", "Parking", "Kurokawa"]
  },
  {
    id: "dorm_4",
    name: "Dorm 4",
    price: 3000,
    location: "Barangay 123",
    amenities: ["Wi-Fi", "Parking", "Laundry"]
  },
  {
    id: "dorm_5",
    name: "Bad Dorm",
    price: 1,
    location: "Barangay Do not Live",
    amenities: ["Rei Ayanami"]
  }
];

// ==== Render dorm cards ======================================
function renderDormCards() {
  const container = document.querySelector(".dorm-list");
  if (!container) {
    const msg = document.createElement("p");
    msg.textContent = "Dorm list not found. Check if .dorm-list exists.";
    document.body.prepend(msg);
    return;
  }

  container.innerHTML = "";

  dorms.forEach(dorm => {
    const card = document.createElement("article");
    card.classList.add("dorm-card");

    card.innerHTML = `
      <h2>${dorm.name}</h2>
      <a class="details-link" href="assets/subhtml/${dorm.id}.html">
        View details →
      </a>
    `;

    container.appendChild(card);
  });
}

// ==== Run immediately (script must be at bottom of HTML) =====
renderDormCards();
