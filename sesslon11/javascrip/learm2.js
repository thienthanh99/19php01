//for,while,do while
for (var i = 0; i < 10; i++){
	document.write(i);
	document.write('<br>');
}
document.write('<-------------------br>');
var X = 5;
var y = 4;
X++;
y--;
document.write(X);
document.write('<br>');
document.write(y);


document.write('<br>');
document.write('<-------------------br>');
var a = 5, b = 7;
var c  ;
c = a++ + b++;
c = ++a + b++;
document.write('<br>');
document.write(c);   



document.write('<br>');
document.write('<-------------------br>');
var i = 5;
while (i<10){
	document.write(i);
	document.write('<br>');
	i++
}
document.write('<br>');
document.write('<-------------------br>');

var x=15;
do{
	document.write(i);
	document.write('<br>');
	i++
}while (i < 10);

///cho mot so chay tu 2 den 15
//kiem tra xem so do co phai la ngay trong tuan ko ?
//neu co thi in ra : hom nay la thu x
document.write('<br>');
document.write('<-------------------br>');

for (var i = 2; i <=  15; i++){
	switch (i){
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		document.write('Hom nay la thu ' + i);
		document.write('<br>');
		break;
		case 8:
		document.write('Hom nay la chu nhat');
		document.write('<br>');
		break;
		default:
		document.write('So nay ko phai ngay trong tuan ');
		document.write('<br>');
		break;

	}
}


///ham trong javascrip
function myFunction(){
	var a = 5, b = 6;
	document.write(a + b);
}
document.write('<br>');
myFunction();



function sub(x, y){
	document.write(x + y);
}
	document.write('<br>');
	sub(6, 7);
	document.write('<br>');
	sub(9, 6);


/// Chon mot day so n chay tu 0 den 10
// voi n la so nam kinh nghiem
//tinh luong thuc nhan voi 
//luong co ban la 2.300.000
// So nam kinh nghiem < 3 thi he so luong la 2
// So nam kinh nghiem < 5 thi he so luong la 3
// So nam kinh nghiem = 5 thi he so luong la 4
//So nam kinh nghiem >5 thi he so luong la 5

//ex: Luonh thuc= luong co ban  x he so luong

//Su dung: Function,If else,for hoac while
var lcb = 2300000;
for (var n = 0; n <= 10; n++){
	if ( n < 3){
		luongThucNhan ( lcb, 2);
		document.write('<br>');
	}
	else if (n < 5) {
		luongThucNhan(lcb, 3);
		document.write('<br');

	}else if (n = 5) {
		luongThucNhan(lcb, 4);
		document.write('<br');

	}
	else  {
		luongThucNhan(lcb, 5);
		document.write('<br');

	}
}
function luongThucNhan(lcb, hsl){
	document.write(lbc * hsl);
}

/*	switch(n){
		case 0:
		case 1:
		case 2:
		document.write('he so luong la 2');
		document.write('<br>');
		break;
		case 3:
		case 4:
		document.write('he so luong la 3');
		document.write('<br>');
		break
		case 5:
		document.write('he so luong la 4');
		document.write('<br>');
		default:
		document.write('he so luong la 5');
		document.write('<br>');
		break;
	}*/

