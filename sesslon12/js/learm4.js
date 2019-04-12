var myText1 = "The los angeles";
var myText2 = "The los angeles  daily";
var a = 5;

console.log(typeof myText1);
console.log(typeof a);
console.log(typeof myText2);

//
var myText1Length = myText1.length;
document.write("myText1 dai " + myText1Length + "ky tu");

document.write('<br>');

var myText2Length = myText2.length;
document.write("myText1 dai " + myText2Length + "ky tu");

//kiem tra ki tu co trong chuoi string ko
var aCharInMyText1 = myText1.indexOf('e');
console.log(aCharInMyText1);

var aCharLastInMyText1 = myText1.lastIndexOf('e');
console.log(aCharLastInMyText1);

// thay the mot ky tu hoac chuoi ky tu trongchuoi string
var replaceCity = myText1.replace('los angeles', 'Da Nang');
document.write('<br>');
document.write(replaceCity);

//cat ky tu hoac chuoi ky tu trong string
var cutStringMyText1 = myText1.substring(4,15);
document.write('<br>');
document.write(cutStringMyText1);

var cutStringLengthMyText1 = myText1.substr(4,15);
document.write('<br>');
document.write(cutStringLengthMyText1);

//viet hoa tAT ca chu cai trong chuoi string
var upperCaseText1 = myText1.toUpperCase();
document.write('<br>');
document.write(upperCaseText1);

//viet thuong tAT ca chu cai trong chuoi string
var lowerCaseText1 = myText1.toLowerCase();
document.write('<br>');
document.write(lowerCaseText1);


//dat mot bien la ten du bat ky duoc truyen vao tu ham
//Ví du: function myName (name){}
 
//ex:myName('Tran Ngo Thien Thanh')
/*
1.tach ho, ten dem, ten cua nguoi do ra
ex: ho:tran ngo, ten dem: thien, ten:thanh
2.kiem tra trong ten do co chu n ko 
3.neu co chu n thi dem xem co bao nhieu chu n
4.viet hoa ten nguoi do len
5.thay the ten dem cua nguoi do thanh:19php1
*/


	var myName = "Tran Ngo Thien Thanh";

	var cutStringMyName = myName.substring(0,9);
	document.write('<br>');
	document.write('<ho:>');
	document.write(cutStringMyName);


	var cutStringLengthMyName = myName.substring(9,14);
	document.write('<br>');
	document.write('<ten dem:>');
	document.write(cutStringLengthMyName);

	var cutStringLengthMyName = myName.substring(14,20);
	document.write('<br>');
	document.write('<ten :>');
	document.write(cutStringLengthMyName);


	var aCharInMyName = myName.indexOf('n');
	console.log(aCharInMyName);
	
