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

      if (res.token) {
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
      } else {
        alert(res.message || "Login failed");
      }
    } catch (err) {
      alert("Server error");
    }
  });
}


async function register() {

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const role = document.getElementById("role").value;

  if (!name || !email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {

    const res = await fetch("https://scrapmart-online-scrap-selling-platform.onrender.com/api/auth/register", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        name,
        email,
        password,
        role
      })

    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful");
      window.location.href = "index.html";
    }
    else {
      alert(data.message);
    }

  }
  catch (err) {
    alert("Server error");
  }

}
