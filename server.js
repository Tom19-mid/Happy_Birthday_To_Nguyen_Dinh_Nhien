const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Phục vụ toàn bộ file tĩnh từ các thư mục html, css, js, images
app.use(express.static(path.join(__dirname, "Happy_Birthday")));

// Khi truy cập / -> gửi index.html từ thư mục html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Happy_Birthday", "html", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
