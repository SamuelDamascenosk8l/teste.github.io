// Dá play automático no vídeo ao passar o mouse
document.querySelectorAll("video").forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
