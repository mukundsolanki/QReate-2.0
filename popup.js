document.addEventListener("DOMContentLoaded", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var currentTab = tabs[0];
    var url = currentTab.url;

    var qrCodeDiv = document.getElementById("qrcode");
    var qrCodeImg = document.createElement("img");

    // Setting source of image
    qrCodeImg.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(url) + "&size=200x200";
    qrCodeDiv.appendChild(qrCodeImg);



    // var downloadButton = document.getElementById("downloadButton");
    // downloadButton.addEventListener("click", function () {
    //   var canvas = document.createElement("canvas");
    //   canvas.width = 200;
    //   canvas.height = 200;

    //   var context = canvas.getContext("2d");

    //   var qrCodeImage = new Image();
    //   qrCodeImage.onload = function () {

    //     context.drawImage(qrCodeImage, 0, 0);

    //     var downloadLink = document.createElement("a");
    //     downloadLink.href = canvas.toDataURL("image/png");
    //     downloadLink.download = "qr_code.png";

    //     downloadLink.click();
    //   };

    //   qrCodeImage.src = qrCodeDataUrl;
    // });
  });
});
