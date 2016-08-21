/*
 * ・JavaScriptはJavaでいうクラスはプロトタイプという
 * ・JavaScriptでいうクラスは関数にクラスとしての役割を与えている
 *
 *
 * */
// JavaScriptでは関数にクラスの役割を与えている
// インスタンス化すると同時に、強制的にコンストラクタを利用する形になるので、
// クラス(コンストラクタ)として関数を定義する場合は区別するために大文字から始める
// ↓️がクラスの定義
var Member = function( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;

        // JavaScriptにはクラスにメソッドというのはない
        // JavaScriptは値が関数であるものがメソッドとして見なされる
        // ↓のように定義する事でgetterメソッドという感じになる
        this.getName = function(){
                return this.lastName + this.firstName;
        }
};
var men = new Member( "太郎", "山田" );
var men2 = new Member( "花子", "山田" );
document.write( men.getName() + "<br>" );
document.write( men2.getName() );




/*
 *
 *       protypeプロパティを使った例
 *       ・すべてのオブジェクトの大元のオブジェクト(?)
 *       ・なので大元のオブジェクト(prototype)にメンバを追加する事によって、
 *               その他インスタンス化されたオブジェクトから参照できる。と思う
 *       ・イメージとしては抽象クラスとか
 *       ・prototypeプロパティを使う事で、大元のプロトタイプオブジェクトにメソッドを追加できる
 *
 *       JavaScriptにはクラスという概念がない
 *              →あるのは実体化されたオブジェクトのみ
 *              →新しくオブジェクトを作るにも、すでにあるオブジェクトを元にする
 *              →それぞれのオブジェクトの雛形になるのがプロトタイプ
 *              →従ってJavaScriptは、プロトタイプベースのオブジェクト指向と言われる
 *              →javaはクラスベースのオブジェクト思考
 *
 * */
var Member = function( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
};

// ここでプロトタイプのメモリ空間ににメソッドを定義している
Member.prototype.getName = function(){
        // lastNameなどは最初のMemberを書く事によって、継承されている。と思う
        return this.lastName + this.firstName;
}
var mem = new Member( "太郎", "山田" );
// ↓は① Menberクラス → ② prototypeオブジェクトの順番にgetNameを探す
document.write( mem.getName() );


/*
	
		プロトタイプのプロパティについて
		
*/

var Member = function(){
};
Member.prototype.sex = "男";
var mem1 = new Member();
var mem2 = new Member();

document.write( mem1.sex + " | " + mem2.sex + "<br>" );
mem2.sex = "女";
// メソッドと同じ順序で読み込むとすれば、
// mem2インスタンスのsexプロパティに直接値が入っているため、
// プロトタイプオブジェクトのsexプロパティを参照する必要がない
// ただし、プロトタイプの値が上書きされているわけではない(隠蔽という)ので、
// mem1.sexはプロトタイプのsexプロパティを参照している
document.write( mem1.sex + " | " + mem2.sex );

// ちなみにインスタンスに対してはdelete演算子が使える(プロトタイプには使えない)
// インスタンス側でのメンバに対する処理がプロトタイプにまで影響する事はない
// 演算子だからセミコロンはいらないのかな？
delete mem2.sex

/*
*       実際はプロトタイプオブジェクトにプロパティを入れて使う必要はない
*               →プロパティ : コンストラクタ
*               →メソッド : プロトタイプ
*       というように使い分ける
*
* */



/*
 *       ・静的メソッド、プロパティはjavaのようにstaticを使わない
 *       ・呼び出し方は同じ( オブジェクト名.メソッド名 )
 *       ・ただし静的メソッド、プロパティとして登録した各種情報は、インスタンス化したもので使えない
 *               →javaではstaticメソッドであっても、インスタンスからアクセスできる
 *       ・静的メソッド内ではthisは使えない(使えるけど、コンストラクタを指すだけなので使っても意味がなさすぎる)
 *       ・クラス単位でメンバをまとめる事(クラス配下に置くこと)で、他のライブラリ等の競合を防ぐ事ができる
 *
 * */

var Area = function(){

};

Area.version = "1.0";
Area.triangle = function( base, height ){
        return base * height / 2;
}
Area.diamond = function( width, height ){
        return width * height / 2;
}

document.write( "Areaクラスのバージョン : " + Area.version );
document.write( "三角形の面積 : " + Area.triangle( 10, 2 ) );

var a = new Area();
// 静的メンバはクラス単位で保管されるものであるため、利用する場合はクラス名.メソッド名となる
// 静的メンバとして登録したものには、インスタンスから利用できない
document.write( "菱型の面積 : " + a.diamond( 10, 2 ) );



/*
 *       オブジェクトリテラルで書くと綺麗
 *	   プロトタイプに(メソッドを)書く場合はこの方がいい
 * */
var Member = function( firstName, lastName ){
        this.firstName = firstName;
        this.lastName = lastName;
};
Member.prototype = {
        getName : function(){
                return this.lastName + " : " + this.firstName;
        },
        toString : function(  ){
                return this.lastName + " : " + this.firstName;
        }
};



/*
 *       【継承】
 *       ・JavaScriptではプロトタイプチェーンという
 *
 *
 * */
var Animal = function(){

}

// 静的メソッドとプロトタイプとの違いがややこしい
// プロトタイプはインスタンス化が必要(静的メソッドは登録さえしていれば必要なし)
// ここで Animalのもつprototypeプロパティを通して、プロパティオブジェクトに登録
// もちろんHumanクラスのような別クラスでは、Animalクラスを通して登録したプロトタイプメンバは参照できない
Animal.prototype = {
        walk : function(){
                document.write( "トコトコ...<br>" );
        }
};

var Dog = function(){

}
// ここでAnimalインスタンスが格納される
// AnimalインスタンスにはAnimalクラスを通して登録した、
// プロトタイプメンバの情報も格納されている(それを引き継いでいる)
Dog.prototype = new Animal();
Dog.prototype.bark = function(){
        document.write( "ワンワン！！" );
}
// 読み込まれる順番としては、
// ① d → ② Animal → ③ プロトタイプ(最終的にはObject.prototypeにたどり着くらしい)
var d = new Dog();
d.walk();
d.bark();


/*
 *
 *       Javaと異なる点
 *       ・Javaはいったん決定した継承関係を途中で変更する事ができない
 *       ・JavaScriptは変更可能
 *               →あるタイミングではオブジェクトXを継承し、次のタイミングではオブジェクトYを継承(ということが可能)
 *
 * */

var Animal = function(){

}
Animal.prototype = {
        walk : function(){
                document.write( "トコトコ...<br>" );
        }
};
var SupperAnimal = function(){

}
SupperAnimal.prototype = {
        walk : function(){
                document.write( "ダダダダダッ！！<br>" );
        }
};

var Dog = function(){

}
Dog.prototype = new Animal();
var d1 = new Dog(); // ここでAnimalクラスを継承
var d2 = new Dog(); // ここでAnimalクラスを継承
d1.walk(); // トコトコ...
d2.walk(); // トコトコ...

Dog.prototype = new SupperAnimal(); // 継承元をここで変更
var d1 = new Dog(); // d1をSupperAnimalクラスに変更 ここのDog()にはSupperAnimalクラスが入っている
d1.walk(); // ダダダダダッ！！
d2.walk(); // トコトコ...