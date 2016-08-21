<form>
      <input type="text" name="name">
      <input type="text" name="url">
      <input type="button" value="追加" onclick="add(this.form)">
</form>

<div id="list"></div>







function add( f ){
        // createElementは要素ノード(タグとか)を取得
        var a = document.createElement( "a" );
        a.href = f.url.value;

        // createTextはテキストノードを作成
        var name = document.createTextNode( f.name.value );
        a.appendChild( name );
        // 他にもcreateAttributeもある

        var br = document.createElement( "br" );
        var list = document.getElementById( "list" );

        // createXXXXXで作成した各ノードを階層関係を意識して組み立てる(ノード同士を組み立てる)
        // appendChild()は追加された順に「一番最後の子ノードとして」指定された要素を追加する
        // appendChild()はinsertBefore()に置き換えられる(※引数が少し異なることに注意！)
        list.appendChild( a )
        list.appendChild( br );
}
