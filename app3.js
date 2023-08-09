
const min = arr => arr.reduce((x, y) => Math.min(x, y));
const max = arr => arr.reduce((x, y) => Math.max(x, y));
 
var arr = [5,3,87,1,-4,-99,0];
 
document.write("La valeur Min est :", min(arr),"<br>");
document.write("<br>La valeur Max est :", max(arr),"<br>");

  