function no() {
  let w = Math.floor(Math.random() * window.innerWidth - 40);
  let h = Math.floor(Math.random() * window.innerHeight - 20);
  console.log(`height is ${h}, and width is ${w}`);
  document.getElementById(
    "no-btn"
  ).style.cssText = `position:absolute !important; right: ${w}px !important; top: ${h}px !important;`;
}

function yes() {
  document.getElementById("msg-container").style.cssText =
    "display: none !important";
  document.getElementById("yes-container").style.cssText =
    "display: flex !important";
}
