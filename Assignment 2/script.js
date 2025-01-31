const lyrics = [
    { time: 0, text: "Oh" },
    { time: 5, text: "[Music]" },
    { time: 11, text: "Yeah we started all so like a blazing fire..." },
    { time: 17, text: "But now it feels like my C and..." },
    { time: 21, text: "Everywhere we say feels like this a fight..." },
    { time: 25, text: "I, I'm holding on trying to find a spark..." },
    { time: 31, text: "But it's fading, tearing us apart..." },
    { time: 39, text: "Your but I still know..." },
    { time: 44, text: "All the time we lost our way..." },
    { time: 50, text: "But I won't give up on us today..." },
    { time: 57, text: "Even when the stars refuse to shine..." },
    { time: 65, text: "I'll still be yours, you'll be mine..." },
    { time: 75, text: "Through the tears and the unknown..." },
    { time: 85, text: "I'll be here waiting for a sign..." },
    { time: 95, text: "We built our dreams on fragile ground..." },
    { time: 105, text: "I'm holding on trying to find a spark..." },
    { time: 120, text: "We used to be all the time..." },
    { time: 135, text: "But I know in my heart we'll make it out all right..." },
    { time: 150, text: "Together just wait and see..." },
    { time: 165, text: "Our love will last..." },
    { time: 180, text: "[Music]" }
];

const video = document.getElementById("song-video");
const lyricDisplay = document.getElementById("lyric-display");

video.addEventListener("timeupdate", () => {
    const currentTime = video.currentTime;
    const currentLyric = lyrics.find(lyric => currentTime >= lyric.time && currentTime < lyric.time + 5);

    if (currentLyric) {
        lyricDisplay.textContent = currentLyric.text;
    }
});
