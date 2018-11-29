/*************SCRIPT*************/
-- Analista: Leonardo Gonçalves de Melo
-- Programador: Leonardo Gonçalves de Melo
-- Data: 02/09/2018
-- Finalidade: Criação de tabelas
/********************************/

CREATE TABLE Plano(
	CodigoPlano   INTEGER IDENTITY(1,1) PRIMARY KEY
	,Nome		  VARCHAR(50) NOT NULL
	,Descricao    NVARCHAR(MAX) NOT NULL
	,Valor		  DECIMAL(16,2) NOT NULL
	,VagasAbertas INT NOT NULL
);

CREATE TABLE Competencia(
	CodigoCompetencia INTEGER IDENTITY(1,1) PRIMARY KEY
	,Nome			  VARCHAR(50) NOT NULL
	,Descricao		  NVARCHAR(MAX) NOT NULL
);

CREATE TABLE Candidato(
	CodigoCandidato  INTEGER IDENTITY(1,1) PRIMARY KEY
	,Nome		     VARCHAR(50)
	,Email		     VARCHAR(50)
	,CPF		     BIGINT
	,Telefone	     BIGINT
	,CEP		     BIGINT
	,Estado		     VARCHAR(50)
	,Cidade		     VARCHAR(50)
	,Bairro		     VARCHAR(50)
	,Numero		     INTEGER
	,Complemento     VARCHAR(50)
	,StatusEmpresa   BIT
)

CREATE TABLE Empresa(
	CodigoEmpresa  INTEGER IDENTITY(1,1) PRIMARY KEY
	,NomeEmpresa   VARCHAR(50)
	,Email		   VARCHAR(50)
	,Cnpj		   BIGINT
	,Telefone	   BIGINT
	,CEP		   BIGINT
	,Estado		   VARCHAR(50)
	,Cidade		   VARCHAR(50)
	,Bairro		   VARCHAR(50)
	,Numero		   INTEGER
	,Complemento   VARCHAR(50)
	,StatusEmpresa BIT

	,CodigoPlano INTEGER FOREIGN KEY REFERENCES Plano(CodigoPlano)
);

CREATE TABLE Vaga(
	CodigoVaga  INTEGER IDENTITY(1,1) PRIMARY KEY
	,Descricao	NVARCHAR(MAX)
	,Salario	DECIMAL(16,2)
	,CEP		BIGINT
	,Estado		VARCHAR(50)
	,Cidade		VARCHAR(50)
	,Bairro		VARCHAR(50)
	,Numero		INTEGER

	,CodigoEmpresa INTEGER FOREIGN KEY REFERENCES Empresa(CodigoEmpresa)
);

CREATE TABLE Proposta(
	CodigoProposta   INTEGER IDENTITY(1,1) PRIMARY KEY

	,CodigoVaga		 INTEGER FOREIGN KEY REFERENCES Vaga(CodigoVaga)
	,CodigoCandidato INTEGER FOREIGN KEY REFERENCES Candidato(CodigoCandidato)
);

CREATE TABLE CandidatoCompetencia(
	CodigoVaga		   INTEGER FOREIGN KEY REFERENCES Vaga(CodigoVaga)
	,CodigoCompetencia INTEGER FOREIGN KEY REFERENCES Competencia(CodigoCompetencia)
)

CREATE TABLE VagaCompetencia(
	CodigoCandidato INTEGER FOREIGN KEY REFERENCES Candidato(CodigoCandidato)
	,CodigoCompetencia INTEGER FOREIGN KEY REFERENCES Competencia(CodigoCompetencia)
)