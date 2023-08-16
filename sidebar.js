const sidebar = document.querySelector('.side-bar');
const toggleButton = document.querySelector('.click');

let sidebarVisible = false;

toggleButton.addEventListener('click', () => {
  if (sidebarVisible) {
    sidebar.style.right = '-300px';
  } else {
    sidebar.style.right = '0';
  }
  sidebarVisible = !sidebarVisible;
});