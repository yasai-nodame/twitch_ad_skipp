
const observer = new MutationObserver(mutations => {
    //変化が発生したときの処理
    for (const mutation of mutations) {
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            console.log('mutation.type');
            console.log(mutation.type);
            const ad = document.querySelector('.App');
            if (ad) {
                const video = document.querySelector('video');
                console.log('videoタグです');
                console.log(video);
                if (video) {
                    video.playbackRate = 16;
                    video.muted = true;
                    console.log('広告を検出し、16倍速で再生しています。');
                }
            }
        }
    }
})


if (target) {
    observer.observe(target, {
        attributes: true,
        childList: true,
        subtree: true
    })
}

