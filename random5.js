
function executar()
{

	for (i=0;i<6;i++)
		document.write(rnd() + '</br>');	
}
function rnd(min,max)
{
    var valor = Math.floor(Math.random()*60) + 1;
	return valor;   
}




  