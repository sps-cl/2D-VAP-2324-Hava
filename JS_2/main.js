let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

let mouse = {x: 0, y: 0};
let rect1 = {x: 0, y: 0, w: 100, h: 100};
let rect2 = {x: 250, y: 250, w: 100, h: 100};

c.addEventListener("mousemove", function(e) {
    rect1.x = e.clientX - rect1.w/2;
    rect1.y = e.clientY - rect1.h/2;
});

draw();
function draw() {
    let rect = canvas.getBoundingClientRect(); //Gets canvas position and size

    ctx.beginPath();
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.rect(rect1.x - rect.x, rect1.y - rect.x, rect1.w, rect1.h);
    ctx.rect(rect2.x - rect.x, rect2.y - rect.x, rect2.w, rect2.h);
    if(areColliding(rect1, rect2)) ctx.fillStyle = "green";
    else                           ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
    
    requestAnimationFrame(draw);
}

function areColliding(rect1, rect2) {
    return (rect1.x < rect2.x + rect2.w && rect1.x + rect1.w > rect2.x &&
            rect1.y < rect2.y + rect2.h && rect1.y + rect1.h > rect2.y)
}