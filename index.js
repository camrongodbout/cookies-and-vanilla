exports.cookiesAndVanilla = function() {
  browser.cookies.onChanged.addListener(function(changeInfo){
    if (changeInfo.removed) {
      return;
    }
    console.log("MMMMmmmm cookies");
  })
}