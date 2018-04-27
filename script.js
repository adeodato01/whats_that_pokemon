$(document).ready(function(){

    for(var i = 1; i <= 151; i++){

        var picTxt = "<img src='http://pokeapi.co/media/sprites/pokemon/" + i + ".png' id='" + i + "'>"
        $(".pokePics").append(picTxt);
    }

    $('img').on('click', function(){
        
        $(".infoBox").empty();

        var clickId = $(this).attr("id");

        $.get("http://pokeapi.co/api/v2/pokemon/"+ clickId +"/", function(res) {
                
            var name = (res.name);
            var typesArray = (res.types);
            var height = (res.height);
            var weight = (res.weight);

            var types = ""

            for(var z = 0; z < typesArray.length; z++){
                types += "<li>" + typesArray[z].type.name + "</li>"
            }

        $(".infoBox").append(
            "<h2>"+name+"</h2>"+
            "<img src='http://pokeapi.co/media/sprites/pokemon/" + clickId + ".png' id='" + clickId + "'>"+
            "<h4>Types</h4>"+
            "<ul>"+
            types +
            "</ul>"+
            "<h4>Height</h4>"+
            "<p>"+ height + "</p>"+
            "<h4>Weight</h4>"+
            "<p>"+ weight + "</p>");
        })
    })
})