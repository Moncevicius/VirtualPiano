let keypress = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];

document.addEventListener("keydown", function (event) {

        if (keypress.includes(event.key.toUpperCase())) {
            let audio = document.createElement("AUDIO");
            audio.src = `media/${event.key.toUpperCase()}.mp3`;
            audio.play();
        } else {
            console.log("Enter a correct key.");
        }
    }
)