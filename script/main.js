const firstName = "Oskar";
const age = "25";

console.log(`Cześć, nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector(".page-header__heading--js");

console.log(header.innerHTML);

header.innerHTML = `Siema jestem ${firstName} i mam ${age} lat.`;
