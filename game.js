a = function () {
  if (document.getElementsByClassName("shimmer").length != 0) {
    console.log("asdsa");
    document.querySelector(".shimmer").click();
  } else {
    document.getElementById("bigCookie").click();
  }
  setTimeout(function () {
    a();
  }, 50);
};

a();
