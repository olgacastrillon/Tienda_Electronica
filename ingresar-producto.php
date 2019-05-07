<?php
// Config File
require 'config.php';

if (isset($_POST['code']) && isset($_POST['name']) && isset($_POST['brand']) && isset($_POST['price']) && isset($_POST['quantity']) ) {

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	}

	$code = $_POST ['code'];
	$name = $_POST ['name'];
	$brand = $_POST ['brand'];
	$price = $_POST ['price'];
	$quantity = $_POST ['quantity'];

	$sql = "INSERT INTO $table (code, name, brand, price, quantity)
	VALUES ('$code', '$name', '$brand', '$price', '$quantity')";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ingresar Producto |Tienda Fox electronics</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/styles.css">
</head>
<body>
	<!-- Navbar content -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	  <a class="navbar-brand" href="index.html">Tienda Fox electronics</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>
	  <div class="collapse navbar-collapse" id="navbarNavDropdown">
	    <ul class="navbar-nav">
	    	<li class="nav-item dropdown">
	    	  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	    	    Administrador
	    	  </a>
	    	  <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	    	    <a class="dropdown-item" href="create-database.php">Crear Base de Datos</a>
	    	    <a class="dropdown-item" href="create-table.php">Crear Tabla en BD</a>
	    	    <a class="dropdown-item" href="backup-database.php">Backup Base de Datos</a>
	    	  </div>
	    	</li>
	      <li class="nav-item dropdown active">
	        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Inventario
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	          <a class="dropdown-item" href="ingresar-producto.html">Ingresar Producto</a>
	          <a class="dropdown-item" href="actualizar-producto.html">Actualizar Producto</a>
	          <a class="dropdown-item" href="eliminar-producto.html">Eliminar Producto</a>
	          <a class="dropdown-item" href="consultar-producto.html">Consultar Producto</a>
	          <a class="dropdown-item" href="informe-inventario.php">Informe Inventario</a>
	        </div>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="ventas.html">Ventas</a>
	      </li>
	      <li class="nav-item dropdown">
	        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	          Utilidades
	        </a>
	        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	          <a class="dropdown-item" href="calculadora.html">Calculadora Ventas</a>
	          <a class="dropdown-item" href="calculadora-resistencias.html">Calculadora Resistencias</a>
	        </div>
	      </li>
	    </ul>
	  </div>
	</nav>

	<!-- / Navbar content -->

	<div class="container mt-4">

	  <?php 
	  		//VALUES (023, Tenis, Nike, 120000, 1)

	  		if ($conn->query($sql) === TRUE) {	  		    
	  		   	?>
	  		   	<h1><?php echo "Producto Guardado"; ?></h1>
	  		   	<p>Se guardo el producto con código: <strong><?php echo $code ?></strong> en la base de datos</p>
	  		   	<?php 
	  		} else {
	  			?>
	  			<h1><?php echo "Error: " . $sql . "<br>" . $conn->error; ?></h1>
	  			<?php	  		    
	  		}

	  		$conn->close();

	  	}
	  	else {
	  		?>
	  		<h1>Error al enviar el formulario</h1>
	  		<p>Verifique que ha completado todos los campos</p>
	  		<?php	  		
	  	}
	  ?>				 
	</div>
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
	<script src="js/main.js"></script>
</body>
</html>