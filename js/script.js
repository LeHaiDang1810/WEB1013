// js/script.js
function loadComponent(containerId, filePath) {
  const container = document.getElementById(containerId);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', filePath, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          container.innerHTML = xhr.responseText;
      }
  };
  xhr.send();
}

// Tải tất cả các module khi trang được tải
document.addEventListener("DOMContentLoaded", function () {
  // Tải các module
  loadComponent('header-container', 'components/header.html');
  loadComponent('banner-container', 'components/banner.html');
  loadComponent('intro-container', 'components/intro.html');
  loadComponent('news-container', 'components/news.html');
  loadComponent('contact-container', 'components/contact.html');
  loadComponent('footer-container', 'components/footer.html');

  // Alert chào mừng
  alert("Chào mừng bạn đến với website của Trường Tiểu Học Phạm Hồng Thái!");

  // Hiệu ứng cuộn header
  window.addEventListener("scroll", function () {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
          header.classList.add("scrolled");
      } else {
          header.classList.remove("scrolled");
      }
  });

  // Nút cuộn lên đầu trang
  const scrollBtn = document.querySelector(".scrollTopBtn");
  window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
          scrollBtn.style.display = "block";
      } else {
          scrollBtn.style.display = "none";
      }
  });

  scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});