import $ from "jquery";

class ModernizLogo {
    constructor(page, path) {
        this.logoImg = $(".header-section__logo a img");
        this.logoPath = this.logoImg.attr("src").split(".svg").join(".png");
        this.consoleLog();
        this.noSvg();
    }

    consoleLog(){
        console.log(this.logoImg.attr("src"));
        console.log(this.logoPath);
    }

    noSvg(){
        if(Modernizr.svg == false){
            this.logoImg.attr("src", this.logoPath);
        }
    }
}

export default ModernizLogo;
