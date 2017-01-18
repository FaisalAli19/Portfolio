import MenuReveal from "./modules/menu-reveal";
import FormValidation from "./modules/validation";
import AnimateHome from "./modules/animate-home";
import RevealOnScroll from "./modules/reveal-on-scroll";
import $ from "jquery";


var menuReveal = new MenuReveal();
var formValidation = new FormValidation();
var animateHome = new AnimateHome();
var largeItems = new RevealOnScroll($(".large-item"), "animated zoomIn", "50%");
