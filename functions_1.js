function makeRequest(url,timeout, callback){
    timeout = (typeof timeout !== "undefined") ? timeout : 2000;
    callback = (typeof callback !== "undefined") ? callback: function(){
        return 5 + 6;
    };

    console.log(timeout);
    console.log(callback);
    console.log(url);
}

makeRequest("www.goog.come");