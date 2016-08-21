// canvasリファレンス : http://www.html5.jp/canvas/ref.html

onload = function(){
        draw1();
        draw2();
        draw3();
}
function draw(){
        /* canvas要素のノードオブジェクト */
        var canvas = document.getElementById( "canvas-sample" );

        /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
        // getContextメソッドは、HTML5で、canvas要素に対して規定された新たにDOMメソッドの一つ
        if( !canvas || !canvas.getContext ){
                return false;
        }

        /* 2Dコンテキスト */
        // getCotextメソッドから得られた2Dコンテキストのオブジェクトを、ctxに格納
        var ctx = canvas.getContext( "2d" );

        /*
         *       1. 線を描くと宣言します。: ctx.beginPath();
         *       2. 書き始める場所を指定します。: ctx.moveTo(20, 20);
         *       3. 引きたい線の終点を指定します。: ctx.lineTo(120, 20);
         *       4. 引きたい線の終点を指定します。: ctx.lineTo(120, 120);
         *       5. 引きたい線の終点を指定します。: ctx.lineTo(20, 120);
         *       6. 描いた線を閉じます。: ctx.closePath();
         *       7. できた図形を線で描画します。: ctx.stroke();
         * */
        ctx.beginPath();
        ctx.moveTo( 20, 20 );
        ctx.lineTo( 120, 20 ); // 現在の座標から、引数に指定した座標に向けて直線を描くメソッド
        ctx.lineTo( 120, 120 );
        ctx.lineTo( 20, 120 );
        ctx.closePath(); // closePathメソッド : 描いた図を直線を使って自動的に閉じてくれる
        ctx.fill(); // これまで描いてきた図形を線で描画するメソッド
}

/* fillrect */
function draw1(){
        var canvas = document.getElementById( "c1" );
        if( !canvas || !canvas.getContext ){
                return false;
        }
        // ctx.fillRect(x, y, width, height)
        // 塗りつぶした矩形を描きます。x, yには矩形の左上端の座標を、widthに矩形の横幅を、heightに縦幅を引数として与えます。
        var ctx = canvas.getContext( "2d" );

        ctx.beginPath();

        /* 半透明度を指定 */
        ctx.globalAlpha = 0.7;
        // 色を追加 実際に描画される前に記述
        ctx.fillStyle = "rgba(192, 80, 77, 0.7)";

        // ここで描画
        ctx.fillRect( 20, 20, 80, 40 );

}

/* strokeRect() */
function draw2(){
        var canvas = document.getElementById( "c2" );
        if( !canvas || !canvas.getContext ){
                return false;
        }
        var ctx = canvas.getContext( "2d" );
        ctx.beginPath();
        ctx.strokeRect( 20, 20, 80, 80 );
}

/* clearRect() */
function draw3(){
        var canvas = document.getElementById( "c3" );
        if( !canvas || !canvas.getContext ){
                return false;
        }
        var ctx = canvas.getContext( "2d" );
        ctx.beginPath();
        ctx.fillRect( 20, 20, 100, 100 );
        ctx.beginPath();
        ctx.clearRect( 50, 70, 60, 30 );
}

document.write( "aa" );









