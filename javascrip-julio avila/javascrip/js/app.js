window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("display"); //elemento pantalla de salida
}

x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el número pulsado en el argumento.

         if (x=="0" || xi==1  ) {	// inicializar un número,

            pantalla.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número

            if (xx==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número


               }
           }
           else { //continuar escribiendo un número

               if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;

               }

               //Resto de casos: escribir un número del 0 al 9
               else {
                   pantalla.innerHTML+=xx;

                   x+=xx
               }

            }
            xi=0 //el número está iniciado y podemos ampliarlo.

         }
function operar(s) {
         igualar() //si hay operaciones pendientes se realizan primero
         ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         xi=1; //inicializar pantalla.
         }
function igualar() {
         if (op=="no") { //no hay ninguna operación pendiente.
            pantalla.innerHTML=x;	//mostramos el mismo número

            }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            pantalla.innerHTML=sol //mostramos la solución
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }

function opuest() {
         nx=Number(x); //convertir en número
         nx=-nx; //cambiar de signo
         x=String(nx); //volver a convertir a cadena
         pantalla.innerHTML=x;//mostrar en pantalla.
         }
function inve() {
         nx=Number(x);
         nx=(1/nx);
         x=String(nx);
         pantalla.innerHTML=x;
         xi=1; //reiniciar pantalla al pulsar otro número.
         }
         function borradoTotal() {
                  pantalla.innerHTML=0; //poner pantalla a 0
                  x="0"; //reiniciar número en pantalla
                  coma=0; //reiniciar estado coma decimal
                  ni=0 //indicador de número oculto a 0;
                  op="no" //borrar operación en curso.

                  }

function disminuir() {
  document.getElementById('1').style="width:50%"
    }
