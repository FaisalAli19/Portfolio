import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class AnimateHome {
    constructor() {
        this.logo = $(".fa-logo");
        this.menuIcon = $(".header-section__menu-icon");
        this.document = $(document);
        this.events();
    }

    events(){
        this.document.ready(this.animate.bind(this));
    }

    animate(){
        this.logo.addClass("animated zoomIn");
        this.menuIcon.addClass("animated fadeIn");
    }
}

export default AnimateHome;
