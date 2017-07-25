$(document).ready(function() {
    var url = "https://newsapi.org/v1/";
    var data = {language:"en", country:"us"};
    $.ajax({
        url: url + "sources",
        data: data,
        type: "GET",
        success: function(response) {

            var sources = response.sources;
            var html = "<select class='form-control' id='sourc'>";
            $.each(sources, function(index, source){
                html += "<option>" + source.name + "</option>"
            })
            html += "</select>";
            console.log(html)
            $(".form-group").html(html)
        }//success
    })//ajax
    var sourceSelected = $('#sourc option:selected').text();

    var newsApiKey = "d9c0cf6871d04a67bb3050ac1f2091eb"
    var articleUrl = "https://newsapi.org/v1/articles?source="+sourceSelected+"&sortBy=latest&apiKey=" + newsApiKey;

    $('#sub').click(function(event){
      event.preventDefault();
      console.log("The button was clicked.");
      $.ajax({
          url: articleUrl,
          type: 'GET',
          success: function(res){
            console.log("Success: res: ", res);
            console.log("this is sourceSelected: ",sourceSelected);
          }//success function
      });//ajax

    });

})
