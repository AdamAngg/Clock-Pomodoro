const clock = document.querySelector(".clock");
for (let i = 0; i <= 60; i++) {
  const div = document.createElement("div");
  div.classList.add("block");
  div.id = `${i}`;

  i < 10 ? (div.innerHTML = 0 + `${i}`) : (div.innerHTML = `${i}`);

  clock.appendChild(div);
}
