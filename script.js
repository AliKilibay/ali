const searchInput = document.getElementById("searchInput");
const universityList = document.querySelectorAll(".university");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  universityList.forEach((uni) => {
    const text = uni.textContent.toLowerCase();
    uni.style.display = text.includes(value) ? "block" : "none";
  });
});
