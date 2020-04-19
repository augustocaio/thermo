from flask import request
from flask_restful import Resource, reqparse
from ..models.athlete import ModelAthlete
from .. import db
from sqlalchemy import or_


class Athlete(Resource):
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
            'imagem',
            type=str,
            help='Imagem'
        )
        args = parser.parse_args(strict=True)

        result = ModelAthlete.query.filter_by(regiao = args.regiao, modalidade = args.modalidade).all()
        # or_(
        #                         nome = args.nome,
        #                         idade = args.idade, 
        #                         regiao = args.regiao,
        #                         email = args.email,
        #                         modalidade = args.modalidade,
        #                         )).all()

        if not result:
            return {'message': 'Not found'}, 404
        
        return {'athletes': list(map(lambda x: {
            "nome": x.nome,
            "idade": x.idade,
            "email": x.email,
            "regiao": x.regiao,
            "modalidade": x.modalidade,
            "imagem": x.imagem,
        }, result))}

    def post(self):
        body = request.get_json()
        if (body is None or any(map(lambda attribute: attribute not in body, ["nome", "email", "regiao", "idade", "modalidade", "imagem"]))):
            return {'message': 'Request must have body with "nome", "email", "regiao", "idade", "modalidade"'}, 400
        athlete = ModelAthlete(
            nome=body['nome'],
            email=body["email"],
            idade=body["idade"],
            regiao=body["regiao"],
            modalidade=body["modalidade"],
            imagem=body["imagem"]
        )
        db.session.add(athlete)
        db.session.commit()
        return {'message': 'Created!'}
