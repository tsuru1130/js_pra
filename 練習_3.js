/*
 *
 *       Memberクラス → SpecialMemberクラスへ継承
 *
 * */


// ↓はただのコピーするための関数
// initializeBase( 現在のインスタンス, 親クラス, 引数配列 )
// 役割としては、
//      ・基底コンストラクタを呼び出す
//      ・メンバを派生クラスにコピーする
// コピー先は派生クラスのプロトタイプのオブジェクト
function initializeBase( derive, base, baseArgs ){
        // 基底クラスのコンストラクタを呼び出す
        // 派生クラスは、基底クラスの初期化処理に独自の初期化処理を追加するのが一般的
        // 独自の処理は派生クラスに任せればいいので、
        // initializeBase関数では基底クラスのコンストラクタを呼び出すまでを行う
        base.apply( derive, baseArgs ); // Member.applay(this,[fistName,lastName])

        // 基底クラスのメンバを、派生クラスへループでコピー
        // メソッドに関しては、プロトタイプオブジェクトからこぴーする必要があるので、
        // 異なる名前のメソッドのみをコピーするようにしている
        for( prop in base.prototype ){
                var proto = derive.constructor.prototype;
                if( !proto[ prop ] ){
                        proto[ prop ] = base.prototype[ prop ];
                }
        }
}


// Memberクラスを定義
var Member = function( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
};

// Memberクラスを通して、プロトタイプオブジェクトにメソッドを定義
Member.prototype.getName = function(){
        return this.lastName + " " + this.firstName;
};

// Memberクラスを継承したSpecialMemberクラスを定義
var SpecialMember = function( firstName, lastName, role ){
        initializeBase( this, Member, [ firstName, lastName ] );
        this.role = role;
}

SpecialMember.prototype.isAdministrator = function(){
        return ( this.role == "Administrator" );
};

var mem = new SpecialMember( "太郎", "山田", "Administrator" );
document.write( "名前 : " + mem.getName() + "<br>" );
document.write( "管理者 : " + mem.isAdministrator() );