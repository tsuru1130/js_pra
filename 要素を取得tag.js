/*
 *       【 DOM(Document Object Model) 】
 *       ・ブラウザオブジェクト
 *          ( Window, Document, Location, Navigator, History, Screen, Image, Form, Anchor )は、
 *            各ブラウザに準拠したオブジェクトなので、クロスブラウザを意識しなければならない
 *       ・そこで登場したのがHTMLやXMLのようなマークアップ言語にアクセスするための仕組みがDOM
 *       ・逆に言えば文章ツリー以外はDOMでは操作できなさそう
 *
 *       ・DOMでは文章に含まれる要素や属性、テキストをオブジェクトと見なし、ノードと呼ぶ
 *                →要素ノード、属性ノード、テキストノード
 *       ・DOMはこれらのノードを抽出・置換・追加・削除するための汎用的な手段を提供するAPI
 *       ・ちなみにDOMツリーの解釈もブラウザごと異なるらしい( 特に空白ノード )
 *
 *       ・ちなみにブラウザオブジェクト内のDocumentオブジェクトとDocument Object Modelは別物
 *       ・まずDOMで特定のノードを操作する場合、必ず" 抽出"をしなければならない
 *              → ダイレクトアクセス
 *              → ノードウォーキング
 *
 *
 *
 *
 * */

// html

<form name="fm">
      <input type="text" id="name" name="name">
      <input type="button" value="送信" onclick="btn_onclick()">
      <div id="result"></div>
</form>


// js

function btn_onclick(){
        var result = document.getElementById( "result" );
        // innerHTMLは現在の要素の内容を取得/設定するためのプロパティ
        result.innerHTML = document.fm.name.value + "さん！";
        // ↑ の document.fm.name.valueはブラウザオブジェクトのFromオブジェクト経由で取得しているが
        // DOMでdocument.getElementById( "name" ).valueでも取得できる
};






