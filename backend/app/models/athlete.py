from .. import db


class ModelAthlete(db.Model):
    nome = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), primary_key=True)
    regiao = db.Column(db.String(128), nullable=False)
    idade = db.Column(db.Integer, nullable=False)
    modalidade = db.Column(db.String(128), nullable=False)
    imagem = db.Column(db.String, nullable=False)

    def __init__(self, nome, email, regiao, idade, modalidade, imagem):
        self.nome = nome
        self.regiao = regiao
        self.idade = idade
        self.email = email
        self.modalidade = modalidade
        self.imagem = imagem


    def __repr__(self):
        return f'<User(name:{self.name}, email:{self.email}, id:{self.id})>'
