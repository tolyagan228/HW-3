const images = document.querySelectorAll(".list__img"); // Находим все изображения по классу

images.forEach((img) => {
  const loader = img.parentElement.querySelector(".loader");
  const tempImg = new Image();
  tempImg.src = img.getAttribute("data-alt-src");

  tempImg.onload = function () {
    img.src = tempImg.src; // Меняем изображение после загрузки
    img.style.opacity = "1"; // Делаем его видимым
    loader.style.display = "none";
  };
});

// lazy загрузка изображений
function changeImages(elements) {
  elements.forEach((element) => {
    const img = element.target.querySelector("img");
    if (element.isIntersecting) {
      img.src = img.dataset.altSrc;
    } else {
      img.src = img.getAttribute("src").replace("mercedes", "car");
    }
  });
}

const observer = new IntersectionObserver(changeImages, {
  threshold: 0.5,
});

const li = document.querySelectorAll(".list__item");
li.forEach((item) => observer.observe(item));
