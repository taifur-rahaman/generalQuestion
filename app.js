const showBtn = document.querySelectorAll(".fa-square-plus");
const hideBtn = document.querySelectorAll(".fa-square-minus");
const hr = document.querySelectorAll(".hr");
const content = document.querySelectorAll(".answer p");

showBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    showBtnHidden(index);
    hideBtnVisible(index);
    hrVisible(index);
    contentVisible(index);
    console.log("show button clicked");
  });
});

hideBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    hideBtnHidden(index);
    showBtnVisible(index);
    hrHidden(index);
    contentHidden(index);
    console.log("hide button clicked");
  });
});
