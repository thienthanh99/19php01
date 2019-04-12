var a;
//
//Quy tac dat ten bien;
/*-Co y nghia 
-bamg chu cai hoa hoac thuowng ,so va dau gach duoi
-khong bat dau bang so
-nen dat bang tueng anh
theo quy tac camel
Ex: userName, myAge,getMyInfor//
// bt : Dat ten bien cho: ten nguoi dung,email,so dien thoai ,ngay sinh//*/
var userName;
var email;
var phone;
var birthDay; 
//cac phep toan trong javasript :+,-,*,/ //
var x = 3, y = 4;
document.write('tong 2 so x + y la :');
document.write(x + y);
document.write('<br>');
//cac phep sos sanh trong javascrip:< ,> ,<= ,>= ,== ,!=
//cau dieu kien trong javascript
//if (dieukien){
	//thuc hien neu dieu kien dung
 //
document.write('<br>');
if (3 > 2) {
	document.write('so 3 lon hon so 2');

}
////cac phep sos sanh trong javascrip:< ,> ,<= ,>= ,== ,!=
//cau dieu kien trong javascript
//if (dieukien){
	//thuc hien neu dieu kien dung
	//else {
	//thuc hien neu dieu kien sai
 //
 document.write('<br>');
 var x = 5,y = 7 
 if (x > y) {
 	document.write('so x lon hon so y');
}else{
	document.write('so x nho hon hoac bang so y');
}
//if (dieukien1){
	//thuc hien neu dieu kien1 dung
	//}else if (dieu kien2) {
	//thuc hien neu dieu kien2 dung
	//} else{
		//thuc hien neu dieu kien 1 va dieu kien 2 sai
	//}
	document.write('<br>');
	var x = 5 ,y = 5
	if (x > y){
		document.write('so x lon hon y');
	}else if (x < y) {
		document.write('so x nho hon so y');
	}
	

//cau lenh switch case
document.write('<br>')
var x = 3;
switch (x){
	case 2:
		document.write('hom nay la thu hai');
	break;
	case 3:
		document.write('hom nay la thu 3');
	break;
	case 4:
		document.write('hom nay la thu 4');
	break;
	case 5:
		document.write('hom nay la thu 5');
	break;
	case 6:
		document.write('hom nay la thu 6');
	break;
	default:
		document.write('day khong phai thu trong tuan');
	break;
}
//
document.write('<br>')
var x = 3; 

switch (x) {
	case 2:
	case 3:
	case 4:
	case 5:
	case 6:
	document.write('hom nay la thu' + x);
	break;
	befault:
	document.write('day khong phai ngay trong tuan');
	break;
}
//
