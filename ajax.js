function getPage(page){
	var xHttpReq = new XMLHttpRequest();
	xHttpReq.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('viewer').innerHTML = this.responseText;
			}
	}
		xHttpReq.open('GET', page,true);
		xHttpReq.send();
}
function getPage1(page){
	var xHttpReq = new XMLHttpRequest();
	xHttpReq.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('wrapper').innerHTML = this.responseText;
			}
	}
		xHttpReq.open('GET', page,true);
		xHttpReq.send();
}