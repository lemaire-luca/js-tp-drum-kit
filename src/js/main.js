function play(k){
    const linkedAudio = document.querySelector(`audio[data-key=${k}]`);
    linkedAudio.pause();
    linkedAudio.currentTime = 0;
    linkedAudio.play();
    document.querySelector(`div[data-key=${k}]`).classList.add("playing");
    document.body.classList.add(k);
}
document.querySelectorAll(".key").forEach((button) => {
    button.addEventListener("click", (event) => {
        this.play(event.currentTarget.dataset.key);
    });
    button.addEventListener("transitionend", (event) => {
        const k = event.currentTarget.dataset.key;
        document.body.classList.remove(event.currentTarget.dataset.key);
        event.currentTarget.classList.remove("playing");
    });
});
window.addEventListener("keydown", (event) => {
    let k = event.key.toLowerCase();
    if("qsdfghjkl".includes(k)) {
        this.play(k);
    }
});
/*switch (k) {
        case "q":
        case "s":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
            console.log(k);
            break;
        default:
            console.log("oups");
    }
k === "q" || k === "s" || k === "d" || k === "f" || k === "g" || k === "h" || k === "j" || k === "k" || k === "l"*/