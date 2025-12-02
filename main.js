// DOM Ready
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("withdrawModal");
  modal.classList.add("hidden");

  // Splash → Login
  setTimeout(() => {
    document.getElementById('splash').classList.add('hidden');
    const login = document.getElementById('login');
    login.classList.remove('hidden');
    login.classList.add('fade-in');
  }, 3000);

  // Login Form Handler (COMBINED & CLEAN)
  document.getElementById("loginForm").onsubmit = function (e) {
    e.preventDefault();

    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("loginError");

    if (user === "Nodpen" && pass === "Qaz147la.") {

      errorMsg.classList.add("hidden");
      document.getElementById("login").classList.add("hidden");

      const dashboard = document.getElementById("dashboard");
      dashboard.classList.remove("hidden");
      dashboard.classList.add("fade-in");

      loadChart(); // LOAD CHART NOW THAT DASHBOARD IS VISIBLE

      // Activate Withdraw Modal
      document.getElementById("withdrawBtn").onclick = () => {
        modal.classList.remove("hidden");
        modal.classList.add("fade-in");
      };

      document.getElementById("closeModal").onclick = () =>
        modal.classList.add("hidden");

      // Tabs Handler
      document.querySelectorAll('.tabs button').forEach(btn => {
        btn.onclick = () => {
          document.querySelectorAll('.tabs button').forEach(b =>
            b.classList.remove('active'));

          document.querySelectorAll('.tab-content').forEach(c =>
            c.classList.remove('show'));

          btn.classList.add('active');
          document.getElementById(btn.dataset.tab).classList.add('show');
        };
      });

    } else {
      errorMsg.classList.remove("hidden");
    }
  };

  // Show / Hide Password
  document.getElementById("togglePass").onclick = () => {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
  };

  // Chart Loader
  function loadChart() {
    const ctx = document.getElementById('profitChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ["2023", "2024", "2025"],
        datasets: [{
          label: "Profit Growth (₱)",
          data: [250000, 1200000, 110202450],
          borderWidth: 3,
          borderColor: "#0ff",
          backgroundColor: "rgba(0,255,255,0.2)",
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { labels: { color: 'white' } } },
        scales: {
          x: { ticks: { color: 'white' }, grid: { color: '#333' } },
          y: { ticks: { color: 'white' }, grid: { color: '#333' } }
        }
      }
    });
  }

});