$(document).ready(function() {
  Mode();
});
function Mode() {
  //before assigning class check local storage if it has any value
      $("html").addClass(localStorage.Mode);
}

$(document).ready(function() {
  Theme();
});
function Theme() {
  //before assigning class check local storage if it has any value
      $("body").addClass(localStorage.Theme);
}

  
/* ========== MODES ========== */
$(".light-mode").on("click", () => {
  $("html").addClass("light-mode");
  $('html').removeClass('dim-mode dark-mode');
  localStorage.Mode = "light-mode";
});

$(".dim-mode").on("click", () => {
  $("html").addClass("dim-mode");
  $('html').removeClass('light-mode dark-mode');
  localStorage.Mode = "dim-mode";
});

$(".dark-mode").on("click", () => {
  $("html").addClass("dark-mode");
  $('html').removeClass('light-mode dim-mode');
  localStorage.Mode = "dark-mode";
});




/* ========== THEMES ========== */
document.addEventListener('click', (e) => {
  const colorOption = e.target.closest('.color-option');
  if (!colorOption) return;
  
  document.querySelectorAll('.color-option').forEach(colorOption => colorOption.classList.remove('selected'));
  colorOption.classList.add('selected');
});

/* ========== CHOOSE THEME ========== */
$(".blue-theme").on("click", () => {
  $("body").addClass("blue-theme");
  $('body').removeClass('yellow-theme magenta-theme purple-theme orange-theme green-theme');
  localStorage.Theme = "blue-theme";
});

$(".yellow-theme").on("click", () => {
  $("body").addClass("yellow-theme");
  $('body').removeClass('blue-theme magenta-theme purple-theme orange-theme green-theme');
  localStorage.Theme = "yellow-theme";
});

$(".magenta-theme").on("click", () => {
  $("body").addClass("magenta-theme");
  $('body').removeClass('blue-theme yellow-theme purple-theme orange-theme green-theme');
  localStorage.Theme = "magenta-theme";
});

$(".purple-theme").on("click", () => {
  $("body").addClass("purple-theme");
  $('body').removeClass('blue-theme yellow-theme magenta-theme orange-theme green-theme');
  localStorage.Theme = "purple-theme";
});

$(".orange-theme").on("click", () => {
  $("body").addClass("orange-theme");
  $('body').removeClass('blue-theme yellow-theme magenta-theme purple-theme green-theme');
  localStorage.Theme = "orange-theme";
});

$(".green-theme").on("click", () => {
  $("body").addClass("green-theme");
  $('body').removeClass('blue-theme yellow-theme magenta-theme purple-theme orange-theme');
  localStorage.Theme = "green-theme";
});



