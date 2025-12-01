function setup(){
    createCanvas(690,690);

}

function draw(){
    background(250,190,60);

    //piel 
    fill(20, 69, 135);
    stroke(101, 223, 43)
    strokeWeight(0);
    square(45, 45, 600);
    
    //vidrio de nave 
    fill(194, 212, 242);
    stroke(255);
    strokeWeight(4);
    ellipse(350, 300, 400, 280);

    //gris de la nave 
    fill(63, 65, 66);
    stroke(255);
    strokeWeight(0);
    ellipse(345, 345, 500, 200);

    //marciano
    fill(39, 145, 93);
    stroke(39, 145, 93);
    circle(350, 210, 50);
    strokeWeight(10);
    line(330, 210, 300,200);
    line(390, 210, 360, 200);
    strokeWeight(15);
    line(330, 240, 380, 240);

    //aterizaje 
    fill(0);
    stroke(0);
    strokeWeight(0);
    circle(400, 300, 25);
    circle(265, 390, 20);
    circle(470, 400, 40);

    //luces
    noFill();
    stroke(237, 237, 109);
    strokeWeight(5);  
    curve(0, 150, 100 , 500 ,620, 460, 300, 50);
    fill(237, 237, 109);
    circle(450, 480, 9);
    circle(220, 150, 3);
    circle(640, 460, 7);
    circle(250, 60, 5);
    circle(60, 345, 3);


}
