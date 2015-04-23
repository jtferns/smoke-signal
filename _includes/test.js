<script>

function checkForSmoke( link ) {
  var url = $(link).text();
  var id = $(link).attr('class').split(/\s+/)[1].split('-')[1];
  $("div.panel#"+id).removeClass('panel-success panel-danger').addClass('panel-info');
  $("i.panel-status-"+id).removeClass('fa-check-circle fa-question-circle').addClass('fa-spinner fa-pulse');
  ping(url).then(function(delta) {
    $("div.panel#"+id).removeClass('panel-info').addClass('panel-success');
    $("i.panel-status-"+id).removeClass('fa-spinner fa-pulse').addClass('fa-check-circle');
  }).catch(function(error) {
    $("div.panel#"+id).removeClass('panel-info').addClass('panel-danger');
    $("i.panel-status-"+id).removeClass('fa-spinner fa-pulse').addClass('fa-question-circle');
    if (error.message === 'Timeout') {
      simpleNotify("danger", 'Server #' + id + ' timed out!');
    }
  });
  $( link ).hover(
    function() {
      TrelloClipboard.set(url);
      $(link).focus();
    }
  );
}

function checkSignals() {
  _.each($('.link'), checkForSmoke)
}

function simpleNotify(type, message) {
  $.notify({
  	// options
  	message: message
  },{
  	// settings
  	type: type,
    animate: {
  		enter: 'animated fadeInDown',
  		exit: 'animated fadeOutUp'
  	}
  });
}

$( document ).ready(function() {
  simpleNotify("info", "Quick copy links via hover and Ctrl+C!");
  checkSignals()
  setInterval(checkSignals, 600000);
  simpleNotify("info", "The list now refreshes every 10 minutes, for your convenience!");
  $(".link-1").focus();
});
</script>
