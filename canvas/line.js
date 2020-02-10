
<body>
    <canvas id="myCanvas" width="720" height="430" style="border:1px solid #d3d3d3;">
        Your browser does not support the HTML5 canvas tag.
    </canvas>
    <script>
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        ctx.beginPath();
        ctx.fillStyle = "#131364";
        ctx.fillRect(5, 5, 710, 420);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#d0c54b";
        ctx.arc(600, 75, 50, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#000";
        ctx.moveTo(5, 420);
        ctx.lineTo(75, 200);
        ctx.lineTo(150, 420);
        ctx.lineTo(185, 150);
        ctx.lineTo(220, 250);
        ctx.lineTo(260, 0);
        ctx.lineTo(300, 420);
        ctx.fill();

        window.requestAnimationFrame(onFrame);

        function onFrame(){
            ctx.clearRect(0, 0, 720, 430);

            ctx.beginPath();
            ctx.moveTo(720-300-width, 420-length);
            ctx.lineTo(720-350-width, 420-30-length);
            ctx.lineTo(720-400-width, 420-length);
            ctx.fill();

            window.requestAnimationFrame(onFrame);
        }

    </script>

</body>
