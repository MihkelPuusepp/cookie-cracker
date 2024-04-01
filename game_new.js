Game.LoadMod(
  "https://cookiemonsterteam.github.io/CookieMonster/dist/CookieMonster.js"
);

let isGozamokEnabled = false;

// Utility to safely execute actions on elements
function safelyExecute(action) {
  try {
    action();
  } catch (error) {
    console.error("Error executing action", error);
  }
}

// Simplified interactions with the game and DOM
const gameActions = {
  clickElement(selector) {
    const element = document.querySelector(selector);
    if (element) element.click();
  },
  clickId(id) {
    const element = document.getElementById(id);
    if (element) element.click();
  },
  sellAndBuyFactoryItems() {
    if (Game.Objects?.Temple?.minigame?.slot[0] === 2 && isGozamokEnabled) {
      for (let i = 0; i < 20000; i++) {
        Game.Objects.Factory.sell(-1);
        Game.Objects.Factory.buy(20);
      }
    }
  },
  checkAndActivateGozamok() {
    if (Game.Objects?.Temple?.minigame?.slot[0] !== 2) {
      this.clickId("productLevel6");
      this.clickId("productMinigameButton6");
      const god = Game.ObjectsById[6]?.minigame?.godsById[2];
      if (god) {
        const minigame = Game.ObjectsById[6]?.minigame;
        minigame?.dragGod(god);
        minigame?.hoverSlot(0);
        minigame?.dropGod();
      }
    }
  },
  upgradeWizardTower() {
    if (
      document.getElementById("lumpsAmount")?.innerText != "0" &&
      document.getElementById("productLevel7").innerText == "lvl 0"
    ) {
      this.clickId("productLevel7");
    }
  },
  clickUpgrades() {
    const upgrades = document.getElementById("upgrades").children;
    for (let i = 0; i < upgrades.length; i++) {
      const upgrade = document.getElementById("upgrade" + i);
      const isCorrectType =
        upgrade.children[0]?.classList.contains("CMBackGray") ||
        upgrade.children[0]?.classList.contains(
          isGozamokEnabled ? "CMBackYellow" : "CMBackBlue"
        );
      if (
        isCorrectType &&
        upgrade.classList.contains("enabled") &&
        upgrade.dataset.id !== "331" &&
        upgrade.dataset.id !== "74"
      ) {
        upgrade.click();
      }
    }
  },
  confirmElderPledge() {
    const prompt = document.getElementById("promptOption0");
    if (
      prompt &&
      prompt.onclick?.toString()?.includes("Game.UpgradesById[69]")
    ) {
      prompt.click();
    }
  },
  buyBuildings() {
    document
      .querySelector(
        '.storeBulkAmount[style="color: rgb(0, 255, 0);"]:not(.selected)'
      )
      ?.click();
    const products = document.getElementById("products").children;
    const color = isGozamokEnabled ? "rgb(255, 255, 0)" : "rgb(0, 255, 0)";
    for (let i = 0; i < products.length - 1; i++) {
      if (
        document.getElementById("productPrice" + i)?.style.color === color &&
        document.getElementById("product" + i).classList.contains("enabled")
      ) {
        document.getElementById("product" + i).click();
      }
    }
  },
};

function mainLoop() {
  gameActions.clickElement(".fortune");
  gameActions.clickElement(".shimmer");
  Game.ClickCookie(); // Updated to use the official click function

  const particleText = document.getElementById("particle0")?.innerText;
  if (
    particleText?.includes("Elder frenzy") ||
    particleText?.includes("Frenzy")
  ) {
    gameActions.clickElement("#grimoirePrice1");
  }

  gameActions.checkAndActivateGozamok();
  gameActions.upgradeWizardTower();
  gameActions.clickUpgrades();
  gameActions.confirmElderPledge();
  gameActions.buyBuildings();

  setTimeout(mainLoop, 10);
}

// Direct integration of Gozamok strategy into the game's loop is managed through button controls
function createGozamokControlButtons() {
  const gozamokOnButton = document.createElement("button");
  gozamokOnButton.innerText = "Start Gozamok";
  gozamokOnButton.style.position = "absolute";
  gozamokOnButton.style.right = "500px";
  gozamokOnButton.style.bottom = "200px";
  gozamokOnButton.style.zIndex = "1000";
  document.body.appendChild(gozamokOnButton);

  const gozamokOffButton = document.createElement("button");
  gozamokOffButton.innerText = "Stop Gozamok";
  gozamokOffButton.style.position = "absolute";
  gozamokOffButton.style.right = "500px";
  gozamokOffButton.style.bottom = "140px";
  gozamokOffButton.style.zIndex = "1000";
  gozamokOffButton.disabled = true; // Initially disabled
  document.body.appendChild(gozamokOffButton);

  let gozamokInterval = null;

  gozamokOnButton.addEventListener("click", function () {
    if (!gozamokInterval) {
      gozamokInterval = setInterval(gameActions.sellAndBuyFactoryItems, 100);
      gozamokOnButton.disabled = true;
      gozamokOffButton.disabled = false;
      isGozamokEnabled = true;
    }
  });

  gozamokOffButton.addEventListener("click", function () {
    if (gozamokInterval) {
      clearInterval(gozamokInterval);
      gozamokInterval = null;
      gozamokOnButton.disabled = false;
      gozamokOffButton.disabled = true;
      isGozamokEnabled = false;
    }
  });
}

createGozamokControlButtons();
mainLoop();
