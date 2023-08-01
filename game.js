// const loadCookieMonster = function () {
//   if (
//     window.confirm(
//       'If you click "ok" you would be redirected . Cancel will load this website '
//     )
//   ) {
//     window.location.href = `javascript:(function(){Game.LoadMod('https://aktanusa.github.io/CookieMonster/CookieMonster.js');}());`;
//   }
// };

const game = function () {
	if (
		document.getElementsByClassName("shimmer") &&
		document.getElementsByClassName("shimmer").length != 0
	) {
		document.querySelector(".shimmer").click();
		if (
			(document.getElementById("particle0") &&
				document.getElementById("particle0").innerText &&
				document
					.getElementById("particle0")
					.innerText.includes("Elder Frenzy")) ||
			(document.getElementById("particle0") &&
				document.getElementById("particle0").innerText &&
				document.getElementById("particle0").innerText.includes("Frenzy"))
		) {
			if (
				document.getElementById("grimoirePrice1") &&
				document.getElementById("grimoirePrice1") != null
			) {
				document.getElementById("grimoirePrice1").click();
			}
		}
	} else {
		if (
			document.getElementById("lumpsAmount") &&
			document.getElementById("lumpsAmount").innerText != "0" &&
			document.getElementById("productLevel7").innerText == "lvl 0"
		) {
			document.getElementById("productLevel7").click();
		}

		for (i = 0; i < document.getElementById("upgrades").children.length; i++) {
			if (
				document.getElementById("upgrade" + i) &&
				document.getElementById("upgrade" + i).children[0] &&
				document
					.getElementById("upgrade" + i)
					.children[0].classList.contains("CMBackBlue") &&
				document.getElementById("upgrade" + i).classList.contains("enabled") &&
				document.getElementById("upgrade" + i).dataset.id !== '331'
			) {
				document.getElementById("upgrade" + i).click();
			}
		}
		const prompt = document.getElementById('promptOption0');
		if (prompt && prompt.onclick?.toString()?.includes('Game.UpgradesById[69]')) {
			prompt.click();
		}
		document.querySelector('.storeBulkAmount[style="color: rgb(0, 255, 0);"]:not(.selected)')?.click();
		for (
			i = 0;
			i < document.getElementById("products").children.length - 1;
			i++
		) {
			if (
				document.getElementById("productPrice" + i) &&
				document.getElementById("productPrice" + i).style.color ==
				"rgb(0, 255, 0)" &&
				document.getElementById("product" + i).classList.contains("enabled")
			) {
				document.getElementById("product" + i).click();
			}
		}
	}
	document.getElementById("bigCookie").click();
	setTimeout(function () {
		game();
	}, 20);
};

game();