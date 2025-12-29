//#region get country/city name from user using SweetAlert2: 
document.getElementById('getInfos').addEventListener('click', ()=>{
  Swal.fire({
    title: "Enter Country🌍City📍",
    theme: 'dark',
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    preConfirm: (city) => {
      const value = city?.trim();

      if (!value) {
        Swal.showValidationMessage('Please enter a country/city name');
        return false;
      }

      // Reject numbers-only input
      if (/^\d+$/.test(value)) {
        Swal.showValidationMessage('City name cannot be only numbers');
        return false;
      }

      // Allow letters, spaces
      if (!/^[\p{L}\s-]+$/u.test(value)) {
        Swal.showValidationMessage('Only letters and spaces are allowed');
        return false;
      }
        return value.trim()
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      const city = encodeURIComponent(result.value)
      // Redirect to server route which will render the weather page
      window.location.href = `/searchLocation?city=${city}`
    }
  });
})
//#endregion

document.getElementById('title').addEventListener('click', ()=>{
  window.location.href = '/'
})