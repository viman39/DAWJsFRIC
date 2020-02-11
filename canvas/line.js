function drawLine(ctx, aX, aY, bX, bY, iterations){
    ctx.beginPath();

    var lines = [[[aX, aY], [bX, bY]]];

    while ( iterations > 0 ){
        iterations--;
        var l = lines;

        lines = [];

        for ( var i = 0; i < l.length; i++ ){ // pentru fiecare pereche [ax, ay] , [bx, by]
            ctx.moveTo(l[i][0][0], l[i][0][1]);
            ctx.lineTo(l[i][1][0], l[i][1][1]);

            if ( iterations > 0 ){
                var frstThirdX = l[i][0][0] + ( l[i][1][0] - l[i][0][0] ) * ( 1 / 3);
                var frstThirdY = l[i][0][1] + ( l[i][1][1] + l[i][0][1] ) * ( 1 / 3);
                var scndThridX = l[i][0][0] + ( l[i][1][0] - l[i][0][0] ) * ( 2 / 3);
                var scndThridY = l[i][0][1] + ( l[i][1][1] - l[i][0][1] ) * ( 2 / 3);

                lines[lines.length] = [[l[i][0][0], l[i][0][1]], [frstThirdX, frstThirdY]];
                lines[lines.length] = [[scndThridX, scndThridY], [l[i][1][0], l[i][1][1]]];

                var baseLength; // acum ar trebui calculata baza , inaltimea, coordonatele varfului inaltimii
            }
        }
    }

    return ctx;
}
