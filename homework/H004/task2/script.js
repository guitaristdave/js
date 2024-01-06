let dogs = document.querySelector(".dogs");

console.log(dogs);
function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let image = document.createElement("img");
      image.src = data.message;
      dogs.appendChild(image);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  let counter = 0;
  const intervalId = setInterval(() => {
    getDog();
    counter++;
    if (counter === 10) {
      clearInterval(intervalId);
    }
  }, 3000);
});
