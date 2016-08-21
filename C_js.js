/*
 *
 *       window.onload = function(){}の様にウィンドウオブジェクトのプロパティとして登録する
 *       ( ↑windowインスタンス(一応これもプロパティとして見れる)にonloadプロパティを設定する )
 *       ・登録するのは関数オブジェクト
 *               → window.onload = init(); × これだと関数の呼び出しになってしまう(onloadの場合はページを読み込んだだけで処理される)
 *               → window.onload = init; ○
 *
 *      document.getElementById()などの個別要素のイベントハンドラは、window.onload配下に記述
 *      ・先にdocument.getElementById()が呼び出されるとエラーを出す
 *      ・loadはページ、画像読み込み完了後に実行
 *
 *      『on + イベント名』は全て小文字
 *
 *      ブラウザオブジェクトの最上位はWindowオブジェクト
 *      ・Windowオブジェクトは直接使えないが、インスタンスのwindowを通すことで、
 *              Windowオブジェクトのもつメソッドなどを使うことができる
 *      ・window(インスタンス)は省略可 特にwindow.document.getElementById()などと書かないほうがいい
 *
 *
 *
 *
 *
 *
 * */


// <body>に対してイベントハンドラを指定する場合と、個別に指定する場合は記述法が異なる
// loadは<body>,<img>に対するもの
window.onload = function(){
        // ここでのdocumentはDocumentオブジェクトを参照するプロパティ(ようはDocumentオブジェクトのインスタンス)
        document.getElementById( "btn" ).onclick = function(){
                window.alert( "やっほー！" );
        };
};