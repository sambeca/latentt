$( document ).ready(function() {
  window.canvas = new fabric.Canvas('canvas');
  canvas.on("object:selected", function(options) {
    options.target.bringToFront();
});

  fabric.Image.fromURL('http://www.clker.com/cliparts/C/k/X/b/0/l/fuchsia-multilink-chain-hi.png', function(img) {
    img.scaleToWidth(200);
    img.set({ 'left': 100 });
    img.set({ 'top': 100 });
    canvas.add(img);
  });

  fabric.Image.fromURL('http://clipart-library.com/images/rTLyd4LT8.png', function(img) {
    img.scaleToWidth(200);
    img.set({ 'left': 200 });
    img.set({ 'top': 200 });
    canvas.add(img);
  });

  fabric.Image.fromURL('http://moziru.com/images/mist-clipart-source-water-13.png', function(img) {
    img.scaleToWidth(200);
    img.set({ 'left': 300 });
    img.set({ 'top': 300 });
    canvas.add(img);
  });

  fabric.Image.fromURL('http://moziru.com/images/table-clipart-transparent-background-2.png', function(img) {
    img.scaleToWidth(200);
    img.set({ 'left': 400 });
    img.set({ 'top': 400 });
    canvas.add(img);
  });

   fabric.Image.fromURL('http://pre09.deviantart.net/6a3f/th/pre/i/2015/150/2/c/sphere_png_by_virgolinedancer1-d8vbbw4.png', function(img) {
    img.scaleToWidth(200);
    img.set({ 'left': 400 });
    img.set({ 'top': 400 });
    canvas.add(img);
  });
});
