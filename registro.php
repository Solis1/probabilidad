<?php
    include("C:/wamp64/www/proba/php/conexionBD.php");
?>    
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://use.fontawesome.com/3df66f9a27.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-color/2.1.2/jquery.color.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>
    <!-- The Modal -->
    <div id="id01" class="modalLogin closeModal modalRegister" style="display:block; width:800px">

        <!-- Modal Content -->
        <form class="modal-content animate" action="php/conexionBD.php/" method="post">

            <h3>Login User</h3>

            <div class="containerLogin">
                <label><b>Nombre</b></label>
                <input type="text" value="" placeholder="Introduce Nombre" name="nombre" required>
                <label><b>Apellido</b></label>
                <input type="text" value="" placeholder="Introduce Apellido" name="apellido" required>
                <br/>
                <label><b>Edad</b></label>
                <input type="number" value="" placeholder="Introduce Edad" name="edad" required>
                <label><b>E-mail</b></label>
                <input type="email" value="" placeholder="Introduce e-mail" name="email" required> 
                <br/>
                <label><b>Password</b></label>
                <input type="password" value="" placeholder="Introduce Password" name="password" required>
                <button type="submit" class="buttonLogin">Registrar</button>
            </div>
            <div class="containerLogin" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn" id="cancel">Cancel</button>
            </div>
        </form>
    </div>
    <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn"><i class="fa fa-window-close" aria-hidden="true"></i></a>
        <a href="index.html">Inicio</a>
        <a href="permutacion.html">Permutaciones</a>
        <a href="combinacion.html">Combinaciones</a>
        <a href="datos_agrupados.html">Datos Agrupados</a>
    </div>
    <div id="page">
        <div id="header">
            <div id="navbar">
                <div class="menuIcon"></div>
                <div class="menuIcon"></div>
                <div class="menuIcon"></div>
            </div>
            <h1 id="title">Temas de Probabilidad</h1>
            <h2 id="author">By Ramiro Solis</h2>
        </div>
        <div class="container">
            <div class="header">

            </div>
            <div class="content" style="display:block">
                <div id="id01" class="modalLogin closeModal">
                    <span id="crux" class="close" title="<Cl></Cl>ose Modal"><i class="fa fa-window-close" aria-hidden="true"></i></span>

                    <!-- Modal Content -->
                    <form class="modal-content animate" action="php/conexionDB.php" method="post">

                        <h3>Login User</h3>

                        <div class="containerLogin">
                            <label><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" name="uname" required>
                            <br/>
                            <label><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" name="psw" required>

                            <button type="submit" class="buttonLogin">Login</button>

                        </div>

                        <div class="containerLogin" style="background-color:#f1f1f1">
                            <button type="button" class="cancelbtn" id="cancel">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <script src="js/main.js"></script>
</body>

</html>
