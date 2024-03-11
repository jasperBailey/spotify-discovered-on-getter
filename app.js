import getAuthToken from "./services/getAuthToken.js";
import getPlaylist from "./services/getPlaylist.js";
import { Builder, Browser, By, Key, until } from "selenium-webdriver";
import { ServiceBuilder } from "selenium-webdriver/chrome.js";

(async function example() {
	let driver = await new Builder()
		.setChromeService(
			new ServiceBuilder("./chrome_webdriver/chromedriver.exe")
		)
		.forBrowser(Browser.CHROME)
		.build();
	try {
		await driver.get("https://www.google.com/ncr");
		await driver
			.findElement(By.name("q"))
			.getAttribute("class")
			.then((res) => console.log(res));
		await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
	} finally {
		await driver.quit();
	}
})();

(async function app() {
	const token = await getAuthToken();

	const playlistInfo = await getPlaylist(
		token["access_token"],
		"3cEYpjA9oz9GiPac4AsH4n"
	);

	console.log(playlistInfo);
})();
