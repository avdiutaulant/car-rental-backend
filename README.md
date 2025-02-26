# CAR RENTAL

- This is a car rental system developed using Node.js, Express, MongoDB, and JWT for authentication.

## Getting Started

- These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:

- Node.js
- MongoDB

### Installation

Follow these steps to set up the development environment:

1. Clone the repository:
   
- git clone https://github.com/avdiutaulant/car-rental-backend.git

2. Navigate to the project directory

- cd car-rental

3. Instal the dependencies

- npm install

4. Start the MongoDB server:

- mongosh

5. Copy the `.env.example` file to `.env` and replace the placeholder values with your actual configuration details.

    For Windows
- copy .env.example .env

    For Linux and MacOS

- cp .env.example .env 

6. Start the application

- npm start

## Usage

### Authentication Service

Exposed endpoints:

- POST `/api/auth/register`: Registers a new user.
- POST `/api/auth/login`: Log in a user.
- GET `/api/auth/my-profile`: Retrieves the profile of the logged-in user.

### Car Management Service

Exposed endpoints:

- GET `/api/rental-cars`: Retrieves a list of rental cars.
- POST `/api/rental-cars`: Creates a new rental car.

