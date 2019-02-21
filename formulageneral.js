function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var a = 1; 
  var b = 12;
  var c = 35;
  solucione1 = fmlagnl1(a,b,c);
  console.log(solucione1);
  solucione2 = fmlagnl2(a,b,c);
  console.log(solucione2)
  
  
}

function fmlagnl1(a,b,c){
  var xuno;
  xuno = (-(-b)+(sqrt((b*b)-(4*a*c))))/(2*a); 
  return xuno
}

function fmlagnl2(a,b,c){
  var xdos;
  xdos = (-(-b)-(sqrt((b*b)-(4*a*c))))/(2*a);
  return xdos;
}
