document.addEventListener('DOMContentLoaded', function() {
    fetchGitHubRepoContents();
});

function fetchGitHubRepoContents() {
    const username = 'BraihanBenjaminGonzalezG'; 
    const repoName = 'PWT'; 
    const apiUrl = `https://api.github.com/repos/${username}/${repoName}/contents`;

    const projectNames = ['buscaminas', 'dinosaurio', 'pokedex'];

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('github-projects-list');
            data.forEach(item => {
                if (item.type === 'dir' && projectNames.includes(item.name)) {
                    const projectElement = createProjectElement(item);
                    projectsContainer.appendChild(projectElement);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching GitHub repo contents:', error);
        });
}

function createProjectElement(item) {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('proyecto');

    const projectLink = document.createElement('a');
    projectLink.href = `https://github.com/BraihanBenjaminGonzalezG/PWT/tree/master/${item.name}`;
    projectLink.target = '_blank';

    const overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');

    const projectImg = document.createElement('img');
    switch (item.name) {
        case 'buscaminas':
            projectImg.src = './assets/css/img/p2.png';
            break;
        case 'dinosaurio':
            projectImg.src = './assets/css/img/P1.png';
            break;
        case 'pokedex':
            projectImg.src = './assets/css/img/P3.png';
            break;
        default:
            projectImg.src = './assets/img/github-placeholder.png'; 
            break;
    }

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    const projectTitle = document.createElement('h4');
    projectTitle.textContent = capitalizeFirstLetter(item.name);

    const projectDescription = document.createElement('p');
    projectDescription.textContent = 'Proyectos'; 

    infoDiv.appendChild(projectTitle);
    infoDiv.appendChild(projectDescription);
    projectLink.appendChild(overlayDiv);
    projectLink.appendChild(projectImg);
    projectLink.appendChild(infoDiv);
    projectDiv.appendChild(projectLink);

    return projectDiv;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
   
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("gaming");
        habilidades[4].classList.add("servidores");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("puntualidad");
    }
}


window.onscroll = function(){
    efectoHabilidades();
} 
function validarFormulario() {

    var nombre = document.getElementById("nombre").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var tema = document.getElementById("tema").value;
    var mensaje = document.getElementById("mensaje").value;

    var nombreError = document.getElementById("nombre-error");
    var telefonoError = document.getElementById("telefono-error");
    var correoError = document.getElementById("correo-error");
    var temaError = document.getElementById("tema-error");
    var mensajeError = document.getElementById("mensaje-error");

   
    var telefonoRegex = /^\+?\d{11}$/; 
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

   
    nombreError.style.display = 'none';
    telefonoError.style.display = 'none';
    correoError.style.display = 'none';
    temaError.style.display = 'none';
    mensajeError.style.display = 'none';

    var isValid = true;

  
    if (nombre === "") {
        nombreError.textContent = "Por favor completa tu nombre.";
        nombreError.style.display = 'block';
        isValid = false;
    }
    if (telefono === "") {
        telefonoError.textContent = "Por favor completa tu teléfono.";
        telefonoError.style.display = 'block';
        isValid = false;
    } else if (!telefonoRegex.test(telefono)) {
        telefonoError.textContent = "Por favor ingresa un número de teléfono válido (por ejemplo, +56975505169).";
        telefonoError.style.display = 'block';
        isValid = false;
    }
    if (correo === "") {
        correoError.textContent = "Por favor completa tu correo.";
        correoError.style.display = 'block';
        isValid = false;
    } else if (!correoRegex.test(correo)) {
        correoError.textContent = "Por favor ingresa una dirección de correo electrónico válida.";
        correoError.style.display = 'block';
        isValid = false;
    }
    if (tema === "") {
        temaError.textContent = "Por favor completa el tema.";
        temaError.style.display = 'block';
        isValid = false;
    }
    if (mensaje === "") {
        mensajeError.textContent = "Por favor completa el mensaje.";
        mensajeError.style.display = 'block';
        isValid = false;
    }

    if (isValid) {
     
        var mensajeExito = document.getElementById("mensaje-exito");
        mensajeExito.style.display = "block";

        document.getElementById("nombre").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("tema").value = "";
        document.getElementById("mensaje").value = "";

      
        setTimeout(function(){
            mensajeExito.style.display = "none";
        }, 3000); 
    }

    return isValid;
}





