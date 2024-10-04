var elementRoboncon = document.getElementById("Ro-bo-con");
var elementHoatDong = document.getElementById("hoat-dong");
var elementNghienCuuKH = document.querySelector(".gt-section .title h3");
var elementTapChi = document.querySelector(".tc-section .title h3");

// Kiểm tra xem phần tử có nằm trong viewport hay không (ít nhất một phần tử nằm trong viewport)
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Thêm sự kiện cuộn
function handleScroll() {
  if (
    isElementInViewport(elementRoboncon) &&
    !elementRoboncon.classList.contains("animate")
  ) {
    elementRoboncon.classList.add(
      "animate",
      "animate__animated",
      "animate__zoomInUp"
    );
  }

  if (
    isElementInViewport(elementHoatDong) &&
    !elementHoatDong.classList.contains("animate")
  ) {
    elementHoatDong.classList.add(
      "animate",
      "animate__animated",
      "animate__zoomInUp"
    );
  }

  if (
    isElementInViewport(elementNghienCuuKH) &&
    !elementNghienCuuKH.classList.contains("animate")
  ) {
    elementNghienCuuKH.classList.add(
      "animate",
      "animate__animated",
      "animate__lightSpeedInLeft"
    );
  }

  if (
    isElementInViewport(elementTapChi) &&
    !elementTapChi.classList.contains("animate")
  ) {
    elementTapChi.classList.add(
      "animate",
      "animate__animated",
      "animate__lightSpeedInRight"
    );
  }
}

// Thêm sự kiện cuộn vào cửa sổ
window.addEventListener("scroll", handleScroll);

// Gọi handleScroll ngay khi tải trang để kiểm tra phần tử đã nằm trong viewport hay chưa
handleScroll();

// header

// end header
