document.addEventListener("DOMContentLoaded", function(){
    let carreras = [];
    function getCarreras(){
        let myHeaders = new Headers();
            let requestOptions = {
                method: 'GET',
                redirect: 'follow',
            };

            //ESTO SE AVANZA EN LA SEGUNDA PARTE 
            fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes" + "/carreras", requestOptions)
            .then(response => response.json())
            .then(data => {
                let string = ""
                data.forEach(carrera => {
                    string += `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail" src="https://bootdey.com/img/Content/user_2.jpg">
                        <label class="name ms-2">
                            carrera : ${carrera.nombreCarrera} facultad: ${carrera.facultad.nombreFacultad}
                        </label>
                    </div>
                    <div class="abmEstudient">
                        <span class="pull-right ">
                            <span><i class="fas fa-users mt-4"></i> 15</span>
                            <a class="btn-delete"  id="${carrera.idCarrera}" type="button"><i class="fas fa-trash-alt color-danger ms-3 mt-4"></i></a>
                        </span>
                    </div>
                </li>`;
                });
                document.querySelector(".ctn-carreras").innerHTML = string;
                const btn = document.querySelectorAll(".btn-delete");
                for (let i = 0; i < btn.length; i++) {
                    btn[i].addEventListener("click", function() {
                    deleteCarrera(btn[i].id)
                });
                }
            })
            .catch(error => console.error(error));
    }
     
    function deleteCarrera(id) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", 'application/json');
        myHeaders.append("Access-Control-Allow-Origin", "*");
        let requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow',
        };
        fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes/carreras/"+ id, requestOptions)
          .then(res => {
            console.log(res);
            getCarreras();
          })
          .catch((error) => console.log(error))
      }
    getCarreras();
    
    
});