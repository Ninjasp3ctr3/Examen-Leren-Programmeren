function hallo(naam) {
  console.log(`Hallo ${naam}`);
}

const docent = "Jordy";

if ((docent === "Mark") | "Jordy" | "John") {
  hallo(docent);
} else {
  console.log(`Hallo vreemdeling!`);
}
