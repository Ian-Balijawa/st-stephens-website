function animatePathDrawing(ctx, lines, duration, width, height) {
  let start = null;
  const points = [];
  const colors = [
    "rgba(255,238,0,0.3)",
    "rgba(255,0,128,0.3)",
    "rgba(0,247,255,0.3)"
  ];
  for (var i = 0; i < lines; i++) {
    points.push({
      x0: i % 2 ? 0 : width,
      y0: Math.random() * height,
      x1: 150,
      y1: -50,
      x2: i % 2 ? width : 0,
      y2: Math.random() * height,
      t0: 0,
      color: colors[i]
    });
  }
  const step = function animatePathDrawingStep(timestamp) {
    if (start === null) {
      start = timestamp;
    }

    const delta = timestamp - start;
    const progress = Math.min(delta / duration, 1);

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw curves
    points.forEach(pointsObj => {
      drawBezierSplit(ctx, pointsObj, progress);
    });

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

function drawBezierSplit(ctx, pointsObj, t1) {
  const { x0, y0, x1, y1, x2, y2, t0, color } = pointsObj;
  ctx.beginPath();
  if (0.0 === t0 && t1 === 1.0) {
    ctx.moveTo(x0, y0);
    ctx.quadraticCurveTo(x1, y1, x2, y2);
  } else if (t0 !== t1) {
    let t00 = t0 * t0;
    let t01 = 1.0 - t0;
    let t02 = t01 * t01;
    let t03 = 2.0 * t0 * t01;

    const nx0 = t02 * x0 + t03 * x1 + t00 * x2;
    const ny0 = t02 * y0 + t03 * y1 + t00 * y2;

    t00 = t1 * t1;
    t01 = 1.0 - t1;
    t02 = t01 * t01;
    t03 = 2.0 * t1 * t01;

    const nx2 = t02 * x0 + t03 * x1 + t00 * x2;
    const ny2 = t02 * y0 + t03 * y1 + t00 * y2;

    const nx1 = lerp(lerp(x0, x1, t0), lerp(x1, x2, t0), t1);
    const ny1 = lerp(lerp(y0, y1, t0), lerp(y1, y2, t0), t1);

    ctx.moveTo(nx0, ny0);
    ctx.quadraticCurveTo(nx1, ny1, nx2, ny2);
  }

  ctx.stroke();
  ctx.strokeStyle = color;
  ctx.lineWidth = 6;
  ctx.closePath();
}

//Linearly interpolate between two numbers v0, v1 by t
function lerp(v0, v1, t) {
  return (1.0 - t) * v0 + t * v1;
}

export { animatePathDrawing };
