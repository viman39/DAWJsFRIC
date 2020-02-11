function drawTree(ctx, startX, startY, length, angle, depth, maxBranch){
    ctx.beginPath();

    var subBranches = [[startX, startY, length, angle]];

    while ( depth > 0 ){
        var rand = Math.random;
        var maxAngle = 2 * Math.PI / 6;

        var branches = subBranches;
        console.log(branches);
        subBranches = []

        for ( var i = 0; i < branches.length; i++){
            var startX = branches[i][0];
            var startY = branches[i][1];
            var length = branches[i][2];
            var angle = branches[i][3];

            ctx.moveTo(startX, startY);

            endX = startX + length * Math.cos(angle);
            endY = startY + length * Math.sin(angle);
            ctx.lineCap = 'round';
            ctx.lineTo(endX, endY);

            subBr = (rand() * (maxBranch)) + 1;

            for (var j = 0; j < subBr; j++) {
                newAngle = angle + rand() * maxAngle - maxAngle * 0.5;
                newLength = length * (0.7 + rand() * 0.3);

                subBranches[j] = [endX, endY, newLength, newAngle];

            maxAngle = newAngle*0.5
                
            }

        }

        depth--;
    }
    
    return ctx;
};
