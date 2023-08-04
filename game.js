Game.LoadMod(
  "https://cookiemonsterteam.github.io/CookieMonster/dist/CookieMonster.js"
);

function gozamok() {
  for (let i = 0; i < 20000; i++) {
    Game.Objects.Factory.sell(-1);
    Game.Objects.Factory.buy(20);
  }
  setTimeout(gozamok, 10000);
}

function loop() {
  // clicks news
  document.querySelector(".fortune")?.click();
  // clicks golden cookie
  document.querySelector(".shimmer")?.click();
  // clicks main cookie
  document.getElementById("bigCookie").click();

  // checks if Elder frenzy or Frenzy and presses hand of faith
  if (
    document.getElementById("particle0")?.innerText?.includes("Elder frenzy") ||
    document.getElementById("particle0")?.innerText?.includes("Frenzy")
  ) {
    document.querySelector("#grimoirePrice1")?.click();
  }

  // checks if have more than 1 sugarlump and temple minigame not owned
  if (
    document.getElementById("lumpsAmount")?.innerText != "0" &&
    document.getElementById("productLevel6").innerText == "lvl 0"
  ) {
    document.getElementById("productLevel6").click();
    g = Game.ObjectsById[6].minigame.godsById[2];
    Game.ObjectsById[6].minigame.dragGod(g);
    Game.ObjectsById[6].minigame.hoverSlot(0);
    Game.ObjectsById[6].minigame.dropGod();
  }

  // checks if have more than 1 sugarlump and wizard tower minigame not owned
  if (
    document.getElementById("lumpsAmount")?.innerText != "0" &&
    document.getElementById("productLevel7").innerText == "lvl 0"
  ) {
    document.getElementById("productLevel7").click();
  }

  // loop upgrades and check if blue color, exclude chime on and remove elder covenant
  for (i = 0; i < document.getElementById("upgrades").children.length; i++) {
    if (
      document
        .getElementById("upgrade" + i)
        .children[0]?.classList.contains("CMBackBlue") &&
      document.getElementById("upgrade" + i).classList.contains("enabled") &&
      document.getElementById("upgrade" + i).dataset.id !== "331" &&
      document.getElementById("upgrade" + i).dataset.id !== "74"
    ) {
      document.getElementById("upgrade" + i).click();
    }
  }

  // elder option confirm
  const prompt = document.getElementById("promptOption0");
  if (prompt && prompt.onclick?.toString()?.includes("Game.UpgradesById[69]")) {
    prompt.click();
  }

  // select correct buy amount
  document
    .querySelector(
      '.storeBulkAmount[style="color: rgb(0, 255, 0);"]:not(.selected)'
    )
    ?.click();

  // select correct building to buy
  for (
    i = 0;
    i < document.getElementById("products").children.length - 1;
    i++
  ) {
    if (
      document.getElementById("productPrice" + i)?.style.color ==
        "rgb(255, 255, 0)" &&
      document.getElementById("product" + i).classList.contains("enabled")
    ) {
      document.getElementById("product" + i).click();
    }
  }

  setTimeout(loop, 20);
}

loop();
gozamok();
