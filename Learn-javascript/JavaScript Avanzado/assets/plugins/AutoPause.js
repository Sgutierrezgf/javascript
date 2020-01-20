class AutoPause {
    constructor() {
        this.treshold = 0.50
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run(player) {
        this.player = player;
        const OBSERVER = new IntersectionObserver(this.handlerIntersection, {
            treshold: this.treshold,
        });

        OBSERVER.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handlerVisibilityChange)
    }

    handlerIntersection(entries) {
        const ENTRY = entries[0];

        const ISVISIBLE = ENTRY.intersectionRatio >= this.treshold

        if (ISVISIBLE) {
            this.player.player();
        } else {
            this.player.pause();
        }
    }
    handlerVisibilityChange() {
        const ISVISIBLE = document.visibilityState === "visible";
        if (ISVISIBLE) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;