let showFunction = (e) => {
  e.target.classList.toggle('show');
  const status = e.target.classList.contains('show');
  const arrowTag = e.target.children[0];
  const targetTag = e.target.nextElementSibling;

  if(status) {
    arrowTag.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    targetTag.classList.remove('hidden');
  } else {
    arrowTag.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
    targetTag.classList.add('hidden');
  }
}



document.querySelectorAll('.questionDiv').forEach(div => {
  div.addEventListener('click', showFunction);
})