Kudosware Signup Application
Overview
This is a signup application for Kudosware, a job-seeker platform. Users can submit their resumes and personal information through the frontend form, which is handled by a backend server using Express, MongoDB, and Multer for file uploads.

Features
User signup form with fields for name, email, phone number, password, and resume upload.
Password validation to ensure a minimum length of 6 characters.
File upload for resumes with supported formats: PDF, DOC, DOCX.
Backend server with Express to handle form submissions and store data in MongoDB.
Resume file storage in the uploads directory.
Prerequisites
Node.js (v14 or higher recommended)
MongoDB (a cloud instance or local setup)
Setup
1. Clone the Repository
bash
Copy code
git clone <repository-url>
cd <repository-directory>
2. Install Dependencies
Run the following command to install the required Node.js packages:

bash
Copy code
npm install
3. Configure Environment Variables
Create a .env file in the root of the project directory and add your MongoDB URI:

php
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
Replace <username>, <password>, <cluster-url>, and <database> with your MongoDB credentials and connection details.

4. Create the uploads Directory
Ensure that the uploads directory exists in the root of the project. This directory is used to store uploaded resume files.

bash
Copy code
mkdir uploads
5. Start the Server
Run the following command to start the server:

bash
Copy code
npm start
The server will be running at http://localhost:3001.

Frontend
index.html: The signup form for job seekers.
styles.css: The CSS file for styling the signup form.
Backend
script.js: JavaScript file for client-side validation of the signup form.
server.js: The main server file using Express to handle form submissions and interact with MongoDB.
Testing
You can test the application by navigating to the frontend URL in your browser and submitting the signup form. Verify that the data is correctly saved in your MongoDB database and that the resume files are uploaded to the uploads directory.

Deployment
For deployment, you can host the application on a free platform like Heroku, Vercel, or Netlify. Ensure you configure environment variables and adjust file paths as needed for production.

License
This project is licensed under the MIT License. See the LICENSE file for details.
