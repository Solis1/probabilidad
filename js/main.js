
$(document).ready(function () {
    
    console.log(localStorage.getItem("login"));
    if(localStorage.getItem("login") != null){
        
        $(".buttonLoginModal").text(localStorage.getItem("login"));
        
    }
    
//  Inicio JS para registro_exitoso.html
    $("registro_exitoso.html, registro_fallido").ready(function(){
        setInterval(rotate,750);
    });
//  Fin JS para registro_exitoso.html
    /*Inicio JS para Datos Agrupados*/
    
    $(document).on("click", ".buttonLoginModal, #crux, #cancel", function(){
        
        $("#id01").toggleClass("closeModal open");
        
    });
    
    // Get the modal
    var modal = document.getElementById('id01');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $(".dropdown").hide();
    var arr_data = [];
    var elem_iniciales, elem_cuerpo;
    $("textarea").focus();
    $(document).on("click", "#createTable", function () {

        if ($("textarea").val() != "") {

            $("tbody, tfoot").empty();

            var data = $("textarea").val().split(",");
            arr_data = ordenar(data);

            elem_iniciales = elementos_iniciales(arr_data);

            elem_cuerpo = elementos_cuerpo(elem_iniciales, arr_data);

            for (var i = 0; i < elem_cuerpo.length; i++) {
                $("tbody").append("<tr><td>" + elem_cuerpo[i].intervalo[0] + "-" + elem_cuerpo[i].intervalo[1] + "</td><td>" + elem_cuerpo[i].frecuencia + "</td><td>" + elem_cuerpo[i].marca_clase + "</td><td>" + elem_cuerpo[i].frecuencia_rel + "</td><td>" + elem_cuerpo[i].frecuencia_absol + "</td></tr>");
            }

            $(".dropdown").fadeIn("fast");

        }
    });

    $(document).on("click", ".formula", function () {

        var formula = $(this).text();
        var mediaF = media(elem_cuerpo, arr_data);
        switch (formula) {
            case "Media":
                $("tfoot").append("<tr><td style='text-align: left' colspan='5'>Media= " + mediaF + "</td></tr>");
                break;
            case "Mediana":
                $("tfoot").append("<tr><td style='text-align: left' colspan='5'>Mediana= " + mediana(elem_cuerpo, arr_data, elem_iniciales) + "</td></tr>");
                break;
            case "Moda":
                $("tfoot").append("<tr><td style='text-align: left' colspan='5'>Moda= " + moda(elem_cuerpo, elem_iniciales) + "</td></tr>");
                break;
            case "Varianza":
                $("tfoot").append("<tr><td style='text-align: left' colspan='5'>Varianza= " + varianza(elem_cuerpo, arr_data, mediaF) + "</td></tr>");
                break;
            case "Desviacion Estandar":
                $("tfoot").append("<tr><td style='text-align: left' colspan='5'>Desviacion Estandar= " + Math.pow(varianza(elem_cuerpo, arr_data, mediaF), 0.5) + "</td></tr>");
                break;

        }
    });


    /*Fin JS para Datos Agrupados*/
    /*Inicio JS para combinacion.html*/

    $(document).on("click", "#calcular-combinacion", function () {

        var n_elem = $("input[placeholder='n-elementos']").val();
        var r_elem = $("input[placeholder='r-elementos']").val();
        var combinacion;

        combinacion = factorial(n_elem) / (factorial(r_elem) * factorial(n_elem - r_elem));

        $("#result").text("Resultado= " + combinacion).fadeIn("slow");
        $("input[placeholder='n-elementos'], input[placeholder='r-elementos']").val("");

    });


    /*Fin JS para combinacion.html*/
    /*Inicio JS para la permutacion.html*/
    $(document).on("click", "#calcular-permutacion", function () {

        var option = $("#options option:selected").text();
        var n_elem = $("input[placeholder='n-elementos']").val();
        var permutacion;

        switch (option) {
            case "Permutacion":
                var r_elem = $("input[placeholder='r-elementos']").val();

                permutacion = factorial(n_elem) / factorial(n_elem - r_elem);

                $("#result").text("Resultado= " + permutacion).fadeIn("slow");
                $("input[placeholder='n-elementos'], input[placeholder='r-elementos']").val("");
                break;
            case "Permutacion Circular":
                permutacion = factorial(n_elem - 1);
                $("#result").text("Resultado= " + permutacion).fadeIn("slow");
                $("input[placeholder='n-elementos']']").val("");
                break;
            case "Permutacion Repetida":
                var grupo_r = $("input[placeholder='r1,r2,r3,...rN']").val();
                var array_r = grupo_r.split(",");
                var acum = factorial(array_r[0]);

                for (var i = 1; i < array_r.length; i++) {
                    acum *= factorial(array_r[i]);
                }

                permutacion = factorial(n_elem) / acum;

                $("#result").text("Resultado= " + permutacion).fadeIn("slow");
                $("input[placeholder='r1,r2,r3,...rN']").val("");
                break;

        }


    });


    $("#options").change(function (opt) {

        $("#elements").empty();

        var option = $("#options option:selected").text();

        switch (option) {

            case "Permutacion":
                $("div#elements").removeClass("elements");
                $("div#elements").addClass("no-elements");
                $("#elements").append("<input type='number' placeholder='n-elementos' class='element'></input>");
                $("#elements").append("<span class='letter'>P</span>");
                $("#elements").append("<input type='number' placeholder='r-elementos' class='element'></input>");
                break;
            case "Permutacion Circular":
                $("div#elements").addClass("elements");
                $("div#elements").removeClass("no-elements");
                $("#elements").append("<input type='number' placeholder='n-elementos' class='element'></input>")
                $("#elements").append("<span class='letter'>Pc</span>");
                break;
            case "Permutacion Repetida":
                $("div#elements").removeClass("elements");
                $("div#elements").addClass("no-elements");
                $("#elements").append("<input type='number' placeholder='n-elementos' class='element'></input>");
                $("#elements").append("<span class='letter'>Pr</span>");
                $("#elements").append("<input type='text' placeholder='r1,r2,r3,...rN' class='element' step='any'></input>");
        }

    });
    /*fin de JS para permutacion.html*/
    /*Inicio de JS para index.html*/
    
    $(document).on("click", "#loginbtn", function(){
        
        console.log("YA ENTRO");
    
        $.ajax({
            url: "php/loginDB.php",
            method: "POST",
            data: {"nombre" : $("input[name='nombre']").val(), 
                   "password" : $("input[name='password']").val()}
        }).fail(function(){
            console.log("NOTHING GOOD");  
        }).done(function(data){
            $(".buttonLoginModal").text(data);
            localStorage.setItem("login", data)
        }).always(function(){
            $(".modalLogin").fadeOut("fast");
        });
        
        
    });
    
    $("#closeModal").click(function () {
        $("#arrow").css("width", "6%");
    });

    $("#riseModal").click(function () {
        $("#loading, #window").fadeOut("slow");
    });

    $("#loading").mouseenter(function () {
        $("#window").animate({
            width: "600px"
        }, "fast");
    });
    $("#loading").mouseleave(function () {
        $("#window").animate({
            width: "0px"
        }, "fast");
    });

    $("#navbar").click(function () {
        $("#mySidenav").animate({
            width: "250px"
        }, "fast", function () {
            $("#page").animate({
                marginLeft: "250px",
                opacity: "0.4"
            }, "fast", function () {
                $("#arrow").css("width", "0%");
            });
        });

    })
    $(".closebtn").click(function () {
        $("#mySidenav").animate({
            width: "0px"
        }, "fast", function () {
            $("#page").animate({
                marginLeft: "0px",
                opacity: 1
            }, "fast");
        });
    });
    setInterval(rotate, 1000);
    /*Fin JS para index.html*/
});

function rotate() {
    $("#arrow").toggleClass("rotate-up rotate-down");
}

function factorial(n) {

    if (n == 0) {

        return 1;

    }

    return n * (factorial(n - 1));

}

function ordenar(arr) {

    var aux;

    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1; j++) {

            if (arr[j] > arr[j + 1]) {

                aux = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = aux;

            }
        }
    }

    return arr;

}

function elementos_iniciales(arr) {
    console.log(arr);
    var iniciales = {
        rango: 0,
        num_intervalo: 0,
        ancho_intervalo: 0
    };

    iniciales.rango = arr[arr.length - 1] - arr[0];
    iniciales.num_intervalo = Math.ceil(1 + (3.32 * Math.log10(arr.length)));
    iniciales.ancho_intervalo = Math.ceil(iniciales.rango / iniciales.num_intervalo);


    return iniciales;

}

function elementos_cuerpo(obj, arr) {

    var cuerpo = [];
    var elem = parseFloat(arr[0]);
    var frecuencia = [];
    var frecuencia_abs;
    for (var i = 0; i < obj.num_intervalo; i++) {
        frecuencia[i] = contar_elementos(elem, elem + obj.ancho_intervalo - 1, arr);

        if (i == 0) {
            frecuencia_abs = frecuencia[i];
        } else {
            frecuencia_abs += frecuencia[i];
        }

        cuerpo.push({
            "intervalo": [elem, elem + obj.ancho_intervalo - 1],
            "frecuencia": frecuencia[i],
            "marca_clase": (elem + (elem, elem + obj.ancho_intervalo - 1)) / 2,
            "frecuencia_rel": frecuencia[i] / arr.length,
            "frecuencia_absol": frecuencia_abs
        });

        elem += obj.ancho_intervalo;
    }
    return cuerpo;
}

function contar_elementos(limite_inf, limite_sup, arr) {

    var count = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] >= limite_inf && arr[i] <= limite_sup) {
            count += 1;
        }

    }
    return count;
}

function media(elem, data) {

    var operacion = 0;

    console.log(elem);

    for (var i = 0; i < elem.length; i++) {

        operacion += parseFloat(elem[i].marca_clase) * parseFloat(elem[i].frecuencia);

    }

    return operacion / data.length;

}


function mediana(elem, data, ini) {

    var operacion = 0;
    var frec = 0;

    for (var i = 0; i < elem.length; i++) {

        frec += elem[i].frecuencia;

        if (frec > data.length / 2) {
            break;
        }
    }

    operacion = elem[i].intervalo[0] + ((((data.length / 2) - elem[i - 1].frecuencia_absol) / elem[i].frecuencia) * ini.ancho_intervalo);

    return operacion;
}

function moda(elem, ini) {

    var operacion = 0;
    var element = elem[0].frecuencia;
    var index;
    for (var i = 1; i < elem.length; i++) {

        if (element < elem[i].frecuencia) {

            element = elem[i].frecuencia;
            index = i;
        }
    }

    var dif = elem[index].frecuencia - elem[index - 1].frecuencia,
        dif2 = elem[index].frecuencia - elem[index + 1].frecuencia;

    console.log(dif);

    operacion = elem[index].intervalo[0] + ((dif / (dif + dif2)) * ini.ancho_intervalo);

    return operacion;
}

function varianza(elem, data, media) {

    var operacion = 0;

    for (var i = 0; i < elem.length; i++) {

        operacion += Math.pow(elem[i].marca_clase - media, 2) * elem[i].frecuencia;

    }

    return operacion / data.length;

}

