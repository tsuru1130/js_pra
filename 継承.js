function initializeBase( derive, base, baseArgs ){
        // derive ← this ← SpecialMemberのコンストラクタ
        // baseはMemberオブジェクトが格納
        base.apply( derive, baseArgs ); // ここで基底(親)クラスのコンストラクタの呼び出し
        // apply()はFunctionオブジェクトのメソッド : 関数をderiveのメソッドであるかの様にできる

        // ここのループではメンバを派生クラスへコピーしている
        // ここでのメンバはプロトタイプオブジェクトに登録されているメソッドのみ(他のメンバは？)
        // 右から左に代入する
        for( prop in base.prototype ){
                var proto = derive.constructor.prototype;
                if( !proto[ prop ] ){
                        proto[ prop ] = base.prototype[ prop ];
                }
        }
};

var Member = function( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
};
Member.prototype.getName = function(){
        return this.firstName + this.lastName;
};

// 派生クラス( 兼コンストラクタ )
var SpecialMember = function( firstName, lastName, role ){
        /*
         *      initializeBase関数の役割
         *       ・基底クラスのコンストラクタを呼び出す
         *       ・基底クラスで定義されたメンバを、派生クラスにコピーする
         *       ・コピー先はプロトタイプオブジェクト
         *       initializeBase( 現在のクラス, 親クラス, 引数配列 );
         *       引数配列 : 親クラスのコンストラクタに渡す引数
         *
         * */
        initializeBase( this, Member, [ firstName, lastName ] );
        this.role = role; // ここで派生クラス独自の初期化処理を追加
}
SpecialMember.prototype.isAdministrator = function(){
        return ( this.role == "Administrator" );
};
var mem = new SpecialMember( "tsuru", "choff", "Administrator" );
document.write( '名前 : ' + mem.getName() + "<br>" );
document.write( "管理者 : " + mem.isAdministrator() );