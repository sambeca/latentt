$( document ).ready(function() {
  window.canvas = new fabric.Canvas('canvas');

  fabric.Image.fromURL('https://openclipart.org/image/2400px/svg_to_png/224532/1438909128.png', function(img) {
    img.scaleToWidth(100);
    canvas.add(img);
  });

  fabric.Image.fromURL('http://pluspng.com/img-png/water-droplet-png-hd-water-drop-transparent-png-563.png', function(img) {
    img.scaleToWidth(100);
    canvas.add(img);
  });

  fabric.Image.fromURL('http://pluspng.com/img-png/rope-png-hd-climbing-rope-feral-designs-png-865.png', function(img) {
    img.scaleToWidth(100);
    canvas.add(img);
  });
});
