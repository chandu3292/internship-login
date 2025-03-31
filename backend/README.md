# Backend - Login App

## Overview
This is the backend for a login application built using Django. It provides authentication and user management functionalities.

## Features
- User Registration
- Login with Email & Password
- JWT-based Authentication
- Password Hashing & Validation

## Technologies Used
- Django
- Django Rest Framework (DRF)
- PostgreSQL
- JWT Authentication

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/your-repo.git
   ```
2. Navigate to the backend directory:
   ```sh
   cd backend
   ```
3. Create a virtual environment:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use: venv\Scripts\activate
   ```
4. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
5. Apply migrations:
   ```sh
   python manage.py migrate
   ```
6. Run the development server:
   ```sh
   python manage.py runserver
   ```

## Folder Structure
```
backend/
├── manage.py
├── requirements.txt
├── core/
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
├── users/
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│   ├── authentication.py
```

## API Endpoints
| Endpoint       | Method | Description         |
|---------------|--------|---------------------|
| /api/register | POST   | Register a new user |
| /api/login    | POST   | Login user         |
| /api/logout   | POST   | Logout user        |

## Future Enhancements
- Implement social authentication
- Email verification for new users
- Reset password feature

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

