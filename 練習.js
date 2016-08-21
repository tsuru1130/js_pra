// dataにはいるのは,aryの配列
// fはshowElement
function arrayWalk( data, f ){
        for( var i in data ){
                // ここのfでshowElement()を呼び出している
                f( i, data[ i ] );
        }
}
function showElement( key, value ){
        document.write( key + " : " + value + "<br>" );
}
var ary = [ 1, 2, 3, 4, 8, 16 ];
arrayWalk( ary, showElement );
        // 引数にshowElementを送っているだけで、ここでは呼び出していない
        
        
/*
 * 高階関数/匿名関数
 * */
function arrayWalk( data, f ){
        for( var key in data ){
                f( key, data[ key ] );
        }
}

var ary = [ 1, 2, 3, 4, 8, 16 ];
arrayWalk(
      ary,
      function( key, value ){
              document.write( key + " : " + value + "<br>" );
      }
);

/*
 * スコープチェーン
 * */

// グローバルオブジェクト→Callオブジェクト(関数呼び出しで生成されるオブジェクト)
// ↑をスコープチェーンという
// 内から順に変数(プロパティ)を探し、最初に見つかったものを採用する
// 先頭(内側)から順に見つかったものを採用

var y = "Global"; // outerFunc()内のyが先に採用されているため、これは呼ばれない

function outerFunc(){
        var y = "Local Outer <br>";

        function innerFunc(){
                var z = "Local Inner<br>";
                document.write( z );
                document.write( y );
                document.write( x );
        }

        innerFunc();
}
outerFunc();
document.write( y );



/*
*
*       クロージャ１
*
* */

// クロージャはシンプルなオブジェクト
// 処理を１つしか持たない
// オブジェクト指向で書くのであれば、シンプルな処理でもオブジェクトで書く

function closure( init ){
        var counter = init;

        return function(){
                // 匿名関数が有効な間はスコープチェーンが保持される
                // 通常は関数が終われば変数は破棄される
                // 匿名関数がローカル変数counterを参照し続けている(らしい)
                // 返り値としてfunction(){}が戻っているので、この関数は終わらない
                // 内部的に参照しているローカル変数counterも一緒に戻る
                return ++counter;
        }
}

var myClosure = closure( 1 );
// 以下の処理はmyClosureに保存された関数が独立して実行される(closure()自体は完了している)
document.write( myClosure() + "<br>" );
document.write( myClosure() + "<br>" );
document.write( myClosure() + "<br>" );

/*
 *
 *       クロージャ２
 *
 * */
 
function closuer( init ){
        var counter = init;
        return function(){
                return counter++;
        }
}

var myClosure1 = closuer( 1 );
var myClosure2 = closuer( 100 );

// 同じcounterを参照しているが、それぞれ別々のスコープチェーンに所属しているため、
// 互いに独立している
// Callオブジェクトは呼び出されるごとに生成される
// 同じなのはグローバルオブジェクトだけ   
document.write( myClosure1() + "<br>" );
document.write( myClosure1() + "<br>" );

document.write( myClosure2() + "<br>" );
document.write( myClosure2() + "<br>" );