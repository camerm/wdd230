// -------------------------------------------------Current Day-----------------------------------------------------//
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${monthName} ${d.getDate()} ${year}`;
// using getElementById
document.getElementById("currentdate").textContent = fulldate;

// -------------------------------------------------Nav responsive-----------------------------------------------------//
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

// -------------------------------------------------Banner-----------------------------------------------------//

let day = new Date().getDay();

const banner = document.getElementById("banner");
if (day === 1 || day === 2) {
	banner.style.display = "flex";
	banner.style.justifyContent = "space-between";
}
const close1 = document.querySelector("#close");
close1.style.color = "red" ;
close1.addEventListener("click", () => {
	banner.style.display = "none";
});