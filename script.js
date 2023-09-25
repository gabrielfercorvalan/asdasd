const toggle_Btn = document.querySelector('.toggle_btn');
const toggle_BtnIcon = document.querySelector('.toggle_icon');
const dropDownMenu = document.querySelector('.dropdown_menu'); // Cambié el nombre de la clase aquí

toggle_Btn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    // Cambié las clases de Font Awesome aquí
    toggle_BtnIcon.classList = isOpen
        ? 'toggle_icon fas fa-xmark'
        : 'toggle_icon fas fa-bars';
}