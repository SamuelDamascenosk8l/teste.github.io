document.querySelectorAll(".video-post video").forEach(video => {
  const button = video.parentElement.querySelector(".video-button");

  video.addEventListener("ended", () => {
    button.style.display = "block";
  });

  video.addEventListener("play", () => {
    button.style.display = "none";
  });
});
