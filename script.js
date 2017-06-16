$(document).ready(function() {
    console.log('We are ready');
    var white = [];
    var black = [];
    var vart = 1;
    var success1 = [];
    var c1 = 0,
        b1 = 0,
        c_1 = 0,
        d1 = 0,
        e1 = 0,
        f1 = 0,
        g1 = 0,
        h1 = 0,
        t = 0;
    var c2 = 0,
        b2 = 0,
        c_2 = 0,
        d2 = 0,
        e2 = 0,
        f2 = 0,
        g2 = 0,
        h2 = 0,
        winner = "ashish";
    var turn = 0;
    $('.one').click(function() {
        if (turn == 0) {
            white.push(1);
            turn = 1;
            $('.one').addClass('red')
        } else {
            black.push(1);
            turn = 0;
            $('.one').addClass('black')
        }
        console.log(white);
        console.log(black);
        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    $('.two').click(function() {
        if (turn == 0) {
            white.push(2);
            turn = 1;
            $('.two').addClass('red');
        } else {
            black.push(2);
            turn = 0;
            $('.two').addClass('black');

        }
        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    $('.three').click(function() {
        if (turn == 0) {
            white.push(3);
            turn = 1;
            $('.three').addClass('red')
        } else {
            black.push(3);
            turn = 0;
            $('.three').addClass('black')
        }

        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    $('.four').click(function() {
        if (turn == 0) {
            white.push(4);
            turn = 1;
            $('.four').addClass('red')
        } else {
            black.push(4);
            turn = 0;
            $('.four').addClass('black')
        }
        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    $('.five').click(function() {
        if (turn == 0) {
            white.push(5);
            turn = 1;
            $('.five').addClass('red')
        } else {
            black.push(5);
            turn = 0;
            $('.five').addClass('black')
        }
        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    $('.six').click(function() {
        if (turn == 0) {
            white.push(6);
            turn = 1;
            $('.six').addClass('red')
        } else {
            black.push(6);
            turn = 0;
            $('.six').addClass('black')
        }
        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    $('.seven').click(function() {
        if (turn == 0) {
            white.push(7);
            turn = 1;
            $('.seven').addClass('red')
        } else {
            black.push(7);
            turn = 0;
            $('.seven').addClass('black')
        }
        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    $('.eight').click(function() {
        if (turn == 0) {
            white.push(8);
            turn = 1;
            $('.eight').addClass('red')
        } else {
            black.push(8);
            turn = 0;
            $('.eight').addClass('black')
        }
        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    $('.nine').click(function() {
        if (turn == 0) {
            white.push(9);
            turn = 1;
            $('.nine').addClass('red')
        } else {
            black.push(9);
            turn = 0;
            $('.nine').addClass('black')
        }
        checkhouse();
        checkhouse_b();
        checkhouse_c();
    });
    var a = [1, 2, 3];
    var b = [4, 5, 6];
    var c = [7, 8, 9];
    var d = [1, 4, 7];
    var e = [2, 5, 8];
    var f = [3, 6, 9];
    var g = [1, 5, 9];
    var h = [3, 5, 7];

    var checkhouse = function chekhouse() {
        // for 1 2 3
        c1 = 0;
        c2 = 0;
        d1 = 0;
        d2 = 0;
        for (i = 0; i < white.length; i++) {
            if (white[i] == a[0])
                c1++;
            if (white[i] == a[1])
                c1++;
            if (white[i] == a[2])
                c1++;
            if (white[i] == d[0])
                d1++;
            if (white[i] == d[1])
                d1++;
            if (white[i] == d[2])
                d1++;
        }
        for (i = 0; i < black.length; i++) {
            if (black[i] == a[0])
                c2++;
            if (black[i] == a[1])
                c2++;
            if (black[i] == a[2])
                c2++;
            if (black[i] == d[0])
                d2++;
            if (black[i] == d[1])
                d2++;
            if (black[i] == d[2])
                d2++;
        }
        if (c1 == 3) {
            alert('white has won');
            c1 = 0;
            winner = "white";
            display();
        }
        if (c2 == 3) {
            alert('black has won');
            c2 = 0;
            winner = "black";
            display();
        }
        if (d1 == 3) {
            alert('white has won');
            d1 = 0;
            winner = "white";
            display();
        }
        if (d2 == 3) {
            alert('black has won');
            d2 = 0;
            winner = "black";
            display();
        }
    }


    // checkhouse b


    var checkhouse_b = function chekhouse_b() {
        // for 1 2 3
        b1 = 0;
        b2 = 0;
        e1 = 0;
        e2 = 0;
        g1 = 0;
        g2 = 0;
        for (i = 0; i < white.length; i++) {
            if (white[i] == b[0])
                b1++;
            if (white[i] == b[1])
                b1++;
            if (white[i] == b[2])
                b1++;
            if (white[i] == e[0])
                e1++;
            if (white[i] == e[1])
                e1++;
            if (white[i] == e[2])
                e1++;
            if (white[i] == g[0])
                g1++;
            if (white[i] == g[1])
                g1++;
            if (white[i] == g[2])
                g1++;
        }
        for (i = 0; i < black.length; i++) {
            if (black[i] == b[0])
                b2++;
            if (black[i] == b[1])
                b2++;
            if (black[i] == b[2])
                b2++;
            if (black[i] == e[0])
                e2++;
            if (black[i] == e[1])
                e2++;
            if (black[i] == e[2])
                e2++;
            if (black[i] == g[0])
                g2++;
            if (black[i] == g[1])
                g2++;
            if (black[i] == g[2])
                g2++;
        }
        if (b1 == 3) {
            alert('white has won');
            b1 = 0;
            winner = "white";
            display();
        }
        if (b2 == 3) {
            alert('black has won');
            b2 = 0;
            winner = "black";
            display();
        }
        if (e1 == 3) {
            alert('white has won');
            e1 = 0;
            winner = "white";
            display();
        }
        if (e2 == 3) {
            alert('black has won');
            e2 = 0;
            winner = "black";
            display();
        }
        if (g1 == 3) {
            alert('white has won');
            g1 = 0;
            winner = "white";
            display();
        }
        if (g2 == 3) {
            alert('black has won');
            g2 = 0;
            winner = "black";
            display();
        }

    }

    // checkhouse c_

    var checkhouse_c = function chekhouse_c() {
        // for 1 2 3
        c_1 = 0;
        c_2 = 0;
        f1 = 0;
        f2 = 0;
        h1 = 0;
        h2 = 0;
        for (i = 0; i < white.length; i++) {
            if (white[i] == c[0])
                c_1++;
            if (white[i] == c[1])
                c_1++;
            if (white[i] == c[2])
                c_1++;
            if (white[i] == f[0])
                f1++;
            if (white[i] == f[1])
                f1++;
            if (white[i] == f[2])
                f1++;
            if (white[i] == h[0])
                h1++;
            if (white[i] == h[1])
                h1++;
            if (white[i] == h[2])
                h1++;
        }
        for (i = 0; i < black.length; i++) {
            if (black[i] == c[0])
                c_2++;
            if (black[i] == c[1])
                c_2++;
            if (black[i] == c[2])
                c_2++;
            if (black[i] == f[0])
                f2++;
            if (black[i] == f[1])
                f2++;
            if (black[i] == f[2])
                f2++;
            if (black[i] == h[0])
                h2++;
            if (black[i] == h[1])
                h2++;
            if (black[i] == h[2])
                h2++;
        }
        if (c_1 == 3) {
            alert('white has won');
            c_1 = 0;
            winner = "white";
            display();
        }
        if (c_2 == 3) {
            alert('black has won');
            c_2 = 0;
            winner = "black";
            display();
        }
        if (f1 == 3) {
            alert('white has won');
            f1 = 0;
            winner = "white";
            display();
        }
        if (f2 == 3) {
            alert('black has won');
            f2 = 0;
            winner = "black";
        }
        if (h1 == 3) {
            alert('white has won');
            h1 = 0;
            winner = "white";
            display();
        }
        if (h2 == 3) {
            alert('black has won');
            h2 = 0;
            winner = "black";
            display();
        }
    }
    var display = function display() {
        t++;
        if (t == 1) {
            $('.result').css('padding', '40px 40px');
            $('.result').text('game has been finished : ');
            $(".result").append("<h1>Winner is: </h1>" + winner);
            $('.one').css('bg-color', 'blue');
            $('.two').css('bg-color', 'blue');
            $('.three').css('bg-color', 'blue');
            $('.four').css('bg-color', 'blue');
            $('.five').css('bg-color', 'blue');
            $('.six').css('bg-color', 'blue');
            $('.seven').css('bg-color', 'blue');
            $('.eight').css('bg-color', 'blue');
            $('.nine').css('bg-color', 'blue');
            white = [];
            black = [];
        }
    }

});