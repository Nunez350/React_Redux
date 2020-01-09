var b = document.getElementById("ThisIsCanvas");
  var ctxx = b.getContext("2d");
  ctxx.beginPath();
  ctxx.arc(80, 70, 50, 0, 2*Math.PI);
  ctxx.stroke();