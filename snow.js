const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');

// Resize canvas to fill screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Snowflake class to manage snowflakes
class Snowflake {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1; // Random size for snowflakes
        this.speed = Math.random() + 0.5; // Random falling speed
        this.opacity = Math.random() * 0.5 + 0.5; // Random opacity
    }

    // Update the snowflake position
    update() {
        this.y += this.speed; // Move the snowflake down
        if (this.y > canvas.height) {
            this.y = 0; // Reset snowflake to top if it falls out of the screen
            this.x = Math.random() * canvas.width; // Random horizontal position
        }
    }

    // Draw the snowflake
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }
}

// Create an array of snowflakes
const snowflakes = [];
for (let i = 0; i < 100; i++) {
    snowflakes.push(new Snowflake(Math.random() * canvas.width, Math.random() * canvas.height));
}

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    for (let i = 0; i < snowflakes.length; i++) {
        snowflakes[i].update();
        snowflakes[i].draw();
    }
    requestAnimationFrame(animate); // Repeat the animation
}

// Start the animation
animate();