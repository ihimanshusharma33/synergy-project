# Synergy-Project

This is a simple CRUD Application built using React, where we can CREATE, READ, UPDATE, and DELETE user data. This project uses the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to simulate fetching, creating, updating, and deleting user data.

## Features

- **Read Operation**: This application allows us to fetch and display a list of users from the JSONPlaceholder API in a list or table format. Each user entry displays basic information like name, email, and phone.
  
- **Create Operation**: We can create a new user by filling out a form and submitting it. The data will be POSTed to the JSONPlaceholder API to simulate adding a new user (though the data won't persist).

- **Update Operation**: Users can update existing user data by clicking an "Edit" button. This opens a form pre-filled with the current data, and after submitting, a PUT request is made to simulate the update.

- **Delete Operation**: Users can delete an entry from the list by clicking the "Delete" button, which triggers a DELETE request to the API to simulate removing the user.

## Additional Features

- **Responsive Design**: The application is fully responsive, ensuring a smooth user experience on both desktop and mobile devices.
  
- **React Router**: Different views are managed using `react-router`, providing a clean navigation system between the home page and detailed user views.

- **Error Handling**: Proper error handling is implemented to notify the user if any API request fails.

- **Skeleton Loader**: A skeleton loader is displayed while data is being fetched from the API, improving user experience during load times.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/synergy-project.git
   cd synergy-project
