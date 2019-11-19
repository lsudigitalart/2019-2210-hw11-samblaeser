var zoo;
var yNum = 0; //2008
var xNum = 0; //years
var rat = 0;
var rabbit = 0;
var ox = 0;
var tiger = 0;
var dragon = 0;
var rat1;
var rabbit1;
var ox1;
var tiger1;
var dragon1;
var fix;

function preload() {

//zoo = loadJSON("https://data.lacity.org/api/views/3gwn-arjr/rows.json?accessType=DOWNLOAD");
zoo = loadTable("Zoo.csv")
rat1 = loadImage("rat.png");
rabbit1 = loadImage('rabbit.png');
ox1 = loadImage('ox.png');
tiger1 = loadImage('tiger.png');
dragon1 = loadImage('dragon.png');
fix = loadFont('courbd.ttf')
}


function setup() {
 createCanvas(980,500);
background(10,200,200);
print("year/attendance headers", zoo.getColumnCount());
print("year numbers/ attendance numbers",zoo.getRowCount());

//attendance
    //yNum = print("look",zoo.get(1, 1));
rat = (zoo.get(5,1)/10000) //2008 atten
ox = (zoo.get(4,1)/10000)  //2009 atten
tiger = (zoo.get(3,1)/10000)  //2010 atten 
rabbit = (zoo.get(2,1)/10000)  //2011 atten
dragon = (zoo.get(1,1)/10000)  //2012 atten

 
textFont(fix);
textSize(30);
text('How many people went to the L.A. Zoo in this year?',30,450);

}


function draw() {


  if (keyIsPressed) {
    if(key == "1"){
      textFont(fix);
      textSize(30);
      fill(110,120,120);
      text('1,556,162!',20,rat-40);
    }
    if(key == "2"){
      textFont(fix);
      textSize(30);
      fill(100,75,0);
      text('1,459,080!',200,ox- 50);
    }
    if(key == "3"){
      textFont(fix);
      textSize(30);
      fill(215,115,0);
      text('1,543,232!',400,tiger - 50);
    }
    if(key == "4"){
      textFont(fix);
      textSize(30);
      fill(150,90,0);
      text('1,660,450!',560,rabbit - 40);
    }
    if(key == "5"){
      textFont(fix);
      textSize(30);
      fill(150,112,150);
      text('1,506,274!',750,dragon - 40);
    }
  }


push();
scale(.8);
image(rat1,5,rat);
textFont(fix);
textSize(30);
fill(110,120,120);
text('rat 2008-2009',20,rat + 250);
text('(1)',120,rat + 280);
pop();

push();
scale(.8);
image(ox1,250,ox);
textFont(fix);
textSize(30);
fill(100,75,0);
text('ox 2009-2010',230,ox + 280);
text('(2)',330,ox + 310);
pop();

push();
scale(.8);
image(tiger1,495,tiger);
textFont(fix);
textSize(30);
fill(215,115,0);
text('tiger 2010-2011',440,tiger + 250);
text('(3)',540,tiger + 280);
pop();

push();
scale(.8);
image(rabbit1,730,rabbit);
textFont(fix);
textSize(30);
fill(150,90,0);
text('rabbit 2011-2012',700,rabbit + 280);
text('(4)',820,rabbit + 310);
pop();

push();
scale(.8);
image(dragon1,975,dragon);
textFont(fix);
textSize(30);
fill(150,112,150);
text('dragon 2012-2013',910,dragon + 250);
text('(5)',1010,dragon + 280);
pop();


}  