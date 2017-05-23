<?php

    $db_host="localhost";
    $db_user="root";
    $db_password="";
    $db_name="probabilidad";

        $mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
    if ($mysqli->connect_errno) {
        echo "Falló la conexión con MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    
    $subs_name = (isset($_POST['nombre']) ? $_POST['nombre'] : null);
    $subs_password =(isset($_POST['password']) ? $_POST['password'] : null);    

    if($subs_name != null){
        $insert_value = "SELECT nombre, apellido FROM registro WHERE nombre = '". $subs_name ."' AND password = '" . $subs_password. "'";
        $result = $mysqli->query($insert_value); 
        
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        printf("%s %s", $row["nombre"], $row["apellido"]);
       
        mysqli_close($mysqli);
    }

?>
