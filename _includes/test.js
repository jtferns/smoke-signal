<script>

function checkForSmoke( link ) {
  url = $(link).text();
  console.log("Pinging..." + url);
  $.ajax({
    type: "GET",
    url: url,
    headers: {
      'Content-Type': 'charset=UTF-8',
      'Accept': 'application/fhir+xml',
      'Content-Type': 'application/fhir+xml;charset=UTF-8'
    },
    success: function(message,text,response){
      // console.log(message);
      console.log(text);
      console.log(response);
      // console.log(url);
    }
  });
}

$( document ).ready(function() {
  // $( "p" ).text(
  //   _.map($('.link'), function(link) { return $(link).text();})
  // );
  // _.map($('.link'), function(link) { return $(link).text();});
  _.each($('.link'), checkForSmoke)
});
</script>
