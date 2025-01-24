**BlogSpace**

**Overview**

BlogSpace is a dynamic and secure blog platform that allows users to
create, read, update and delete blog posts. It features robust backend
APIs, secure user authentication and a user-friendly interface. This
project showcases backend development expertise and efficient data
management using modern technologies.

**Features**

-   **User Authentication**: Secure login and registration using JSON
    Web Tokens (JWT).

-   **Blog Management**: CRUD operations for blog posts, with
    author-based access control.

-   **Dynamic Frontend**: EJS templates render user-facing pages with
    real-time data.

**Technologies Used**

**Backend**

-   **Node.js**: Backend runtime for scalable application development.

-   **Express.js**: Framework for building APIs and handling server-side
    logic.

**Database**

-   **MongoDB**: NoSQL database for efficient and flexible data storage.

**Authentication**

-   **JWT**: Secure token-based authentication for user sessions.

**Frontend**

-   **EJS**: Dynamic HTML templating for a better user experience.

**System Design**

**Architecture**

-   RESTful API design.

-   Follows MVC (Model-View-Controller) architecture for separation of
    concerns.

**Database Design**

**Collections**

1.  **Users**:

    -   Fields: username, email, password (hashed).

2.  **Posts**:

    -   Fields: title, content, author (linked to user), timestamps.

**Key Endpoints**

**Authentication**

1.  POST /api/register: User registration.

2.  POST /api/login: User login with JWT issuance.

**Blog Management**

1.  GET /api/posts: Retrieve all posts.

2.  POST /api/posts: Create a new post (authenticated).

3.  PUT /api/posts/:id: Update a post (authenticated and
    author-restricted).

4.  DELETE /api/posts/:id: Delete a post (authenticated and
    author-restricted).

**Installation and Setup**

**Prerequisites**

-   Node.js installed (v14 or later).

-   MongoDB server running locally or accessible via URI.

**Steps**

1.  **Clone the Repository**:

2.  git clone https://github.com/ArkwingsCyprianAbala/blog_platform.git

3.  cd blog_platform

4.  **Install Dependencies**:

5.  npm install

6.  **Set Environment Variables**: Create a .env file and add the
    following:

7.  PORT=3000

8.  MONGO\_URI=mongodb://localhost:27017/blog

9.  JWT\_SECRET= 

10. **Run the Application**:

11. npm start

12. **Access the Application**: Open your browser and navigate to
    http://localhost:3000.

**Challenges Faced**

-   Ensuring secure API endpoints.

-   Optimizing database queries for better performance.

**Future Enhancements**

-   Add pagination to improve post navigation.

-   Implement rich-text editing for creating posts.

-   Enable media uploads (e.g., images for blog posts).

**Contributing**

1.  Fork the repository.

2.  Create a feature branch.

3.  Commit your changes.

4.  Push to your branch and submit a pull request.

**License**

This project is licensed under the MIT License. See the LICENSE file for
details.

**Contact**

For questions or feedback, reach out at
\[[<u>arkwingscyprianabala@gmail.com</u>](mailto:arkwingscyprianabala@gmail.com)\].
