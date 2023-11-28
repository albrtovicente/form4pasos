function siguiente(currentStep, siguiente) {
    document.getElementById(currentStep).classList.remove('active');
    document.getElementById(siguiente).classList.add('active');
}

function anterior(currentStep, anterior) {
    document.getElementById(currentStep).classList.remove('active');
    document.getElementById(anterior).classList.add('active');
}

function mostrar(currentStep) {
    var result_step1 = document.getElementById('step1_input').value;

}