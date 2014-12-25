function isChina(str){
	var reg = /^[u4E00-u9FA5]+$/;
	if(!reg.test(str)){
		return false;
	}
	return true;
}

function isStrLen(str,min,max){
	if(str.length<min || str.length>max){
		return false; 
	}
	return true;
}

function selectAll(){
	var obj = document.getElementsByName("idString[]"); 
	var l = obj.length;
	for( s=0;s<l;s++ ){
		obj[s].checked=true;
	}
}

function unSelectAll(){
	var obj = document.getElementsByName("idString[]"); 
	var l = obj.length;
	for( s=0;s<l;s++ ){
		obj[s].checked=false;
	}
}

function delAllow(url){
	if (confirm("您确定要删除吗?")){
		location = url;
	}
}

function deleteAll(url){
	if (confirm("您确定要删除吗?")){
		var obj = document.getElementsByName("idString[]"); 
		var l = obj.length;
		var myArray=new Array();
		for( s=0;s<l;s++ ){
			if(obj[s].checked==true){
				myArray.push(obj[s].value);
			}
		}
		url = url+myArray.join(",");
		location = url;
	}
}
