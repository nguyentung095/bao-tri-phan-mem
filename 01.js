document.addEventListener("DOMContentLoaded", function(){
	var trangthai = 'duoi300';
	var menu = document.querySelector('.menu');
	//var menu2 = document.getElementsByClassName('menu');
	//console.log(menu2[0]);
	window.addEventListener ('scroll', function(){
		//tính vitri khi cuộn chuộc
		var vitri = window.pageYOffset;
		//console.log(vitri);
		if(vitri>300) {
			if(trangthai=='duoi300') {
				//console.log('tren 300');
				trangthai='tren300';
				menu.classList.add('menunholai');
			}	
		}
		else if(vitri<=300) {
			if(trangthai=='tren300') {
				menu.classList.remove('menunholai');
				trangthai='duoi300';
			}
			
		}
	})
}, false);