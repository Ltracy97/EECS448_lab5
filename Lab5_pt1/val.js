function tovalidate(){
    var str1 = document.getElementById("pass1").value;
    var str2 = document.getElementById("pass2").value;
    var str1l = str1.length;
    var str2l = str2.length;
    if ((str1l < 8) || (str2l < 8))
    {
       window.alert( "Passwords are not 8 charcters long");
    }
    else
    {

    for(var i = 0; i < str1l; i++)
    {
        if (str1.charAt(i) != str2.charAt(i))
        {
             window.alert("Passwords entered do not match");
        }
    }
     window.alert("passwords match");
    }


}


