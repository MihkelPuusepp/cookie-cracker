a = function () {
  if (
    document.getElementsByClassName("shimmer") &&
    document.getElementsByClassName("shimmer").length != 0
  ) {
    (node = document.getElementById("CMTimerBarBuff2Type")),
      (text = node.textContent || node.innerText);
    console.log(text);

    if (
      document.getElementById("grimoirePrice1") &&
      document.getElementById("grimoirePrice1") != null
    ) {
      document.getElementById("grimoirePrice1").click();
    }
    document.querySelector(".shimmer").click();
  } else {
    if (
      document.getElementById("lumpsAmount") &&
      document.getElementById("lumpsAmount").innerText != "0"
    ) {
      console.log("else if");
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
    a();
  }, 20);
};
a();
