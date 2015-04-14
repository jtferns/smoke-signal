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
      $("#"+id+" #status").html('<i class="fa fa-lg fa-fw fa-check-circle"></i>');
    },
    error: function(jqXHR, textStatus, errorThrown) {
      $("tr#"+id).attr('class','danger');
      $("#"+id+" #status").html('<i class="fa fa-lg fa-fw fa-question-circle"></i>');
    }
  });
  $( link ).hover(
    function() {
      TrelloClipboard.set(url)
      $(link).focus()
    }
  );
}

$( document ).ready(function() {
  _.each($('.link'), checkForSmoke)
  $.notify({
  	// options
  	message: 'Quick copy links via hover and Ctrl+C!'
  },{
  	// settings
  	type: 'info',
    animate: {
  		enter: 'animated fadeInDown',
  		exit: 'animated fadeOutUp'
  	}
  });
});
</script>
