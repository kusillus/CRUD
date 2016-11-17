$(document).ready(function(){	
	$("#t_datos").html(function(){
		$.getJSON("datos.json", function(result){
			$.each(result.datos, function(){
				var $datos= "";
				$datos = "<tr class=\"t_row\"><td>"+ this.codigo+"</td>";
				$datos += "<td>"+this.nombre+"</td>";
				$datos += "<td>"+this.alias+"</td>";
				$datos += "<td>"+this.descripcion+"</td>";
				$datos += "<td>"+this.editar+"</td>";
				$datos += "<td>"+this.estado+"</td></tr>";
				$("#t_datos").append($datos);
			});
		});
	});
});