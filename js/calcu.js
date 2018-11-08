
var p = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector("#operaciones"),
    cantidadsignos: false,
    cantidaddecimal: false,
    resultado: false,

}

var m = {

    inicio: () => {

        for (var i = 0; i < p.teclas.length; i++) {

            p.teclas[i].addEventListener("click", m.oprimir_tecla);
        }
    },

    oprimir_tecla: (tecla) => {


        p.accion = tecla.target.getAttribute("class");
        p.digito = tecla.target.innerHTML;
        console.log(p.digito)
        m.calculadora(p.accion, p.digito);
    },

    calculadora: (accion, digito) => {

        //========================================//
        /*==================switch================*/
        //=========================================//

        switch (accion) {
            
            //=================================================================
            case "numero":

                if (p.cantidadsignos) {

                    p.cantidaddecimal = false
                }

                p.cantidadsignos = false;

                if (p.operaciones.innerHTML == 0) {

                    p.operaciones.innerHTML = digito

                } else {

                    if (p.resultado) {

                        p.operaciones.innerHTML = digito
                        p.resultado = false;

                    } else {
                        p.operaciones.innerHTML += digito

                    }
                }
                break;
            //====================================================================
            case "signo":


                p.cantidaddecimal = true

                if (!p.cantidadsignos) {

                    if (p.operaciones.innerHTML != 0) {

                        p.operaciones.innerHTML += digito
                        p.cantidadsignos = true;
                        p.resultado = false;


                    } else {

                        p.operaciones.innerHTML = "Error";
                        setTimeout(() => {
                            p.operaciones.innerHTML = 0
                            p.cantidadsignos = false;
                        }, 3000);
                    }
                }
                break;
            //==================================================================================
            case "igual":

                p.operaciones.innerHTML = eval(p.operaciones.innerHTML);
                p.resultado = true;

                console.log(Math.floor(operaciones.innerHTML));
                if (operaciones.innerHTML != Math.floor(operaciones.innerHTML)) {

                    p.cantidaddecimal = true;
                } else {
                    p.cantidaddecimal = false;

                }

                break;
            //=================================================================================
            case "decimal":

                if (!p.cantidaddecimal) {
                    p.cantidadsignos = false;
                    p.operaciones.innerHTML += digito;
                    p.cantidaddecimal = true;
                    p.resultado = false;


                }

                break;

            //=================================================================================
        }

    },

    Borrarcal: () => {

        p.operaciones.innerHTML = 0;
        p.cantidaddecimal = false;
        p.resultado = false;
        cantidadsignos = false;
    },

    teclado: () => {

        document.addEventListener("keydown", m.oprimir)
    },

    oprimir: (tecla) => {

        console.log("teclas:", tecla.keyCode);

        //========================================//
        /*==================Numeros================*/
        //=========================================//

        if (tecla.keyCode == 96 || tecla.keyCode == 48) {

            p.digito = 0;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);

        }
        if (tecla.keyCode == 97 || tecla.keyCode == 49) {

            p.digito = 1;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);

        }
        if (tecla.keyCode == 98 || tecla.keyCode == 50) {

            p.digito = 2;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 99 || tecla.keyCode == 51) {

            p.digito = 3;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 100 || tecla.keyCode == 52) {

            p.digito = 4;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 101 || tecla.keyCode == 53) {

            p.digito = 5;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 102 || tecla.keyCode == 54) {

            p.digito = 6;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 103 || tecla.keyCode == 55) {

            p.digito = 7;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 104 || tecla.keyCode == 56) {

            p.digito = 8;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 105 || tecla.keyCode == 57) {

            p.digito = 9;
            p.accion = "numero";
            m.calculadora(p.accion, p.digito);


        }

        //========================================//
        /*==================Signos================*/
        //=========================================//
        if (tecla.keyCode == 107) {

            p.digito = "+";
            p.accion = "signo";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 109) {

            p.digito = "-";
            p.accion = "signo";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 106) {

            p.digito = "*";
            p.accion = "signo";
            m.calculadora(p.accion, p.digito);


        }
        if (tecla.keyCode == 111) {

            p.digito = "/";
            p.accion = "signo";
            m.calculadora(p.accion, p.digito);

        }

        if (tecla.keyCode == 110) {

            p.digito = ".";
            p.accion = "decimal";
            m.calculadora(p.accion, p.digito);
        }
        if (tecla.keyCode == 13) {

            p.digito = "=";
            p.accion = "igual";
            m.calculadora(p.accion, p.digito);

        }
        if (tecla.keyCode == 46 || tecla.keyCode == 8) {

            m.Borrarcal();
        }

    }

}

m.inicio();
m.teclado();