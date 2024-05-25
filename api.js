const myButton = document.querySelector("#myButton");
const display = document.querySelector("#display");

myButton.addEventListener("click", async () => {
  const fetched = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const ditto = await fetched.json();
  const content = JSON.stringify(ditto);
  display.innerHTML = content;
});
