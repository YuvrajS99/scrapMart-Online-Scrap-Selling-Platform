const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "index.html";
}


// LOGOUT
function logout() {

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = "index.html";

}


const scrapTable = document.getElementById("scrapTable");


// ADD SCRAP  ✅ FIXED
async function addScrap() {

  const category = document.getElementById("category").value.trim();
  const weight = document.getElementById("weight").value.trim();
  const location = document.getElementById("location").value.trim();

  console.log("Category:", category);
  console.log("Weight:", weight);
  console.log("Location:", location);

  if (!category || !weight || !location) {
    alert("Fill all fields");
    return;
  }

  try {

    const response = await fetch("https://scrapmart-online-scrap-selling-platform.onrender.com/api/scrap", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },

      body: JSON.stringify({
        category,
        weight,
        location
      })

    });

    const result = await response.json();

    console.log(result);

    alert("Scrap added successfully");

    loadScraps();

    // clear fields
    document.getElementById("category").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("location").value = "";

  }
  catch (err) {

    console.error(err);
    alert("Error adding scrap");

  }

}


// LOAD SCRAPS
async function loadScraps() {

  try {

    const response = await fetch("<PASTE RENDER URL HERE AFTER DEPLOYMENT>/api/scrap/my", {

      headers: {
        "Authorization": token
      }

    });

    const scraps = await response.json();

    scrapTable.innerHTML = "";

    scraps.forEach((s) => {

      scrapTable.innerHTML += `
        <tr>
          <td>${s.category}</td>
          <td>${s.weight}</td>
          <td>${s.location}</td>
          <td>${s.status}</td>
          <td>
            ${s.status === "Pending"
          ? `<button onclick="requestPickup('${s._id}')">Request Pickup</button>`
          : "-"
        }
          </td>
        </tr>
      `;

    });

  }
  catch (err) {

    console.error(err);

  }

}


// REQUEST PICKUP
async function requestPickup(id) {

  await fetch(`<PASTE RENDER URL HERE AFTER DEPLOYMENT>/api/scrap/request/${id}`, {

    method: "PUT",

    headers: {
      "Authorization": token
    }

  });

  loadScraps();

}


// LOAD ON PAGE OPEN
loadScraps();
