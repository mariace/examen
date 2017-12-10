function getPage(page){
	var xHttpReq = new XMLHttpRequest();
	xHttpReq.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.getElementById('main').innerHTML = this.responseText;
			}
	}
		xHttpReq.open('GET', page,true);
		xHttpReq.send();
}