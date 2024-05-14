document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const contactList = document.getElementById('contact-list');
    const searchInput = document.getElementById('search');
  
    // Function to get data from local storage
    function getContacts() {
      return JSON.parse(localStorage.getItem('contacts')) || [];
    }
  
    // Function to save data to local storage
    function saveContact(data) {
      const contacts = getContacts();
      contacts.push(data);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  
    // Function to display contacts in the table
    function displayContacts() {
        contactList.innerHTML = '';
        const contacts = getContacts();
      
        contacts.forEach(function(contact, index) {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.cardType}</td>
            <td>${contact.saveData ? 'Yes' : 'No'}</td>
            
            <td>${contact.title}</td> 
            <td>
              <button onclick="editContact(${index})">Edit</button>
              <button onclick="deleteContact(${index})">Delete</button>
            </td>
          `;
          contactList.appendChild(row);
        });
      }
      
  
    // Function to add a new contact
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const titleElement = document.querySelector('input[name="title"]:checked');
      const title = titleElement ? titleElement.value : '';
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const cardType = document.getElementById('card-type').value;
      const saveData = document.getElementById('save-data').checked;
  
      const newContact = { title, name, email, cardType, saveData };
      saveContact(newContact);
      displayContacts();
      contactForm.reset();
    });
  
    // Function to delete a contact
    window.deleteContact = function(index) {
      const contacts = getContacts();
      contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      displayContacts();
    };
  
    // Function to edit a contact
    window.editContact = function(index) {
      const contacts = getContacts();
      const contact = contacts[index];
  
      document.getElementById('name').value = contact.name;
      document.getElementById('email').value = contact.email;
      document.getElementById('card-type').value = contact.cardType;
      document.getElementById('save-data').checked = contact.saveData;
  
      // Delete the contact after editing
      contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      displayContacts();
    };
  
    // Function to search contacts by name
    window.searchContacts = function() {
      const searchTerm = searchInput.value.toLowerCase();
      const contacts = getContacts();
  
      const filteredContacts = contacts.filter(function(contact) {
        return contact.name.toLowerCase().includes(searchTerm);
      });
  
      contactList.innerHTML = '';
      filteredContacts.forEach(function(contact) {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${contact.name}</td>
          <td>${contact.email}</td>
          <td>${contact.cardType}</td>
          <td>${contact.saveData ? 'Yes' : 'No'}</td>
        `;
        contactList.appendChild(row);
      });
    };
  

    displayContacts();
  });
  