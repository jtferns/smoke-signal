<script>

function checkForSmoke( link ) {
  var url = $(link).text();
  var id = $(link).attr('class').split(/\s+/)[1].split('-')[1];
  $.ajax({
    type: "GET",
    url: url,
    headers: {
      'Content-Type': 'charset=UTF-8',
    },
    success: function(message,text,response){
      $("tr#"+id).attr('class','success');
      $("#"+id+" #status").text('up');
    },
    error: function(jqXHR, textStatus, errorThrown) {
      $("tr#"+id).attr('class','danger');
      $("#"+id+" #status").text('down?');
    }
  });
}

$( document ).ready(function() {
  _.each($('.link'), checkForSmoke)
});
</script>
