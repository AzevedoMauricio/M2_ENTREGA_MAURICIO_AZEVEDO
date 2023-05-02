CREATE TABLE candidatos ( 
	candidato_id         INTEGER NOT NULL  PRIMARY KEY  ,
	candidato_nome       VARCHAR(255) NOT NULL    ,
	candidato_telefone   VARCHAR(32) NOT NULL    ,
	candidato_email      VARCHAR(255) NOT NULL    ,
	candidato_descricao  LONGTEXT     
 );

CREATE TABLE enderecos ( 
	endereco_id          INTEGER NOT NULL  PRIMARY KEY  ,
	endereco_cep         VARCHAR(8) NOT NULL    ,
	candidato_id         INTEGER     ,
	endereco_logradouro  VARCHAR(255) NOT NULL    ,
	endereco_numero      INTEGER NOT NULL    ,
	endereco_complemento VARCHAR(255) NOT NULL    ,
	FOREIGN KEY ( candidato_id ) REFERENCES candidatos( candidato_id )  
 );

CREATE TABLE experiencias ( 
	experiencia_id       INTEGER NOT NULL  PRIMARY KEY  ,
	experiencia_cargo    VARCHAR(255) NOT NULL    ,
	candidato_id         INTEGER     ,
	experiencia_organizacao VARCHAR(255) NOT NULL    ,
	experiencia_descricao LONGTEXT     ,
	experiencia_inicio   DATE NOT NULL    ,
	experiencia_fim      DATE NOT NULL    ,
	FOREIGN KEY ( candidato_id ) REFERENCES candidatos( candidato_id )  
 );

CREATE TABLE formacoes ( 
	formacao_id          INTEGER NOT NULL  PRIMARY KEY  ,
	formacao_nome        VARCHAR(255) NOT NULL    ,
	candidato_id         INTEGER     ,
	formacao_instituicao VARCHAR(255) NOT NULL    ,
	formacao_inicio      DATE NOT NULL    ,
	formacaio_fim        DATE NOT NULL    ,
	FOREIGN KEY ( candidato_id ) REFERENCES candidatos( candidato_id )  
 );

CREATE TABLE habilidades ( 
	habilidade_id        INTEGER NOT NULL  PRIMARY KEY  ,
	habilidade_nome      VARCHAR(255) NOT NULL    ,
	candidato_id         INTEGER     ,
	habilidade_nivel     INTEGER NOT NULL    ,
	FOREIGN KEY ( candidato_id ) REFERENCES candidatos( candidato_id )  
 );

CREATE TABLE persondalides ( 
	personalidade_id     INTEGER NOT NULL  PRIMARY KEY  ,
	personalidade_nome   VARCHAR(255) NOT NULL    ,
	candidato_id         INTEGER     ,
	personalidade_nivel  INTEGER NOT NULL    ,
	FOREIGN KEY ( candidato_id ) REFERENCES candidatos( candidato_id )  
 );

CREATE TABLE realizacoes ( 
	realizacao_id        INTEGER NOT NULL  PRIMARY KEY  ,
	realizacao_titulo    VARCHAR(255) NOT NULL    ,
	candidato_id         INTEGER     ,
	realizacao_ano       VARCHAR(4) NOT NULL    ,
	realizacao_descricao LONGTEXT NOT NULL    ,
	FOREIGN KEY ( candidato_id ) REFERENCES candidatos( candidato_id )  
 );
