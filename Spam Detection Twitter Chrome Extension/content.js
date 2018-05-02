
var script = document.createElement('script');
 
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
document.getElementsByTagName('head')[0].appendChild(script);  
window.ondblclick = function() {myFunction()};
function myFunction() {
var images = document.getElementsByClassName("TweetTextSize");
var tweets = [];
for (var i = 0, l = images.length; i < l; i++) {
    console.log(images[i].innerText)
    tweets[i] = images[i].innerText
}
var xhr = new XMLHttpRequest();
url = "https://warm-mountain-96885.herokuapp.com/receivejson"
xhr.open("POST", url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.send(JSON.stringify(tweets));
xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && this.status == 200) {
        receivedContent = JSON.parse(this.responseText);
        console.log(receivedContent.result);
        for (var i = 0, l = images.length; i < l; i++) {
            if(receivedContent.result[i] == "1"){
                images[i].style.color = "red";
            }
            else if (receivedContent.result[i] =="0"){
                images[i].style.color = "green";
            }
      }
};
}
}
