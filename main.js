
const message = '<div id="message"><button id="quit">Close the BBC tab</button><div id="continue">I\'m going to read something interesting.</div></div>';

preventDistraction();

function preventDistraction() {
	const page = document.querySelector("body");
	page.insertAdjacentHTML(
        "afterbegin",
        message 
	);
}

const closeTab = document.getElementById("quit");
closeTab.addEventListener("click", () => chrome.runtime.sendMessage({ closeThis: true }) );

const readNews = document.getElementById("continue");
readNews.addEventListener("click", () => {
	const msg = document.getElementById("message");
	document.querySelector("body").removeChild(msg);
	document.getElementById("appMountPoint").style.display = "block";
});
