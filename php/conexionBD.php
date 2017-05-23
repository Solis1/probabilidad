<?php
$db_host="localhost";
$db_user="root";
$db_password="";
$db_name="probabilidad";
$db_table_name="registro";

    $mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
if ($mysqli->connect_errno) {
    echo "Falló la conexión con MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}

$subs_name = (isset($_POST['nombre']) ? $_POST['nombre'] : null);
$subs_last = (isset($_POST['apellido']) ? $_POST['apellido'] : null);
$subs_edad = (isset($_POST['edad']) ? $_POST['edad'] : null);
$subs_email =(isset($_POST['email']) ? $_POST['email'] : null);
$subs_password =(isset($_POST['password']) ? $_POST['password'] : null);

	$insert_value = "INSERT INTO " . $db_name . "." . $db_table_name ." VALUES('', '" . $subs_name . "', '" . $subs_last . "', '" . $subs_edad . "', '" . $subs_email . "', '". $subs_password ."')";
    
    if($subs_name != null){
        $result = $mysqli->query($insert_value);    
        if($result == true && $subs_name != null){
        header("Location: /proba/registro_exitoso.html");
    }elseif($subs_name != null){
        header("Location: /proba/registro_fallido.html");
    }
    }
    
    
		
?>
