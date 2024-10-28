function openVideo() {
    const videoModal = document.getElementById('videoModal');
    videoModal.style.display = 'flex';
}

function closeVideo() {
    const videoModal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoModal.style.display = 'none';
    // Pausa el video al cerrar el modal
    videoFrame.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}
