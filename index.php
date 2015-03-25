<?php require('content/load.php'); ?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="description" content="salernos">
		<title>Salerno's Pizza</title>
		<link rel="stylesheet" type="text/css" href="css/load.css">
		<script type="text/javascript" src="bower/respond/dest/respond.min.js"></script>
		<script type="text/javascript" src="bower/sizzle/dist/sizzle.min.js"></script>
		<script type="text/javascript" src="bower/html5shiv/dist/html5shiv.min.js"></script>		
	</head>
	<body>
		<?php
			require('views/header.php');
			if(isset($_GET['pageName'])){
				require('views/'.$_GET['pageName'].'.php');
			}else{
				require('views/home.php');
			}
			require('views/footer.php');
		?>
		<script type="text/javascript" src="bower/jquery/dist/jquery.min.js"></script>
		<script type="text/javascript" src="bower/js-slider/js/slider.min.js"></script>
		<script type="text/javascript" src="js/home/main_slider.js"></script>
	</body>
</html>