if (document.querySelector('#new-pet')) {
  document
    .querySelector('#new-pet')
    .addEventListener('submit', (e) => {
      e.preventDefault();

      var form = document.getElementById('new-pet');
      var pet = new FormData(form);

      console.log('Console Logging form:');
      console.log(form);

      console.log('Console Logging FormData entries:');
      for (var pair of pet.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      console.log('Console Logging pet:');
      console.log(pet);

      axios
        .post('/pets', pet, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function (res) {
          window.location.replace(`/pets/${res.data.pet._id}`);
        })
        .catch(function (err) {
          console.log('Console Logging error:');
          console.log(err);
          const alert = document.getElementById('alert');
          alert.classList.add('alert-warning');
          alert.textContent =
            'Oops, something went wrong saving your pet. Please check your information and try again:)';
          alert.style.display = 'block';
          setTimeout(() => {
            alert.style.display = 'none';
            alert.classList.remove('alert-warning');
          }, 3000);
        });
    });
}
