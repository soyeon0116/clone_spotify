let showQNAFn = (e) => {
  e.target.classList.toggle('show');
  e.target.nextElementSibling.classList.toggle('show');
  const status = e.target.classList.contains('show');
  const arrowTag = e.target.children[0];

  arrowTag.innerHTML = status ? '<i class="fa-solid fa-chevron-up"></i>' : '<i class="fa-solid fa-chevron-down"></i>';
}

let mobileUlFn = (e) => {
  e.target.classList.toggle('show');
}

document.querySelectorAll('.questionDiv').forEach(div => {
  div.addEventListener('click', showQNAFn);
})

document.querySelector('.hamburger').addEventListener('click', mobileUlFn)