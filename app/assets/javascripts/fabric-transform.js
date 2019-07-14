$(document).ready(function() {
  // load canvas

  window.canvas = new fabric.Canvas("canvas");

  canvas.setWidth($(".canvas-container").width());

  canvas.setHeight($(".canvas-container").height());

  canvas.on("selection:created", function(options) {
    selectedImgUrl = options.target.getSrc();
    options.target.bringToFront();
  });

  canvas.on("selection:updated", function(options) {
    selectedImgUrl = options.target.getSrc();
    options.target.bringToFront();
  });

  // open pages from selected

  const openCanvasImg = document.getElementById("openCanvasImg");

  openCanvasImg.addEventListener("click", () => {
    window.open(selectedImgUrl, "_blank");
  });

  const openPagesFromSelected = document.getElementById(
    "openPagesFromSelected"
  );

  openPagesFromSelected.addEventListener("click", () => {
    page0Url = selectedImgUrl.slice(0, -5) + "0.png";
    page1Url = selectedImgUrl.slice(0, -5) + "1.png";
    page2Url = selectedImgUrl.slice(0, -5) + "2.png";
    page3Url = selectedImgUrl.slice(0, -5) + "3.png";
    page4Url = selectedImgUrl.slice(0, -5) + "4.png";
    fabric.Image.fromURL(page0Url, function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0, 0.05) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    });
    fabric.Image.fromURL(page1Url, function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.2, 0.25) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    });
    fabric.Image.fromURL(page2Url, function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.4, 0.45) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    });
    fabric.Image.fromURL(page3Url, function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.6, 0.65) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    });
    fabric.Image.fromURL(page4Url, function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.8, 0.85) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    });
  });

  // slider

  $("#fieldSlider").slider({
    range: true,
    min: 0,
    max: 9999999,
    values: [
      localStorage.getItem("fieldMinInputLocal") || 807292,
      localStorage.getItem("fieldMaxInputLocal") || 2731633
    ],
    slide: function(event, ui) {
      localStorage.setItem("fieldMinInputLocal", $(this).slider("values", 0))
      localStorage.setItem("fieldMaxInputLocal", $(this).slider("values", 1));
    }
  });

  let fieldSlider = $("#fieldSlider");

  let sliderMin = fieldSlider.slider("values")[0];
  let sliderMax = fieldSlider.slider("values")[1];

  let patentMinNum = sliderMin;
  let patentMaxNum = sliderMax;

  // load images onto canvas

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomFloatFromInterval = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(4);
  };

  let percentage = randomFloatFromInterval(0.25, 0.35);
  let verticalBoundry = canvas.height - canvas.height * 0.6;
  let patentPageNum = 0;

  let shadow = {
    color: "#888888",
    blur: 49,
    offsetX: 20,
    offsetY: 20,
    opacity: 0.1
  };

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0, 0.05) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.2, 0.25) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.4, 0.45) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.6, 0.65) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.8, 0.85) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0, 0.05) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.2, 0.25) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.4, 0.45) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.6, 0.65) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      patentMinNum,
      patentMaxNum
    )}-${patentPageNum}.png`,
    function(img) {
      img.scaleToWidth(canvas.width * percentage);
      img.set({ left: randomFloatFromInterval(0.8, 0.85) * canvas.width });
      img.set({ top: randomIntFromInterval(0, verticalBoundry) });
      img.rotate(randomIntFromInterval(-30, 30));
      img.setShadow(shadow);
      canvas.add(img);
    }
  );
});
