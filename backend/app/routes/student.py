from flask import request
from flask_restful import Resource, reqparse
from ..models.student import ModelStudent
from .. import db
from sqlalchemy import or_


class Student(Resource):
    def get(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'idade',
            type=str,
            help='Idade do atleta'
        )
        parser.add_argument(
            'email',
            type=str,
            help='Email do atleta'
        )
        parser.add_argument(
            'regiao',
            type=str,
            help='Regiao'
        )
        parser.add_argument(
            'modalidade',
            type=str,
            help='Modalidade'
        )
        parser.add_argument(
            'nome',
            type=str,
            help='Nome'
        )
        parser.add_argument(
            'emailprof',
            type=str,
            help='Emailprof'
        )
        parser.add_argument(
            'horario',
            type=str,
            help='Horario'
        )
        parser.add_argument(
            'status',
            type=str,
            help='Status'
        )
        args = parser.parse_args(strict=True)

        result = ModelStudent.query.filter_by(emailprof = args.emailprof).all()
        # or_(
        #                         nome = args.nome,
        #                         idade = args.idade, 
        #                         regiao = args.regiao,
        #                         email = args.email,
        #                         modalidade = args.modalidade,
        #                         )).all()

        if not result:
            return {'message': 'Not found'}, 404
        
        return {'students': list(map(lambda x: {
            "nome": x.nome,
            "idade": x.idade,
            "email": x.email,
            "regiao": x.regiao,
            "modalidade": x.modalidade,
            "emailprof": x.emailprof,
            "horario": x.horario,
            "status": x.status,
        }, result))}

    def post(self):
        body = request.get_json()
        print(body)
        if (body is None or any(map(lambda attribute: attribute not in body, ["nome", "email", "regiao", "idade", "modalidade", "emailprof", "horario"]))):
            return {'message': 'Request does not have the whole data'}, 400
        student = ModelStudent(
            nome=body['nome'],
            email=body["email"],
            idade=body["idade"],
            regiao=body["regiao"],
            modalidade=body["modalidade"],
            emailprof=body["emailprof"],
            horario = body['horario'],
            status="Pendente"
        )
        db.session.add(student)
        db.session.commit()
        return {'message': 'Created!'}
