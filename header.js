/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  function myClick1() {
    var name = document.getElementById('txt_name');
    console.log(name)

    var email = document.getElementById('email');  
    console.log(email)  

    var messege = document.getElementById('message'); 
    console.log(message)
  }

  function myClick() {
    var property = {
      name: document.getElementById('txt_name').value,

      email: document.getElementById('email').value,

      message: document.getElementById('message').value
    }
    console.log(property);

    emailjs.send('service_nrzomn7', 'template_ac1b9r9', property)
                    .then(function() {
                        console.log('SUCCESS!');
                    }, function(error) {
                        console.log('FAILED...', error);
                    });
  }
  document.addEventListener('txt_name', 'email', 'message', (e) => { 
    // Отключаем событие по умолчанию 
        e.prevent.Default(); 
    // Очищаем поля формы 
        e.target.reset(); 
    });