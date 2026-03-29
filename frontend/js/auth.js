const API_BASE = "https://scrapmart-online-scrap-selling-platform.onrender.com/api";

/**
 * COMMON API FUNCTION (FIXED)
 */
async function apiRequest(endpoint, method = "GET", body = null) {
  const token = localStorage.getItem("token");

  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(API_BASE + endpoint, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  return data;
}

/**
 * LOGIN
 */
const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const res = await apiRequest("/auth/login", "POST", {
        email,
        password
      });

      localStorage.setItem("token", res.token);
      localStorage.setItem("role", res.user.role);

      // redirect based on role
      if (res.user.role === "user") {
        window.location.href = "user.html";
      } else if (res.user.role === "buyer") {
        window.location.href = "buyer.html";
      } else if (res.user.role === "admin") {
        window.location.href = "admin.html";
      }

    } catch (err) {
      alert(err.message);
    }
  });
}

/**
 * REGISTER
 */
async function register() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let role = document.getElementById("role").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  // normalize role (IMPORTANT)
  role = role.toLowerCase();

  try {
    const res = await apiRequest("/auth/register", "POST", {
      name,
      email,
      password,
      role
    });

    alert(res.message || "Registration successful");
    window.location.href = "index.html";

  } catch (err) {
    alert(err.message);
  }
}
