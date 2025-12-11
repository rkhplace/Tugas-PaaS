const express = require("express");
const app = express();

// PORT wajib pakai process.env.PORT agar Render bisa menjalankan aplikasi
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Halo! Aplikasi Anda berjalan lancar di Render 🚀");
});

app.get("/api/data", (req, res) => {
  res.json({
    message: "Ini data API dari aplikasi Render Anda",
    status: "success",
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
