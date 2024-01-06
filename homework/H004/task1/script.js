let users = document.querySelector(".user-list");

window.addEventListener("load", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        let userBlock = document.createElement("li");
        let username = document.createElement("p");
        username.textContent = element.name;
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        userBlock.appendChild(username);
        userBlock.appendChild(delBtn);
        users.appendChild(userBlock);
        delBtn.addEventListener("click", () => {
          let deleteElement = delBtn.parentNode;
          deleteElement.remove();
        });
      });
    });
});
