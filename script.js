let darkmode = true

function changecolor(){
    if(darkmode){
        darkmode = false
        document.getElementById('container').style.backgroundColor= "hsl(0, 0%, 40%)";
        document.getElementById('box').style.backgroundColor= 'hsl(0, 0%, 10%)';
        document.getElementById("text").style.color = 'white'
        document.getElementById('btn').style.backgroundColor="hsl(212, 45%, 89%)"
        document.getElementById('btn').style.color="hsl(0, 0%, 40%)"
        document.getElementById('imgQr').src = 'Qrd.png'
        document.getElementById('btn').innerHTML= 'Light Mode'
        
    }else{
        darkmode = true
        document.getElementById('container').style.backgroundColor= "hsl(212, 45%, 89%)";
        document.getElementById('box').style.backgroundColor= 'hsl(0, 0%, 100%)';
        document.getElementById("text").style.color = 'black'
        document.getElementById('btn').style.backgroundColor="hsl(0, 0%, 40%)"
        document.getElementById('btn').style.color="hsl(212, 45%, 89%)"
        document.getElementById('imgQr').src = 'QR.png'
        document.getElementById('btn').innerHTML= 'Dark Mode'
    }



}
