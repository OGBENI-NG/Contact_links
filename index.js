const copyEmail = document.getElementById('copy-email');
const copyPhone = document.getElementById('copy-phone');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

copyPhone.addEventListener('click', () => {
      navigator.clipboard.writeText(phone.textContent)
            .then(() => {
                  phone.textContent = `Copied`;
                  setTimeout(() => {
                        phone.textContent = "+2348146432387";
                  }, 1500);
            })
            .catch((error) => {
            console.error('Error copying text: ', error);
      });
});
    
    
copyEmail.addEventListener('click', () => {
      navigator.clipboard.writeText(email.textContent)
      .then(() => {
            email.textContent = `Copied`
            setTimeout(() => {
                  email.textContent = "adeolumiracle@yahoo.com"
            },1500)
      })
      .catch((error) => {
            console.error('Error copying text: ', error);
      })
})
