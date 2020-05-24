const loadCookieMonster = function () {
  setTimeout(function () {
    Game.LoadMod("https://aktanusa.github.io/CookieMonster/CookieMonster.js");
  }, 10000);
};

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
        document.getElementById("upgrade" + i).classList.contains("enabled")
      ) {
        document.getElementById("upgrade" + i).click();
      }
    }
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

loadCookieMonster();
game();
