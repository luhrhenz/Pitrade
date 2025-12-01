document.addEventListener("DOMContentLoaded", () => {
  
  // Ensure modal hidden immediately
  const modal = document.getElementById("withdrawModal");
  modal.classList.add("hidden");
  
  // Splash → Login
  setTimeout(() => {
    const splash = document.getElementById('splash');
    const login = document.getElementById('login');
    
    splash.classList.add('hidden');
    login.classList.remove('hidden');
    login.classList.add('fade-in');
  }, 3000);
  
  // Toggle advanced fields
  document.getElementById("toggleAdvanced").onclick = function(e) {
    e.preventDefault();
    document.getElementById("extraFields").classList.toggle("hidden");
  };
  
  // Login Form
  document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    
    if (user === "Nodpen" && pass === "F$12a&") {
      document.getElementById("login").classList.add("hidden");
      
      const dashboard = document.getElementById("dashboard");
      dashboard.classList.remove("hidden");
      dashboard.classList.add("fade-in");
      
      loadChart();
      
      // Withdraw modal fade
      const withdrawBtn = document.getElementById("withdrawBtn");
      const closeModal = document.getElementById("closeModal");
      
      withdrawBtn.onclick = () => {
        modal.classList.remove("hidden");
        modal.classList.add("fade-in");
      };
      
      closeModal.onclick = () => modal.classList.add("hidden");
      
      // Tabs
      document.querySelectorAll('.tabs button').forEach(btn => {
        btn.onclick = () => {
          document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
          document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('show'));
          btn.classList.add('active');
          document.getElementById(btn.dataset.tab).classList.add('show');
        };
      });
      
    } else {
      alert("Invalid login details");
    }
  };
  
  // Chart.js
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