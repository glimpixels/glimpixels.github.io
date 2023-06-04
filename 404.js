//setTimeout(function(){
//    document.getElementById("404").play();
//    
//  }, 1000)
setTimeout(function(){
function uhoh(){
    something();
}
}, 1000)

function something() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
                document.getElementById("404").play();
        }
    };
};