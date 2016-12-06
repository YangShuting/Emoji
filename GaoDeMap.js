$('#Search').click(function(){
	var url = 'http://restapi.amap.com/v3/staticmap?location=116.481485,39.990464&zoom=10&size=750*300&markers=mid,,A:116.481485,39.990464&key=bedaad978d7d33d8eae30015d1c78acc';
	$.ajax({
		type: 'GET',
		url: url,
		success: function(data){
					alert(data);
		},
		error:function( jqXHR, textStatus, errorThrown ){
			alert( "Error" + errorThrown );
		}
	});
});