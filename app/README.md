## Techs

I've used NestJS on the back-end and React-Native in the front-end. I've chosen sqlite for the database, and there's a database in the repo with the books I used for testing.

#### Back-end

The backend consists of three simple modules:

-   Auth
-   Users
-   Books

Although the names are fairly self explanatory, I'll give a small description of each of them.

###### Auth

Is responsible for authentication users and protecting routes. The auth module is responsible for two things: validating that a user exists, and if the email/password combination is valid, creating a JWT. Additionally, we can protect routes using the UseGuards decorator: `@UseGuards(JwtAuthGuard)`. Routes guarded by this decorator, expect a Bearer Token to be sent on the request header.

###### Users

Module responsible for controlling users.

###### Books

Module responsible for controlling books. Books have a relation with User, this was added because I initially considered allowing an user to edit books they had created, and to implement such a feature we would need to know who was the owner of the book, therefore, a relation was needed.

#### Front-end

The front-end was created using a bare (non-expo) react-native project.

## Features

#### Home `mandatory`

-   [x] Create a Pixel Perfect screen based on design above;
-   [x] The books must be clickable and redirect to details screen.

#### Search `mandatory`

-   [x] See a list of books based on search query;
-   [x] Make it possible to search for more books with a "Load more" button;
-   [x] Search books by name;
-   [x] Click on one of the books to see their details.

#### Books Details `mandatory`

-   [x] See all information for the selected book.

#### New Book `mandatory`

-   [x] Create a Book;
-   [x] Validate the form data.

#### Extras

-   [x] User sign in
-   [x] User sign up
-   [x] User sign out
-   [x] Splash screen
-   [x] App icon
-   [x] Attempt to add lottie animations to make the app more user friendly
-   [ ] Edit book
-   [ ] Better error handling, showing snackbars to alert errors and successful actions

## Acknowledgments and notes

-   The app was developed and tested solely on an Android emulator and device. Since I do now own a mac nor an iPhone, there was no way for me to test the app on iOS, so if anyone from Foton staff should play test my app, please keep this in mind.
-   Dark Mode might break a few things, at least on Xiaomi devices.
-   The Figma design makes use of shadow-boxes on the inputs, books and probably somewhere else, but shadows in react-native are kind of a bitch to work properly. I used the ```elevation````prop on the inputs and books, but I have noticed it to not work consistently. So I would like to state that I'm aware of the shadow-boxes and I've battled react-native to implement them the best I could.
-   The repo includes a database with all the books I have created while testing.
-   The total amount of time I have put into developing this was around 34~36 hours.

I've recorded a small demonstration of the app:

-   YouTube: https://youtu.be/Cm1V_lJXzJw
-   Drive: https://drive.google.com/file/d/13sX23yIGg2VlS1nIzgbNWVxCr9RzNWuV/view
