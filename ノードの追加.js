//	html

<form name="fm">
      <select name="food" id="food">
            <option value="ラーメン">ラーメン</option>
            <option value="餃子">餃子</option>
            <option value="焼肉">焼肉</option>
      </select>
      <input type="submit" value="送信">
</form>



//	js

// ちゃんとonloadでDOMツリーを読み込んだ後に実行させる
window.onload = function(){
		
	  // 下でresultに格納するためにここで生成
	  // 格納と同時に生成はできない
        var result = [];
        var s = document.getElementById( "food" );

        // childNodesプロパティは要素直下の子ノード群を取得(返り値はNodeList)
        // ただし改行や空白も取得されてしまうことに注意
        var opts = s.childNodes;

        for( var i = 0; i < opts.length; i++ ){
                var opt = opts[ i ];

                // childNodeで取得した不要なもの(改行など)をふり分ける(クロスブラウザを意識)
                // 1~12種戻り値がある ( 1は要素ノード )
                if( opt.nodeType == 1 ){
	                // valueは()がついていないが、もしかしたらクロージャの様に匿名関数が格納されている
	                // JavaScriptではメソッド()のような概念がなく、変数に関数オブジェクトが格納されていれば
	                // それはメソッドとみなされる
                        result.push( opts[ i ].value );
                }
        }
        document.write( result.join( " , " ) );

}


// もしくは
window.onload = function(){

        var result = [];
        var s = document.getElementById( "food" );

        var child = s.firstChild;

        while( child ){
                if( child.nodeType == 1 ){
                        result.push( child.value );
                }
                // nextSiblingは弟ノード(子ノードじゃない、隣のノード)を取得
                child = child.nextSibling;
        }

        document.write( result.join( " , " ) );

}




























