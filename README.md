## Django Boilerplate

### Description:
This boilerplate for Django projects integrates various tools and configurations to enhance code quality, consistency, and development workflow. It includes Poetry for dependency management, a Makefile for automation, Flake8 for linting, EditorConfig for consistent coding styles, and pre-commit hooks for automatic checks before committing code changes.

### Features:
- Django 3.x
- PostgreSQL database setup
- Custom user model
- Django REST Framework integration
- Basic user authentication and authorization
- Environment variable configuration
- Poetry for dependency management
- Makefile for common development tasks automation
- Flake8 for linting code
- EditorConfig for consistent coding styles
- Pre-commit hooks for automatic checks before committing code changes

### Installation:
Clone the repository:
```bash
git clone https://github.com/tandukar/django-boilerplate.git
```

Navigate to the project directory:
```
cd django-boilerplate
```
Install Poetry (if not already installed{install globally}):
```bash
poetry install
```
Install Flake8 globally (optional but recommended):
```bash
pip install flake8
```
Install EditorConfig plugin for your preferred code editor to enforce consistent coding styles.

Install pre-commit hooks:
```bash
poetry run pre-commit install
```

### License:
This project is licensed under the MIT License.
