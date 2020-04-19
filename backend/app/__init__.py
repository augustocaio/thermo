from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()


def create_app(debug=False):
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../database.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    CORS(app)
    db.init_app(app)
    api = Api(app)
    define_routes(api)

    # Starts server.
    app.run(host='0.0.0.0', port=5000)


def define_routes(api):
    from .routes.athlete import Athlete
    from .routes.student import Student
    from .routes.app_settings import AppSettings

    api.add_resource(Athlete, '/athlete')
    api.add_resource(Student, '/student')

    # Development only
    api.add_resource(AppSettings, '/appsettings')
