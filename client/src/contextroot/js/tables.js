$(document).ready(function() {
	$('#example').DataTable({
        bSort: false,
        aoColumns: [ { sWidth: "45%" }, { sWidth: "45%" }, { sWidth: "10%", bSearchable: false, bSortable: false } ],
        "scrollY":        "200px",
        "scrollCollapse": true,
        "info":           true,
        "paging":         true
	});
} );