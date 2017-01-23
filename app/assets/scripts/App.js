import MenuReveal from "./modules/menu-reveal";
import FormValidation from "./modules/validation";
import AnimateHome from "./modules/animate-home";
import RevealOnScroll from "./modules/reveal-on-scroll";
import $ from "jquery";
import ModernizLogo from "./modules/moderniz-logo";

var menuReveal = new MenuReveal();
var formValidation = new FormValidation();
var animateHome = new AnimateHome();

//---------------------- Index Page animation -------------------------//

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

//------------------------------About Page animation -----------------------------------//

//------About Me animation start here------//
var aboutMe = new RevealOnScroll($(".About-me"), "animated fadeInLeft", "12%");
var aboutMeImg = new RevealOnScroll($(".About-img"), "animated fadeInRight", "10%");
var aboutSocial = new RevealOnScroll($(".About-social"), "animated fadeInDown", "50%");

//------Skill Section animation------//
var skillSubtitle = new RevealOnScroll($(".skill-subtitle"), "animated zoomIn", "50%");
var skillSubtitle = new RevealOnScroll($(".skill-list-1"), "animated fadeInLeft", "50%");
var skillSubtitle = new RevealOnScroll($(".skill-list-2"), "animated fadeInRight", "50%");

//------Services section animation------//
var servicesFirst = new RevealOnScroll($(".service-1"), "animated fadeInLeft", "60%");
var servicesSecond = new RevealOnScroll($(".service-2"), "animated zoomIn", "55%");
var servicesThird = new RevealOnScroll($(".service-3"), "animated fadeInRight", "50%");


//-----------------------Work Page Animation--------------------------------//

//------Work title animation------//
var workParaFirst = new RevealOnScroll($(".para-1"), "animated fadeInDown", "25%");
var workParaSecond = new RevealOnScroll($(".para-2"), "animated fadeInUp", "25%");

//-----Work project animation------//
var workProject = new RevealOnScroll($(".work-project"), "animated zoomInUp", "20%");

//------------------------Contact Page Animation---------------------------//

//------Contact description animation------//
var contactDesc = new RevealOnScroll($(".contact-desc")," animated fadeInDown", "35%");

//------Contact Social animation------//
var contactSocio = new RevealOnScroll($(".contact-socio")," animated zoomIn", "40%");

//------Contact Form animation------//
var contactForm = new RevealOnScroll($("form")," animated slideInUp", "40%");


//Index page no svg support
var modernizLogo = new ModernizLogo();
