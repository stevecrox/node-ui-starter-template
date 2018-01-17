class SystemAPI {

  //
  constructor(protocol, hostname, port) {

	  if (typeof protocol === 'string') {
		this.url = protocol;
	  } else {
		this.url = window.location.protocol + '//';
	  }

	  if (typeof hostname === 'string') {
		this.url += hostname;
      } else {
		this.url += window.location.hostname;
      }

	  if (typeof port === 'string' || typeof port === 'number') {
		this.url += ':' + port;
	  } else {
		  port = window.location.port;
		  if (typeof port === 'string' || typeof port === 'number') {
			  this.url += ':' + port;
		  }
	  }

	  // Add
	  this.url += '/contextRoot/system';
  }

  //
  getSystemName(callback) {
	this.performRequest('/name', 'GET', 'text/plain', callback);
  }

  //
  getSystemVersion(callback) {
	this.performRequest('/version', 'GET', 'text/plain', callback);
  }

  // Method
  performRequest(path, requestType, dataType, callback) {

	  var settings = {};
	  settings.url = this.url + path;
	  settings.method = requestType;
	  settings.success = callback;

	  if ('GET' === requestType) {
		  settings.contentType = dataType;
	  }  else {
		  settings.dataType = dataType;
	  }

	  // perform the AJAX request
	  jQuery.ajax(settings);
  }
}