function func(){
    var email = document.getElementById("email").value;
    var count=0;
    while(email.charAt(count)!="@"){
        count++;
    }
    console.log(count);
    var temp=email.charAt(count + 1);
    if(temp=='n'){
        window.location.assign("weather.html")
        alert("Logged In successfully")
    }
    else{
        alert("Enter valid NITC mail ID");
        return;
    }
    
}