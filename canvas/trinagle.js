function drawTriangle(ctx, iterations){
    ctx.beginPath();

    var triangles = [
        [
            [211, 525],
            [788, 525],
            [500, 25]
        ]
    ]

    while ( iterations > 0 ){
        var T = triangles;
        triangles = [];
        iterations--;


        for ( var i = 0; i < T.length; i++ ){
            ctx.moveTo(T[i][0][0], T[i][0][1]);
            ctx.lineTo(T[i][1][0], T[i][1][1]);
            ctx.lineTo(T[i][2][0], T[i][2][1]);
            ctx.lineTo(T[i][0][0], T[i][0][1]);

            if ( iterations > 0 ){
                var midABx = ( T[i][0][0] + T[i][1][0] ) / 2;
            var midABy = ( T[i][0][1] + T[i][1][1] ) / 2;

            ctx.moveTo(midABx, midABy);
            
            var midBCx = ( T[i][1][0] + T[i][2][0] ) / 2;
            var midBCy = ( T[i][1][1] + T[i][2][1] ) / 2;

            ctx.lineTo(midBCx, midBCy);

            var midCAx = ( T[i][2][0] + T[i][0][0] ) / 2;
            var midCAy = ( T[i][2][1] + T[i][0][1] ) / 2;

            ctx.lineTo(midCAx, midCAy);
            ctx.lineTo(midABx, midABy);

            triangles[triangles.length] = [
                [midABx, midABy],
                [T[i][0][0], T[i][0][1]],
                [midCAx, midCAy]
            ];

            triangles[triangles.length] = [
                [midBCx, midBCy],
                [T[i][1][0], T[i][1][1]],
                [midABx, midABy]
            ];

            triangles[triangles.length] = [
                [midCAx, midCAy],
                [T[i][2][0], T[i][2][1]],
                [midBCx, midBCy]
            ];

            }
        }
    }

    return ctx;
}
