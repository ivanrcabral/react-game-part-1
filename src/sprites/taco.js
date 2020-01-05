function tacoSprite(options) {
    let that = {};
    that.canvas = options.canvas;
    that.context = options.context;
    that.taco = options.taco;
    that.gravitySpeed = options.gravitySpeed;
    that.positionX = Math.floor(Math.random() * window.innerWidth - 49); 
    that.positionY = -50;

    that.render = function() {
        if (that.context) {
            // Clear previous canvas
            that.context.clearRect(
                that.positionX,
                that.positionY,
                50,
                40
            );

            // Set new Y position
            that.positionY += that.gravitySpeed;

            // If object is outside of screen, regenerate taco in the top
            if (that.positionY > window.innerHeight+50) {
                that.positionX = Math.floor(Math.random() * window.innerWidth - 49); 
                that.positionY = -50;
            }

            // Draw taco
            that.context.drawImage(
                that.taco,
                that.positionX,
                that.positionY,
                50,
                40
                );
            that.context.save();
        }
    };
    return that;
}

export default tacoSprite;
