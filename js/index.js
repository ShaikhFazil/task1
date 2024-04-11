let Index = 0;

function Details(userId) {
  fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("userName").textContent = data.name;
      document.getElementById("userEmail").textContent = data.email;
      document.getElementById("userCity").textContent = data.address.city;
      document.getElementById("userCompany").textContent = data.company.name;
    })
    .catch(error => console.error('Error fetching user details:', error));
}

function nextUser() {
  Index++;
  Details(Index + 1); 
}

function previousUser() {
  if (Index > 0) {
    Index--;
    Details(Index + 1); 
  }
}

Details(1); 
