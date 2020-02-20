import MediaPlayer from '../../MediaPlayer'
class AutoPause {
    private treshold: number
    player: MediaPlayer
    constructor() {
        this.treshold = 0.50
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handlerVisibilityChange = this.handlerVisibilityChange.bind(this)
    }
    run(player) {
        this.player = player;
   
        const OBSERVER = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.treshold,
        });

        OBSERVER.observe(this.player.media);

        document.addEventListener("visibilitychange", this.handlerVisibilityChange)
    }

    private handlerIntersection(entries: IntersectionObserverEntry[]) {
        const ENTRY = entries[0];

        const ISVISIBLE = ENTRY.intersectionRatio >= this.treshold

        if (ISVISIBLE) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
    private  handlerVisibilityChange() {
        const ISVISIBLE = document.visibilityState === "visible";
        if (ISVISIBLE) {
            this.player.play();
        } else {
            this.player.pause();
        }
    }
}

export default AutoPause;