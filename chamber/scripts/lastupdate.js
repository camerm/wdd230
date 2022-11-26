
const lastmodific = document.querySelector('#lastModific');
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
today.textContent = `${fulldateUK}`;
year.textContent = new Date().getFullYear();
lastmodific.textContent = document.lastModified;