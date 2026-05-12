<?php
    $conexion = mysqli_connect("localhost","root","","clase-php");
?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>
        

<table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido Paterno</th>
      <th scope="col">Apellido Materno</th>
    </tr>
  </thead>
  <tbody>
    <?php
        $consulta = "SELECT * FROM alumnos";
        $resultado = mysqli_query($conexion,$consulta);

        while($row=mysqli_fetch_assoc($resultado)){
            $nombre=$row["nombre"];
            $apellido_p=$row["apellido_p"];
            $apellido_m=$row["apellido_m"];
            echo "<tr>";
            echo "<td>" .$nombre. "</td>";
            echo "<td>" .$apellido_p. "</td>";
            echo "<td>" .$apellido_m. "</td>";
            echo "</tr>";

        }
    ?>

  </tbody>
</table>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  </body>
</html>