const sidebar = document.querySelector('.side-bar');
const toggleButton = document.querySelector('.click');

let sidebarVisible = false;

toggleButton.addEventListener('click', () => {
  if (sidebarVisible) {
    sidebar.style.right = '-125px';
  } else {
    sidebar.style.right = '0';
  }
  sidebarVisible = !sidebarVisible;
});

document.addEventListener("click", (event) => {
  if (event.target !== sidebar && event.target !== toggleButton) {
    sidebar.style.right = '-125px';
  }
});
