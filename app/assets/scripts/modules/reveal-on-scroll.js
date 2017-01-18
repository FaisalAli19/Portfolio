import $ from "jquery";

class RevealOnScroll {
    constructor(item, anim ,offset) {
        this.revealItems = item;
        this.offsetPercent = offset;
        this.animation = anim;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially(){
        this.revealItems.addClass("reveal-item");
    }

    createWaypoints(){
        var that = this;
        this.revealItems.each(function() {
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass(that.animation);
                    $(currentItem).removeClass("reveal-item");
                },
                offset: that.offsetPercent
            });
        });
    }
}

export default RevealOnScroll;
