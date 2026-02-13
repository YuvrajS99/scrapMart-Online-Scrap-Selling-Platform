const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

if (!token || role !== "admin") {
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

    if (s.status === "PickedUp") {
      actionBtn = `<button class="btn btn-sm btn-success" onclick="completeScrap('${s._id}')">Complete</button>`;
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

async function completeScrap(id) {
  await apiRequest(`/scrap/complete/${id}`, "PUT");
  loadScraps();
}

loadScraps();
