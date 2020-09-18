'use strict';

function Logo(canvas) {
  canvas.width  = 640;
  canvas.height = 640;
  let self      = this;
  self.canvas   = canvas;
  self.context  = self.canvas.getContext('2d');
  self.center_x = self.canvas.width  / 2;
  self.center_y = self.canvas.height / 2;
  self.radius   = self.canvas.width  / 20;

  self.context.fillStyle = '#000';

  self.animate();
  return self;
}

Logo.prototype.animate = function () {
  let self = this;

  let c_start = Math.PI   * 0.25;
  let c_end   = Math.PI   * 1.75;
  let c_full  = Math.PI   * 2.00;

  function plop(scale, angle) {
    let ox = self.center_x * Math.cos(angle) * scale + self.center_x;
    let oy = self.center_y * Math.sin(angle) * scale + self.center_y;

    self.context.beginPath();
    self.context.arc(ox, oy, self.radius, 0, c_full);
    self.context.fill();
    return;
  }

  function fizz() {
    let angle = Math.random() * c_full;
    if(angle >= c_start && angle <= c_end) {
      plop(0.32, angle);
    }
    plop(0.76, angle);
    return;
  }

  fizz();

  window.requestAnimationFrame(function(ts) {
    self.animate();
  });
}
