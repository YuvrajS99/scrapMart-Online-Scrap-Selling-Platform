const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

if (!token || role !== "buyer") {
  window.location.href = "index.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

const scrapTable = document.getElementById("scrapTable");

async function loadScraps() {
  const scraps = await apiRequest("/scrap/all");

  scrapTable.innerHTML = "";

  scraps.forEach((s) => {
    let actionBtn = "-";

    if (s.status === "Requested") {
      actionBtn = `<button class="btn btn-sm btn-primary" onclick="acceptScrap('${s._id}')">Accept</button>`;
    } else if (s.status === "Accepted") {
      actionBtn = `<button class="btn btn-sm btn-warning" onclick="pickupScrap('${s._id}')">Pickup</button>`;
    }

    scrapTable.innerHTML += `
      <tr>
        <td>${s.category}</td>
        <td>${s.weight}</td>
        <td>${s.location}</td>
        <td>${s.status}</td>
        <td>${actionBtn}</td>
      </tr>
    `;
  });
}

async function acceptScrap(id) {
  await apiRequest(`/scrap/accept/${id}`, "PUT");
  loadScraps();
}

async function pickupScrap(id) {
  await apiRequest(`/scrap/pickup/${id}`, "PUT");
  loadScraps();
}

loadScraps();
