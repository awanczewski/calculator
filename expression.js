var czyMogeOperator = true;
var czyMogeKropke = true; 
var iloscKropek = 0;
function wyswietl(num)
{
	if(((num == "+" || num == "-" || num == "*" || num == "/"  || num == "//" || num == "%") && !czyMogeOperator) || (num == "." && !czyMogeKropke))
	{
	}
	else if(document.getElementById("wyswietlacz").innerHTML == '0')
	{
		if(num == '.')
		{
		document.getElementById("wyswietlacz").innerHTML = '0.';
		czyMogeKropke = false;
		iloscKropek = iloscKropek + 1;
		}
		else
		{
		document.getElementById("wyswietlacz").innerHTML = num;
		}
	}
	else
	{
		document.getElementById("wyswietlacz").innerHTML += num;
		if(num == "+" || num == "-" || num == "*" || num == "/" || num == "//" || num == "%")
		{
		czyMogeOperator = false;
		}
		else if(iloscKropek == 0 && !czyMogeOperator && num == ".")
		{
		czyMogeKropke = false;
		}
		else if(num == ".")
		{
		iloscKropek = iloscKropek + 1;
		czyMogeKropke = false;
		}
		else if(!isNaN(num) && !czyMogeOperator && iloscKropek == 1)
		{
		czyMogeKropke = true;
		}
	}
	
	if(document.getElementById("wyswietlacz").innerHTML == "/"
	|| document.getElementById("wyswietlacz").innerHTML == "//"
	|| document.getElementById("wyswietlacz").innerHTML == "%"
	|| document.getElementById("wyswietlacz").innerHTML == "*"
	|| document.getElementById("wyswietlacz").innerHTML == "+"
	|| document.getElementById("wyswietlacz").innerHTML == ".")
	{
		if(document.getElementById("wyswietlacz").innerHTML == ".")
		{
			czyMogeKropke = true;
			iloscKropek = 0;
		}
		else
		{
		czyMogeOperator = true;
		}
		document.getElementById("wyswietlacz").innerHTML = "";
	}
														 
}
function wyczysc()
{
	document.getElementById("wyswietlacz").innerHTML = "";
	czyMogeOperator = true;
	czyMogeKropke = true;
	iloscKropek = 0;
}
function wykonaj()
{
	if(document.getElementById("wyswietlacz").innerHTML.includes("//0") || document.getElementById("wyswietlacz").innerHTML.includes("/0"))
	{	
		alert("NIE DZIEL PRZEZ ZERO");
	}
	else
	{
		if(document.getElementById("wyswietlacz").innerHTML.includes("//"))
		{
			var x = document.getElementById("wyswietlacz").innerHTML.replace("//", "/");
			if(eval(x) < 0)
			{
			var wynik = Math.ceil(eval(x));
			}
			else
			{
			var wynik = Math.floor(eval(x));
			}
			document.getElementById("wyswietlacz").innerHTML = wynik;
			czyMogeOperator = true;
			czyMogeKropke = true;
		}
		else
		{
			var wynik = eval(document.getElementById("wyswietlacz").innerHTML)
			document.getElementById("wyswietlacz").innerHTML = wynik;
			czyMogeOperator = true;
			czyMogeKropke = true;
		}
	}
}
function pierwiastkuj()
{
	if(document.getElementById("wyswietlacz").innerHTML == "")
	{
		alert("NIE MOZNA WYKONAC PIERWIASTKOWANIA Z NICZEGO");
	}
	else
	{
		var wynik = Math.sqrt(eval(document.getElementById("wyswietlacz").innerHTML));
		document.getElementById("wyswietlacz").innerHTML = wynik;
		czyMogeOperator = true;
	}
}
function poteguj()
{
	var x = document.getElementById("wyswietlacz").innerHTML;
	document.getElementById("wyswietlacz").innerHTML = eval(x*x);
}
function wykonajTryg(x)
{
	if(document.getElementById("wyswietlacz").innerHTML == "")
	{
		alert("NIE MOZNA WYKONAC FUNKCJI TRYGONOMETRYCZNEJ Z NICZEGO");
	}
	else
	{
		if(x == "sin")
		{
		var wynik = Math.sin(eval(document.getElementById("wyswietlacz").innerHTML));
		}
		else if(x == "cos")
		{
		var wynik = Math.cos(eval(document.getElementById("wyswietlacz").innerHTML));
		}
		else if(x == "ctg")
		{
		var wynik = 1 / Math.tan(eval(document.getElementById("wyswietlacz").innerHTML));
		}
		else if(x == "tg")
		{
		var wynik = Math.tan(eval(document.getElementById("wyswietlacz").innerHTML));
		}
		document.getElementById("wyswietlacz").innerHTML = wynik;
		czyMogeOperator = true;
	}
}
function uzyjKomorki(n)
{
	if(document.getElementById("kom" + n).innerHTML == '#' && czyMogeOperator)
	{
		if(document.getElementById("wyswietlacz").innerHTML == "")
		{
		}
		else
		{
		document.getElementById("kom" + n).innerHTML = document.getElementById("wyswietlacz").innerHTML;
		wyczysc();
		}
	}
	else if(!czyMogeOperator && document.getElementById("kom" + n).innerHTML == '#')
	{
	}
	else
	{
		wyswietl(document.getElementById("kom" + n).innerHTML);
		document.getElementById("kom" + n).innerHTML = '#'
	}
}
