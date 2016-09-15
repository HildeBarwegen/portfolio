var icon = $('link[rel="icon"]');
var i = 1;

window.setInterval('setIcon()', 400);	

function setIcon(){
	icon.attr('href', '../iconz/' + i + '.ico');		
	if(i == 28){
		i = 1;
	} else {
		i++;
	}
}