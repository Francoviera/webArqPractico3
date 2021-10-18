document.addEventListener("DOMContentLoaded", function(){
    let estudiantes = [];
    function getEstudiantes(){
        let myHeaders = new Headers();
            let requestOptions = {
                method: 'GET',
                redirect: 'follow',
            };

            //ESTO SE AVANZA EN LA SEGUNDA PARTE 
            fetch("http://localhost:8080/EjercicioIntegrador3/registroestudiantes" + "/estudiantes", requestOptions)
            .then(response => response.json())
            .then(data => {
                let string = ""
                data.forEach(estudiante => {
                    string += `<li href="#" class="list-group-item text-left">
                    <div class="contentEstudiente">
                        <img class="img-thumbnail " src="https://bootdey.com/img/Content/User_for_snippets.png">
                        <label class="name ms-2">
                            ${estudiante.nombre} ${estudiante.apellido}<br>
                      </label>
                  </div>
                  <div class="abmEstudient">
                      <span class="pull-right">
                          <i class="far fa-eye mt-4"></i>
                          <i class="fas fa-trash-alt color-danger ms-3"></i>
                          <i class="fas fa-envelope-square ms-3"></i>
                      </span>
                  </div>
                  <!-- <div class="break"></div> -->
                </li>`;
                });
                document.querySelector(".ctn-estudiantes").innerHTML = string;
            })
            .catch(error => console.error(error));
    }
    function deleteEstudiante(idEstudiante){
        
    }
    getEstudiantes();
});