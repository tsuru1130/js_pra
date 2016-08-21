<div onmousever="changeStyle(this,'highlight')" onmousemove="changeStyle(this, 'normal')">マウスを載せると色が変わる</div>

function changeStyle( elem, clazz ){
	// jQueryでいうaddClassみたいなもの
        elem.className = clazz;
}

.highlight{
    background-color : #abc000;
}
.normal{
    background-color : #fff;
}