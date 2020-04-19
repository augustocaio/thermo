from .. import db


class ModelStudent(db.Model):
    nome = db.Column(db.String(128), nullable=False)
    email = db.Column(db.String(128), primary_key=True)
    regiao = db.Column(db.String(128), nullable=False)
    idade = db.Column(db.String(128), nullable=False)
    modalidade = db.Column(db.String(128), nullable=False)
    emailprof = db.Column(db.String(128), nullable=False)
    horario = db.Column(db.String(128), nullable=False)
    status = db.Column(db.String(128), nullable=False)

    def __init__(self, nome, email, regiao, horario, idade, modalidade, emailprof, status):
        self.nome = nome
        self.regiao = regiao
        self.idade = idade
        self.email = email
        self.modalidade = modalidade
        self.horario = horario
        self.emailprof = emailprof
        self.status = status


    def __repr__(self):
        return f'<User(name:{self.name}, email:{self.email}, id:{self.id})>'
