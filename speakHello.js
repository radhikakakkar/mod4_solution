
(function(window){
    // console.log("hi");
    var helloSpeaker = {};
    var speakWord = "Hello";
    
    helloSpeaker.speak = function(name) {
        //  console.log("hi");
        console.log(speakWord + " " + name);
    }

    window.helloSpeaker = helloSpeaker;


    
})(window);