# Kudosware

Welcome to Kudosware! This is a simple web application where users can sign up, upload their resumes, and get their details saved securely in MongoDB. 

## What’s Inside

- **User Signup**: Users can register with their name, email, phone number, and a password.
- **Resume Upload**: Users can upload their resume, which gets saved on the server.
- **Secure Storage**: Passwords are hashed using bcrypt for security.
- **MongoDB Integration**: User data and resumes are stored in MongoDB.

## How to Get Started

Here’s a quick guide to get Kudosware up and running on your local machine.

### Prerequisites

Before you begin, make sure you have the following:

- [Node.js](https://nodejs.org/) (Version 18 or later is preferred)
- [MongoDB](https://www.mongodb.com/) (You need either a MongoDB Atlas cluster or a local MongoDB instance)
- [Git](https://git-scm.com/) (Optional, for version control)

### Setting It Up

1. **Clone the Repo:**

    ```bash
    git clone https://github.com/your-username/kudosware.git
    cd kudosware
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    Create a `.env` file in the root directory of your project and add your MongoDB connection string:

    ```plaintext
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
    ```

4. **Create the Uploads Directory:**

    Make sure the `uploads` directory exists for storing resumes:

    ```bash
    mkdir uploads
    ```

5. **Start the Server:**

    ```bash
    node server.js
    ```

    Your server will be up and running at `http://localhost:3001`.

### How to Use

- **Signup**: Head to `http://localhost:3001` in your browser. You’ll find the signup form there where users can enter their details and upload their resumes.
- **Success Page**: After a successful signup, users will be redirected to `success.html`.

### Project Structure

- **/public**: This folder has all the static files like HTML, CSS, and JavaScript.
- **/uploads**: This is where the uploaded resumes are stored.
- **server.js**: The main file that sets up everything—Express server and MongoDB connection.
- **.env**: This file holds the environment variables, including your MongoDB URI.

### Common Issues

- **MongoDB Connection**: If you see errors related to MongoDB, double-check your `.env` file for typos in the connection string. Make sure your MongoDB instance is accessible.
- **Directory Problems**: Ensure the `uploads` directory exists and has the right permissions.

### Contributing

Want to help out? Feel free to fork the repo and send a pull request with your changes. We’d love to see your contributions!

### License

This project is licensed under the MIT License. Check out the [LICENSE](LICENSE) file for more details.

---
