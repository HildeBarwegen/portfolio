$(document).click(function(){

	currentMousePosX = event.pageX;
    currentMousePosY = event.pageY;

    $('<img class="click" src="../iconz/click.gif" />').css({'top' : currentMousePosY, 'left' : currentMousePosX }).appendTo('body');
    

});