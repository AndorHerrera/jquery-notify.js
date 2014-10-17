/**
 * jquery-notify.js
 *
 * required:
 *  - jquery
 *  - bootstrap 3
 */
;(function($) {

	$.notify = function(el, options) {

		var defaults = {
			element: '<div class="alert alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><div class="alert-content"></div></div>',
			showBefore: null
		};

		var notify = this;

		notify.settings = {};

		var init = function() {
			notify.settings = $.extend({}, defaults, options);
			notify._type = null;

			if ($(el).length === 0) {
				notify.alert = $(notify.settings.element).attr('id', el.replace('#',''));
			} else {
				notify.alert = $(el);
			}
			notify.alert.hide();

			if (notify.settings.showBefore) {
				$(notify.settings.showBefore).before(notify.alert);
			} else {
				//$(body).
			}
		};

		notify.display = function(type, message) {
			console.log('display: ' + type + ', ' + message);
			// remove existing alert class, if exists
			if (notify._type) {
				notify.alert.removeClass('alert-' + notify._type);
			}

			// add alert class
			notify.alert.addClass('alert-' + type);
			notify._type = type;

			// set alert message content
			notify.alert.find('.alert-content').html(message);

			//notify.alert.show();
			notify.alert.show().delay(3000).slideUp();
		};

		notify.info = function(message) {
			notify.display('info', message);
		};

		notify.success = function(message) {
			notify.display('success', message);
		};

		notify.warning = function(message) {
			notify.display('warning', message);
		};

		notify.error = function(message) {
			notify.display('danger', message);
		};

		notify.show = function() {
			notify.alert.show();
		};

		notify.hide = function() {
			notify.alert.hide();
		};

		notify.clear = function() {
			notify.alert.find('.alert-content').html('');
			notify.hide();
		};

		notify.setError = function($elem, errors) {
			$elem.parents('div.form-group').addClass('has-error');
			$.each(errors, function(idx, error) {
				$elem.addClass('border-danger');
				$elem.parent().append('<span class="help-block">'+error.message+'</span>');
				//console.log($elem.attr('name'), error.message);
			});
		};

		notify.clearError = function($elem) {
			// remove error highlight
			$elem.parents('div.form-group').removeClass('has-error');
			$elem.removeClass('border-danger');
			$elem.parent().find('span.help-block').remove();
		};

		init();
	};
})(jQuery);
