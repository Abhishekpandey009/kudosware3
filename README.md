Kudosware Signup App
Welcome to the Kudosware Signup App! 🎉 This is where job seekers can sign up, upload their resumes, and get started with our platform. Here's a quick guide to get you up and running.

What’s in This Repo?
Signup Form: A simple form where users can enter their name, email, phone number, and upload their resume.
Backend: Handles form submissions and saves user data to a MongoDB database.
Resume Upload: Users can upload resumes in PDF, DOC, or DOCX formats.
What You’ll Need
Node.js: Make sure you have Node.js installed. Version 14 or higher is recommended.
MongoDB: You’ll need a MongoDB instance, either local or cloud-based.
How to Get Started
1. Clone the Repo
First things first, get the code onto your machine:

bash
Copy code
git clone <repository-url>
cd <repository-directory>
2. Install Dependencies
Next, install the required Node.js packages:

bash
Copy code
npm install
3. Set Up Environment Variables
Create a .env file in the root directory. You’ll need to add your MongoDB URI like this:

php
Copy code
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
Replace <username>, <password>, <cluster-url>, and <database> with your MongoDB details.

4. Create the uploads Directory
Make sure the uploads directory exists to store uploaded resume files:

bash
Copy code
mkdir uploads
5. Start the Server
Now, fire up the server:

bash
Copy code
npm start
Your server will be live at http://localhost:3001. 🎉

Frontend Files
index.html: The signup form that users will interact with.
styles.css: Styles to make the form look nice.
Backend Files
script.js: Client-side JavaScript to validate the form.
server.js: The main server script that handles form submissions and interacts with MongoDB.
Testing It Out
Open your browser and head to the signup page. Try filling out the form and uploading a resume. Check if the data shows up in MongoDB and that your uploaded files are in the uploads directory.

Deploying
When you're ready to go live, you can deploy this app on platforms like Heroku, Vercel, or Netlify. Just remember to set your environment variables correctly for production!

License
This project is open source and licensed under the MIT License. Check out the LICENSE file for more details.
