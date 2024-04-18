document.getElementById('interruptor').addEventListener('click', function() {
    let botonOn = document.getElementById('botonOn');
    let botonOff = document.getElementById('botonOff');
    
    if (botonOn.style.display === 'block' || botonOn.style.display === '') {
    botonOn.style.display = 'none'; 
    botonOff.style.display = 'block'; 
    
      // Encender la bombilla
    document.getElementById('bombillaOn').style.display = 'block';
    document.getElementById('bombillaOff').style.display = 'none';
    } else {
    botonOn.style.display = 'block'; 
    botonOff.style.display = 'none'; 

      // Apagar la bombilla
    document.getElementById('bombillaOn').style.display = 'none';
    document.getElementById('bombillaOff').style.display = 'block';
    }
});