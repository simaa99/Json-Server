# Json sever Task

A simple product management application with CRUD functionality using React, Axios, and React Router.

## Table of Contents

- [Description](#description)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Description

This project is a product management application that allows users to create, view, edit, and delete products. It is built with React for the frontend, Axios for handling API requests, and React Router for navigation between pages. The backend is simulated using `json-server`.

## Demo

[Live Demo](https://example.com)

## Screenshots
![Home Page Screenshot](https://ik.imagekit.io/crv83iwkz/110103.png?updatedAt=1690444964459)
![Create Page](https://ik.imagekit.io/crv83iwkz/110133.png?updatedAt=1690444964410)
![Red Page](https://ik.imagekit.io/crv83iwkz/110157.png?updatedAt=1690444964142)


## Features

- View a list of products with their details (name, description, price).
- Add a new product with a name, description, and price.
- View detailed information about a specific product.
- Edit the details of an existing product.
- Delete a product from the list.

## Features

- View a list of products with their details (name, description, price).
- Add a new product with a name, description, and price.
- View detailed information about a specific product.
- Edit the details of an existing product.
- Delete a product from the list.

## Technologies Used

- React
- Axios
- React Router
- json-server

## Installation

To run this application locally, follow these steps:
- Clone the repository:

```bash
git clone https://github.com/simaa99/Json-Server.git
cd project-directory
```

- Install the dependencies:

```bash
npm install
```

- Start the development server and json-server::

```bash
npm start
```

#### The application will be accessible at http://localhost:3000, and the json-server API will be available at http://localhost:3030/products.


## Usage

- To view the list of products, go to the home page (/).
- To add a new product, click on "Add Product" on the home page and fill in the required details.
- To view detailed information about a product, click on "View" next to the product in the list.
- To edit a product's details, click on "Edit" next to the product in the list and update the information.
- To delete a product, click on "Delete" next to the product in the list. A confirmation dialog will appear before deletion.

## API Endpoints

- `GET /products`: Get a list of all products.
- `POST /products`: Add a new product.
- `GET /products/:id`: Get details of a specific product.
- `PUT /products/:id`: Update the details of a specific product.
- `DELETE /products/:id`: Delete a specific product.


## Running the Project

To run the web application locally, follow these steps:

- Clone the repository to your local machine.
- Install the required dependencies using: `npm install`
- Start the development server: `npm start`
- The application will be available at: `http://localhost:3000`
