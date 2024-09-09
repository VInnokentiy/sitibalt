const yearElement = document.querySelector('#year');
const percentElement = document.querySelector('#percent');
const partnerElement = document.querySelector('#partner');
const contractElement = document.querySelector('#contract');

const targetYearValue = new Date().getFullYear() - 2009;
const targetPercentValue = 100;
const targetPartnerValue = 200;
const targetContractValue = 5000;

const startValue = 0;
const duration = 1000; // Длительность анимации в миллисекундах
const startTime = performance.now();

function animateYear(currentTime) {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);
  const currentValue =
    Math.floor(progress * (targetYearValue - startValue)) + ' лет';
  yearElement.textContent = currentValue;

  if (progress < 1) {
    requestAnimationFrame(animateYear);
  }
}
function animatePercent(currentTime) {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);
  const currentValue =
    Math.floor(progress * (targetPercentValue - startValue)) + '%';
  percentElement.textContent = currentValue;

  if (progress < 1) {
    requestAnimationFrame(animatePercent);
  }
}
function animateContracts(currentTime) {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);
  const currentValue =
    Math.floor(progress * (targetContractValue - startValue)) + ' +';
  contractElement.textContent = currentValue;

  if (progress < 1) {
    requestAnimationFrame(animateContracts);
  }
}
function animatePartners(currentTime) {
  const elapsedTime = currentTime - startTime;
  const progress = Math.min(elapsedTime / duration, 1);
  const currentValue =
    Math.floor(progress * (targetPartnerValue - startValue)) + ' +';
  partnerElement.textContent = currentValue;

  if (progress < 1) {
    requestAnimationFrame(animatePartners);
  }
}

const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach((item) => {
  item.addEventListener('click', function () {
    // Закрываем все открытые элементы
    dropdownItems.forEach((el) => {
      if (el !== this) {
        el.classList.remove('open');
        el.querySelector('.arrow').classList.remove('open');
      }
    });

    // Переключаем состояние текущего элемента
    this.classList.toggle('open');
    this.querySelector('.arrow').classList.toggle('open');
  });
});

window.addEventListener('load', (event) => {
  currentValue = 0; // Обнуляем значение перед началом анимации
  requestAnimationFrame(animateYear);
  requestAnimationFrame(animatePercent);
  requestAnimationFrame(animateContracts);
  requestAnimationFrame(animatePartners);
});
