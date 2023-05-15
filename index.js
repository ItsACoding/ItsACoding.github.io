function calculatetriangle1() {
  let base = parseFloat(document.getElementById("alas-triangle").value);
  let height = parseFloat(document.getElementById("tinggi-triangle").value);
  document.getElementById("cara1").innerHTML = "L = 1/2 x A x T"
  document.getElementById("cara11").innerHTML = "L = 1/2 X " + base + " x " + height;
  let area = 0.5 * base * height;
  document.getElementById("demo1").innerHTML = "Luas Segitiga: " + area.toFixed(2);
  event.preventDefault();
}

function reset1 (){
  document.getElementById("calculateriangle1")
}

function calculatetriangle2() {
  let s1 = parseFloat(document.getElementById("S1").value);
  let s2 = parseFloat(document.getElementById("S2").value);
  let s3 = parseFloat(document.getElementById("S3").value);
  document.getElementById("cara2").innerHTML = "K = S1 + S2 + S3"
  document.getElementById("cara22").innerHTML = "K = " + s1 + " + " + s2 + " + " + s3;
  let area = s1 + s2 + s3;
  document.getElementById("demo2").innerHTML = "keliling Segitiga: " + area.toFixed(2);
  event.preventDefault();
}

function reset2 (){
  document.getElementById("calculateriangle2")
}


function calculatejajargenjang3() {
  let base = parseFloat(document.getElementById("alas-jajargenjang3").value);
  let height = parseFloat(document.getElementById("tinggi-jajargenjang3").value);
  document.getElementById("cara3").innerHTML = "L = A X T"
  document.getElementById("cara33").innerHTML = "L = " + base + " x " + height;
  let area = base * height;
  document.getElementById("demo3").innerHTML = "Luas Jajargenjang: " + area.toFixed(2);
  event.preventDefault();
}

function reset3 (){
  document.getElementById("calculatejajargenjang3")
}

function calculatejajargenjang4() {
  let base = parseFloat(document.getElementById("alas-jajargenjang4").value);
  let height = parseFloat(document.getElementById("tinggi-jajargenjang4").value);
  document.getElementById("cara4").innerHTML = "K = 2 x (A + B)"
  document.getElementById("cara44").innerHTML = "K = 2 x (" + base + " + " + height + ")" ;
  let area = 2 * (base + height);
  document.getElementById("demo4").innerHTML = "Keliling Jajargenjang: " + area.toFixed(2);
  event.preventDefault();
}

function reset4 (){
  document.getElementById("calculatejajargenjang4")
}


function changePage() {
 window.location.href = "Jajargenjang.html";
}
function goBack() {
  window.history.back();
}

function toggleStylesheet() {
  var stylesheet = document.getElementById('style');
  if (stylesheet.disabled) {
    stylesheet.disabled = false;
  } else {
    stylesheet.disabled = true;
  }
}
