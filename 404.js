//setTimeout(function(){
//    document.getElementById("404").play();
//    
//  }, 1000)

function uhoh{
    something();
}

var something = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            setTimeout(function(){
                document.getElementById("404").play();
                
              }, 1000)
        }
    };
})();