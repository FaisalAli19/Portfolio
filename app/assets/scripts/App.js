import MenuReveal from "./modules/menu-reveal";
import FormValidation from "./modules/validation";
import AnimateHome from "./modules/animate-home";
import RevealOnScroll from "./modules/reveal-on-scroll";
import $ from "jquery";


var menuReveal = new MenuReveal();
var formValidation = new FormValidation();
var animateHome = new AnimateHome();

//Large Hero content animation
var largeItems = new RevealOnScroll($(".large-item"), "animated zoomIn", "50%");


//------About-Me section animation start here------//
var aboutImage = new RevealOnScroll($(".about-me__img"), "animated fadeInLeft", "55%");
var aboutContent = new RevealOnScroll($(".about-me__content"), "animated fadeInRight", "48%");


//------Portfolio Section animation start here ------//
var portfolioSubtitle = new RevealOnScroll($(".portfolio-subtitle"), "animated fadeInLeft", "50%");
var portfolioProject = new RevealOnScroll($(".p-project"), "animated zoomIn", "50%");
var portfolioButton = new RevealOnScroll($(".portfolio-button"), "animated fadeInRight", "60%");


//------ Contact-us Section animation start here ------//
var contactSubtitle = new RevealOnScroll($(".contact-subtitle"), "animated zoomIn", "60%");
var contactSocial = new RevealOnScroll($(".contact-social"), "animated fadeInRight", "75%");
var contactButton = new RevealOnScroll($(".contact-button"), "animated fadeInLeft", "80%");
