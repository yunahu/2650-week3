const myButton = document.querySelector("#myButton");
const display = document.querySelector("#display");

myButton.addEventListener("click", async () => {
  console.log("clicked!");

  const fetched = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  console.log(fetched);
  const content = await JSON.stringify(fetched);
  display.innerHTML = content;
});
