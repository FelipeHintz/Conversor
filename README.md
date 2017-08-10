<html>
	<head>
		<script src="Conversor.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Oleo+Script:400,700" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Teko:400,700" rel="stylesheet">
		<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<link href="style.css" rel="stylesheet">
		<meta charset="UTF-8">
	</head>
	<body>
		<section id="contact">
			<div class="section-content">
				<h1 class="section-header"><span class="content-header wow fadeIn " data-wow-delay="10s" data-wow-duration="2s">Conversor Binario - Decimal</span></h1>

			</div>
			<div class="contact-section">
			<div class="container">
				<form>
					<div class="col-md-6 col-xs-6 form-line">
			  			<div class="form-group">
			  				<label for="Label0">Valor</label>
					    	<input id="Input0" type="text" class="form-control" id="" placeholder=" Valor" onkeyup="conversor.Decimal_Binario()">
				  		</div>
						<div class="form-group">
			  				<label for="Decimal">Base</label>
					    	<select type="text" class="form-control" id="Select">
								<option value="Decimal" selected>Decimal</option>
								<option value="Binario">Binario</option>
								<option value="Hexadecimal">Hexadecimal</option>
								<option value="Octal">Octal</option>
							</select>
				  		</div>
			  		</div>
			  		<div class="col-md-6 col-xs-6">
			  			<div class="form-group">
			  				<label for="Label1">#</label>
					    	<input id="Input1" type="text" class="form-control" id="" placeholder=" Valor">
				  		</div>
						<div class="form-group">
			  				<label for="Label2">#</label>
					    	<input id="Input2" type="text" class="form-control" id="" placeholder=" Valor">
				  		</div>
						<div class="form-group">
			  				<label for="Label3">#</label>
					    	<input id="Input3" type="text" class="form-control" id="" placeholder=" Valor" onkeyup="conversor.Binario_Decimal()">
				  		</div>
					</div>
				</form>
			</div>
		</section>
	</body>
</html>
