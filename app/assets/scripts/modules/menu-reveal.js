import $ from "jquery";

class MenuReveal {
    constructor() {
        this.menuIcon = $(".header-section__menu-icon");
        this.menuContent = $(".header-section__menu-content");
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.slideToggle(600);
        this.menuIcon.toggleClass("header-section__menu-icon--close-x");
    }
}

export default MenuReveal;
