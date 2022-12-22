//Variable created to connect to the input elements in HTML
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // console.log(this.value);

    //Created to attach the px sizing to the input range number location
    //or the empty string that results from the color input:
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    
    //Connecting the style changes to the name, value, and suffix which is the px
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


//Event listeners to capture the changes as the user slides the input from left to right
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


