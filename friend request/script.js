let istatus = document.querySelector("h5");
let btn = document.querySelector(".add");

let check = 0;

btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "friends";
    istatus.style.color = "green";
   btn.innerHTML = "Remove friend";
   btn.style.backgroundColor ="#dadada";
    btn.style.color = "#111";
    btn.style.fontWeight =" 700";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
btn.style.color = "#fff"
btn.style.backgroundColor ="cadetblue";
btn.innerHTML ="Add friend"
    check = 0;
  }
});
