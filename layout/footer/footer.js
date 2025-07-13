// JavaScript cho trang MOW Garden

// Bắt sự kiện click vào link trong footer để chuyển trang

// Click vào bản đồ sẽ mở Google Maps
const mapImg = document.querySelector(".map-container img");
if (mapImg) {
  mapImg.addEventListener("click", () => {
    window.open("https://maps.app.goo.gl/bo9vQbUCUK9LGzqGA", "_blank");
  });
}

console.log("MOW Garden script loaded ✅");
