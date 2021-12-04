var mic;
var tree = [];
var leaves = [];
var count = 0;
var img;
var goodFlag = 0;
function preload() {
    img = loadImage("2.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    imageMode(CORNER);
    image(img, 0, 0, windowWidth, windowHeight);
    var a = createVector(1000, 1050);
    var b = createVector(1000, height - 355);
    var root = new Branch(a, b);

    tree[0] = root;

    mic = new p5.AudioIn()
    mic.start();

}

function mousePressed() {
    if (mouseX > 0 && mouseX < 1000 && mouseY > 0 && mouseY < 1000) {
        var fs = fullscreen();
        fullscreen(!fs);
    }
}

function treeGrow() {
    for (var i = tree.length - 1; i >= 0; i--) {
        if (!tree[i].finished) {
            if (tree[i].age < 1) {
                tree[i].age += 0.05
            } else {
                tree[i].age = 1;
                tree[i].finished = true;
                tree.push(tree[i].branchA());
                tree.push(tree[i].branchB());
            }
        }
    }
}

function resetTree() {

    image(img, 0, 0, windowWidth, windowHeight);
    tree = [];
    var a = createVector(1000, 1050);
    var b = createVector(1000, height - 355);
    var root = new Branch(a, b);
    tree[0] = root;

    textSize(40);
    fill(0, 240, 255);
    textFont('Rokkitt');
    text("Please input your voice", 750, 750);
}



function draw() {
    image(img, 0, 0, windowWidth, windowHeight);
    //background(0);
    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
    }
    var lvl = Math.floor(mic.getLevel() * 100)
    for (var m = 0; m < 0.0053 * tree.length; m++) {
        if (lvl >= 0.001 && m < 2 * tree.length) {
            // console.log("123");
            if (goodFlag === 0) {
                treeGrow()
            }
        } else {
            goodFlag = 0;
            resetTree()
        }
    }

    if (lvl >= 0.001 && m < 0.0056 * tree.length) {
        for (var i = 0; i < 0.99999 * tree.length; i++) {
            if (!tree[i].finished) {
                var leaf = tree[i].end.copy();
                leaves.push(leaf);
            }
        }
        for (var i = 0; i < leaves.length; i++) {
            fill(255, random(255), random(255), 230)
            //fill(234,115,115,150);
            noStroke();
            ellipse(leaves[i].x, leaves[i].y, 2, 2);
        }
        goodFlag = 1;
        textSize(40);
        fill(0, 240, 255);
        text("Terrific!", 1080, 910);
    } else {


    }

}


function keyPressed() {
    goodFlag = 0
    resetTree()
}
