window.onload=function(){
	var oSe=document.getElementById("inpt");
	var oSearch=document.getElementById("search");	
	var oInt=document.getElementById("input-2");
	oSe.onfocus=function(){
		oSe.placeholder="请输入搜索的商品";
		oInt.style.display="none";
		oSearch.style.display="block";
	};
	
	oSe.onblur=function(){
		oSe.placeholder="";
		oInt.style.display="block";
		oSearch.style.display="none";
	};
}
	

