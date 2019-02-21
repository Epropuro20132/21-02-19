function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  var ady = 12;
  var opu = 12;
  hypp = hypotemus(ady,opu);
  console.log(hypp);
  
}

function hypotemus(a,b){
  var hyp;
  hyp = sqrt((a*a)+(b*b));
  return hyp;
}
