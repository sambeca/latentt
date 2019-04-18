$( document ).ready(function() {
  window.canvas = new fabric.Canvas('canvas');
  canvas.setWidth($('.canvas-container').width());
  canvas.setHeight($('.canvas-container').height());
  canvas.on("object:selected", function(options) {
    options.target.bringToFront();
  });

  let percentage = 0.2;

  fabric.Image.fromURL(`https://patentimages.storage.googleapis.com/pages/US1102${Math.floor(Math.random() * 999)}-0.png`, function(img) {
    img.scaleToWidth(canvas.width*percentage);
    img.set({ 'left': 0 });
    img.set({ 'top': 100 });
    canvas.add(img);
  });

  fabric.Image.fromURL(`https://patentimages.storage.googleapis.com/pages/US1102${Math.floor(Math.random() * 999)}-0.png`, function(img) {
    img.scaleToWidth(canvas.width*percentage);
    img.set({ 'left': 0.2 * canvas.width });
    img.set({ 'top': 100 });
    canvas.add(img);
  });

  fabric.Image.fromURL(`https://patentimages.storage.googleapis.com/pages/US1102${Math.floor(Math.random() * 999)}-0.png`, function(img) {
    img.scaleToWidth(canvas.width*percentage);
    img.set({ 'left': 0.4 * canvas.width });
    img.set({ 'top': 100 });
    canvas.add(img);
  });

  fabric.Image.fromURL(`https://patentimages.storage.googleapis.com/pages/US1102${Math.floor(Math.random() * 999)}-0.png`, function(img) {
    img.scaleToWidth(canvas.width*percentage);
    img.set({ 'left': 0.6 * canvas.width });
    img.set({ 'top': 100 });
    canvas.add(img);
  });

  fabric.Image.fromURL(`https://patentimages.storage.googleapis.com/pages/US1102${Math.floor(Math.random() * 999)}-0.png`, function(img) {
    img.scaleToWidth(canvas.width*percentage);
    img.set({ 'left': 0.8 * canvas.width });
    img.set({ 'top': 100 });
    canvas.add(img);
  });
});

