jQuery(document).ready(function() {

  var sysClient = new SystemAPI();
  sysClient.getSystemName(function(result){
	 jQuery('#project-name').text(result);
  });

  sysClient.getSystemVersion(function(result){
	  var footerObj = jQuery('#footer-version');
	  var footerText = 'Version: ' + result + ' ' + footerObj.text();
	  footerObj.text(footerText);
  });
});