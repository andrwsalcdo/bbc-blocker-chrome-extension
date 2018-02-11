const message = `
	<div id="message">
  		<h1 class="h1">You don't want to do this. The news can wait.</h1>
  		<h2 class="h2"> Let's stay focused. Come on, close the tab and come back later.</h2>
  		<button id="close-tab">Close the Tab and Read the News Later</button>
  		<div id="continue">Time for a break. Going to read something interesting.</div>   
 	</div>`;

preventDistraction();

function preventDistraction() {
  const page = document.querySelector('body');
  page.insertAdjacentHTML('afterbegin', message);
}

const closeTab = document.getElementById('close-tab');
closeTab.addEventListener('click', () =>
  chrome.runtime.sendMessage({ closeThis: true })
);

const readNews = document.getElementById('continue');
readNews.addEventListener('click', () => {
  const msg = document.getElementById('message');
  document.querySelector('body').removeChild(msg);
  document.getElementById('appMountPoint').style.display = 'block';
});
