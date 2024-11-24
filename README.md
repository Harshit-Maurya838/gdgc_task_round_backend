# GDGC Backend Task

A backend application built to handle server-side logic, APIs, and data processing. This project demonstrates the use of modern backend technologies to create a scalable and efficient server.

## Demo

Check out the live demo here: [Deployed Link](https://gdgc-task-round-backend.vercel.app/listing)

## Features

- Get the list of shopping items.
- Get the itme by its id.
- Post or add the item in Shopping List.
- Edit the item in Shopping List.
- Delete the item from Shopping List.

## Technologies Used

- **JavaScript**
- **NodeJs**
- **ExpressJs**
- **MongoDB**

## Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Harshit-Maurya838/gdgc_task_round_backend.git

### Routes
1. GET ALL Listed Items [GET `/listing`]
    - Response:
      ```json
      {
        "data": [
          {
            "id": "string";
            "title": "string";
            "description": "string";
            "seller": "string"; 
            "rating": number;
          }
        ]
      }
2. Get One Listed Item using ID [GET `/listing/<id>`]:
      - Request:
        - params
          ```json
          {
            "id": "string|int"
          }
      - Response:
        ```json
        {
          "data": {
            "id": "string";
            "title": "string";
            "description": "string";
            "seller": "string"; 
            "rating": number;
          }
        }
3. Update Listed Item [PUT `/listing/<id>`]:
    - Request:
       - params
          ```json
          {
            "id": "string|int"
          }
      - Body:
        ```json
        {
          "title": "string"; // optional
          "description": "string"; // optional
          "rating": number; // optional
        }
    - Response:
      ```json
      {
        "data": {
           "id": "string";
            "title": "string";
            "description": "string";
            "seller": "string"; 
            "rating": number;
        }
      }
3. Create a Listing [POST `/listing/`]:
    - Request:
      - Body:
        ```json
        {
            "title": "string"; 
            "description": "string";
            "seller": "string"; 
            "rating": number; //optional
        }
    - Response:
      ```json
      {
        "data": {
            "id": "string";
            "title": "string";
            "description": "string";
            "seller": "string"; 
            "rating": number;
        }
      }
5. Delete Todo Item [DELETE `/listing/<id>`]:
    - Request:
      - params:
        ```json
        {
          "id": "string|int"
        }
    - Response: `200 OK`
