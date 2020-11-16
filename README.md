# SolelyPets
The React/Redux app is designed and developed to allow a donor to easily make donations to an animal shelter of their choice. There is also the option for an animal shelter to register as a user to list their animals and track their donations.

# General Info
SolelyPets is a Flatiron School Web Developement Capstone project to demonstrate working knowledge of drawing an ERD(entity relational database), spinning up a Rails API with all the appropriate configurations(associations, routes, actions, serializers), and heavy focus on React as frontend for interactions between user and browser.

# Tech Stack
This web app employs the following technologies(not inclusive):

* Ruby [2.6.1]
* Rails [6.0.3.2]
* React(Components and Routes)
* Redux(state management)
* Cloudinary API - image uploading and hosting services
* Stripe API - handles the security and data storage of all donations
* Semantic UI React for styling
* PostgresQL - Database
* Bcrypt and JWT for authentication and authorization
* rack-cors - provides support for Cross-Origin Resource Sharing for Rack compatible web applications(allows the front-end portion of this project to perform fetch requests)
* active_model_serializers - allows customization and rendering of data in JSON format as responses to requests

# Set-Up
1. clone this repo to your local environment -- git clone < git repository >
2. cd(change directory) into the repo
3. $run 'npm install' into your command line
3. $run 'npm start' into your command line
* **NOTE: This requires a few more steps. Please read below.**
4. visit https://github.com/wilsonvetdev/solelypets-api
5. clone the repo to your local environment -- git clone < git repository >
6. $ bundle install - installs gems and dependencies
7. $ rails db:create - creates the database for the first time, or try $ rails db:reset
8. $ rails db:migrate - creates the tables for the database
9. $ rails db:seed - seed the data necessary
10. rails s to start the server
11. With the server running as a result from Step 9, the application should be working in the browser now.

# What's Next?

Database schema will need to be updated with more tables to add more features. Frontend styling and accessibility will also be greatly improved, and will be revisited in the near future. I will be taking in recommendations and tracking the features in the Nice-To-Have section below.

# Nice to have features(not final):

* Adding prompts and validations
* Allowing a user(donor/shelter) to delete their account
* Allowing a user(donor) to to edit their account info 
* A feed in a shelter page to enable commenting feature to improve engagement

# Known Issues so far:
* No guard clauses to prevent app from breaking( ex. when a donor tries to sign in as a shelter or vice versa )

# Sample Images: 

### Landing Page
![landing page](https://github.com/wilsonvetdev/solelypets-frontend/blob/main/landing.png)

### Loging Page
![loging page](https://github.com/wilsonvetdev/solelypets-frontend/blob/main/login.png)

### User Home
![user home](https://github.com/wilsonvetdev/solelypets-frontend/blob/main/userHome.png)

### Shelter Home
![shelter home](https://github.com/wilsonvetdev/solelypets-frontend/blob/main/animalList.png)

### Shelters
![shelters](https://github.com/wilsonvetdev/solelypets-frontend/blob/main/shelters.png)
