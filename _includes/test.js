<script>

function checkForSmoke( link ) {
  var url = $(link).text();
  var id = $(link).attr('class').split(/\s+/)[1].split('-')[1];
  ping(url).then(function(delta) {
    $("tr#"+id).attr('class','success');
    $("#"+id+" #status").html('<i class="fa fa-lg fa-fw fa-check-circle"></i>');
  }).catch(function(error) {
    $("tr#"+id).attr('class','danger');
    $("#"+id+" #status").html('<i class="fa fa-lg fa-fw fa-question-circle"></i>');
    if (error.message === 'Timeout') {
      $.notify({
      	// options
      	message: 'Server #' + id + ' timed out!'
      },{
      	// settings
      	type: 'danger',
        animate: {
      		enter: 'animated fadeInDown',
      		exit: 'animated fadeOutUp'
      	}
      });
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
