const iframe = document.getElementById('amazon-video-ads-iframe');

iframe.onload = () => {
    const iframeDocument = iframe.contentDocument;
    const target = iframeDocument.querySelector('.App'); // 適切なセレクタに修正

    if (target) {
        const observer = new MutationObserver(mutations => {
            for (const mutation of mutations) {
                if (mutation.type === 'childList' || mutation.type === 'attributes') {
                    const video = iframeDocument.querySelector('video');
                    if (video) {
                        // 確実に変更が反映されるように、少し遅延させる
                        setTimeout(() => {
                            video.playbackRate = 16;
                            video.muted = true;
                            // スタイルを強制的に再計算
                            getComputedStyle(video).getPropertyValue('playbackRate');
                        }, 100);
                    }
                }
            }
        });
        observer.observe(target, {
            attributes: true,
            childList: true,
            subtree: true
        });
    }
};
