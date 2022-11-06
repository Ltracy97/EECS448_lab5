function myColour() {
    var par = document.getElementById('id1');

    var red = document.getElementById('red').value;
  
    var green = document.getElementById('green').value;
  
    var blue = document.getElementById('blue').value;
    
    var width = document.getElementById('width').value;

    var r = document.getElementById('r').value;
    
    var g = document.getElementById('g').value;

    var b = document.getElementById('b').value;
    
    if((red === '' | r === '') | (blue === '' | b === '') | (green === '' | g === '') | width === '')
    {
        window.alert("please enter a value");
    }

    if((red < 0 | red > 255) | (blue < 0 | blue > 255) | (green < 0 | green > 255))
    {
        window.alert("one of the values you entered are not with in range (border values)")
    }
    if((r < 0 | r > 255) | (b < 0 | b > 255) | (g < 0 | g > 255))
    {
        window.alert("one of the values you entered are not with in range (background values)")
    }
    else
    {
    var color1 = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    var color2 = 'rgb('+ r + ',' + g + ',' + b + ')';
    
    par.style.borderColor = color1;
    par.style.borderWidth = width +'px';
    par.style.backgroundColor = color2;
    
    }
}
    