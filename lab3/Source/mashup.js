function Search() {
    var search = document.getElementById("textbox").value;
    var ts_url="https://translation.googleapis.com/language/translate/v2?q="+search+"&target=hi&key=AIzaSyCkfleD2A-9zHcVW8BS_wluHRP34jwJYys"
    var yt_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+search+"&maxResults=1&key=AIzaSyCjFaz0BORLh2cbmk_1wH_RzyO1V7eSsGI"
    fetch(yt_url).then((resp)=>resp.json()).then(data=>{
        var top = data.items[0].snippet.title;
        document.getElementById("output2").innerHTML = top;
        var topvideo = data.items[0].snippet.thumbnails.medium.url;
    document.getElementById("output3").src = topvideo ;
        console.log(topvideo)
    });
    fetch(ts_url).then((resp)=>resp.json()).then(data=>{
        var trans = data.data.translations[0].translatedText;
        document.getElementById("output1").innerHTML = trans;
    });
}



