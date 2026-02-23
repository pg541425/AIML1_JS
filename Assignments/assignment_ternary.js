let a = 10;
let b = 12;
let c = 7;
document.write("A : "+a);
document.write("<br>");
document.write("B : "+b);
document.write("<br>");
document.write("C : "+c);
document.write("<br>");
document.write("<br>");
result=(a>=b)?((a>=c)?"A is greatest !":"C is greatest !"):((b>=c)?"B is greatest !": "C is greatest !");
document.write(result)