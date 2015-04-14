<script>
// Borrowed from http://stackoverflow.com/a/28005851
var TrelloClipboard;

TrelloClipboard = new ((function () {
    function _Class() {
        this.value = "";
        $(document).keydown((function (_this) {
            return function (e) {
                var _ref, _ref1;
                if (!_this.value || !(e.ctrlKey || e.metaKey)) {
                    return;
                }
                if ($(e.target).is("input:visible,textarea:visible")) {
                    return;
                }
                if (typeof window.getSelection === "function" ? (_ref = window.getSelection()) != null ? _ref.toString() : void 0 : void 0) {
                    return;
                }
                if ((_ref1 = document.selection) != null ? _ref1.createRange().text : void 0) {
                    return;
                }
                return $.Deferred(function () {
                    var $clipboardContainer;
                    $clipboardContainer = $("#clipboard-container");
                    $clipboardContainer.empty().show();
                    return $("<textarea id='clipboard'></textarea>").val(_this.value).appendTo($clipboardContainer).focus().select();
                });
            };
        })(this));
        $(document).keyup(function (e) {
            if ($(e.target).is("#clipboard")) {
                return $("#clipboard-container").empty().hide();
            }
        });
    }

    _Class.prototype.set = function (value) {
        this.value = value;
    };

    return _Class;

})());
</script>
