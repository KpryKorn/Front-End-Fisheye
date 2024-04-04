export const displayModal = () => {
  window.addEventListener("keydown", handleKeyDown);
  const modal = document.getElementById("contact_modal");
  modal!.style.display = "flex";
};

export const closeModal = () => {
  const modal = document.getElementById("contact_modal");
  modal!.style.display = "none";
};

export const playVideo = () => {
  const video = document.querySelector("video");
  video?.play();
};

const handleKeyDown = (e: any) => {
  if (e.key === "Escape") {
    closeModal();
  }
};
