# Django react polls example
This is an example implementation of a fully React-rendered frontend in Django

It was intended for reference of a Django meetup talk.
You might find the [slides at Slideshare](https://www.slideshare.net/Frojd/integrating-react-in-django-while-staying-sane-and-happy) helpful

# Installation

## Django
1. Clone repo 
2. Install python requirements and activate virtualenv with `pipenv sync && pipenv shell`
3. Run migrations and start devserver:
```
cd django_project
./manage.py migrate
./manage.py loaddata data/questions.json
./manage.py runserver
```

## Frontend dev-server
1. run `cd frontend && npm i`
2. run `npm run build` to build javascript assets to django
3. run `npm start` to start the local devserver on :7001

More details of different commands/configuration in frontend/readme.md


# Server Side Rendering (SSR)
... TODO ...
