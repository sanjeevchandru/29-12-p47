document.write("6.a given year is a leap year in the Gregorian calendar."+"<br>");
function test6(year){
    if((year%4==0 && year%100!=0)||(year%100==0 && year%400==0)){
        return "leap year";
    }
    return "Not leap year";
}
document.write("this year : 2023"+"<br>")
document.write(test6(2023)+"<br><br>");