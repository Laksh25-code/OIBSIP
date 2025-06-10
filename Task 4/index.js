let isLogin = true;
    let registeredUsers = [];

    function toggleForm() {
      isLogin = !isLogin;
      document.getElementById("formTitle").textContent = isLogin ? "Login" : "Register";
      document.querySelector(".switch").textContent = isLogin
        ? "Don’t have an account? Register"
        : "Already have an account? Login";
    }

    function handleAuth() {
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();

      if (!username || !password) {
        alert("Please fill in both fields.");
        return;
      }

      if (isLogin) {
        const user = registeredUsers.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          document.getElementById("authBox").style.display = "none";
          document.getElementById("securePage").style.display = "block";
        } else {
          alert("Invalid credentials. Try again.");
        }
      } else {
        const exists = registeredUsers.find((u) => u.username === username);
        if (exists) {
          alert("Username already exists. Choose another.");
        } else {
          registeredUsers.push({ username, password });
          alert("Registered successfully! You can now log in.");
          toggleForm();
        }
      }

      document.getElementById("username").value = "";
      document.getElementById("password").value = "";
    }

    function logout() {
      document.getElementById("securePage").style.display = "none";
      document.getElementById("authBox").style.display = "block";
    }