const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  toDoList();
});

function toDoList() {
  let newTask = inputEl.value;
  const liEl = document.createElement("li");
  liEl.innerText = newTask;
  ulEl.appendChild(liEl);
  inputEl.value = "";
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = `
    <i class="fas fa-check-square"> `;
  liEl.appendChild(checkBtnEl);

  const trashEl = document.createElement("div");
  trashEl.innerHTML = `<i class="fa fa-trash" aria-hidden="true">    
    `;
  liEl.appendChild(trashEl);

  checkBtnEl.addEventListener("click", () => {
    liEl.classList.toggle("checked");
  });
  trashEl.addEventListener("click", () => {
    liEl.remove();
    updateLocalStorage();
  });
  updateLocalStorage();
}

function updateLocalStorage() {
  const liEl = document.querySelectorAll("li");
  let list = [];
  liEl.forEach((liEl) => {
    list.push({
      name: liEl,
      innerText,
      checked: liEl.classList.contains("checked"),
    });
  });
}
localStorage.setItem("list", JSON.stringify(list));
