$(document).ready(function(){
    if (annyang) {
        console.log('annyang')
        // Let's define a command...
        var commands = {
            'stop listening': function() {
            var d = $("<div></div>").addClass("cmd").append("<i class='fa fa-fw fa-check green'></i> Stopped listening");
            $(".output").prepend(d);
            annyang.abort();
            }
        };

        // Add our command(s) to annyang...
        annyang.addCommands(commands);
        
        // Add some interface hints that annyang is or isn't listening...
        annyang.addCallback("start", function(){
            $(".mic").removeClass("not-listening").addClass("listening");
        });
        
        annyang.addCallback("end", function(){
            $(".mic").removeClass("listening").addClass("not-listening");
        });
        
        // Output any recognised text...
        annyang.addCallback("result", function(param){
            var rec = $("<div></div>").addClass("recognised").text(param[0]);
            $(".output").prepend(rec);
        });

        // Add some manual interactions
        $(".mic").on("click", function(){
            if($(this).is(".listening")) {
            annyang.abort();      
            }
        
            if($(this).is(".not-listening")) {
            annyang.start();
            }
        });
    } 
    else {
        alert("Can't start annyang :(")
    }
});