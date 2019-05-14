$(document).ready(function() {
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

  const openCanvasImg = document.getElementById("openCanvasImg");

  openCanvasImg.addEventListener("click", () => {
    window.open(selectedImgUrl, "_blank");
  });

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomFloatFromInterval = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(4);
  };

  let percentage = randomFloatFromInterval(0.25, 0.35);
  let verticalBoundry = canvas.height - canvas.height * 0.6;
  let patentMaxNum = 9999999;
  // console.log(verticalBoundry);

  let shadow = {
    color: "#888888",
    blur: 49,
    offsetX: 20,
    offsetY: 20,
    opacity: 0.1
  };

  fabric.Image.fromURL(
    `https://patentimages.storage.googleapis.com/pages/US${randomIntFromInterval(
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
      0,
      patentMaxNum
    )}-0.png`,
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
