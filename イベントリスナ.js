<input type="button" value="ダイアログ表示" id="btn">




// IEとIE以外別に条件分岐する(機能テスト)
// addListener()はユーザー定義関数
function addListener( elem, ev, listener ){
        if( elem.addEventListener ){
                // IE以外
                elem.addEventListener( ev, listener, false ); // false:バブリング方向

        } else if( elem.attachEvent ){
                // IE以外
                elem.attachEvent( "on" + ev, listener );

        } else {
                throw new Error( "イベントリリスナーに非対応です" );
        }
}

// removeListener()はユーザー定義関数
// removerListener( 要素ノード, イベント名(onなし), イベントリスナ関数 );
function removerListener( elem, ev, listener ){
        if( elem.removeEventListener ){
                elem.removeEventListener( ev, listener, false );
        } else if( elem.detachEvent ){
                elem.detachEvent( "on" + ev, listener );
        } else {
                throw new Error( イベントリスナに非対応です );
        }
}

removerListener( document.getElementById( "btn" ), "click", btn_click );


// addlListener( 要素ノード, イベント名(onなし), イベントリスナ関数 );
// このaddlListenerはページロード時
addListener( window, "load", init );


// このaddlListenerはボタン押下時
function init(){
        addListener( document.getElementById( "btn" ), "click", function(){
                window.alert( "ボタンがクリックされました！" );
        } );
}


