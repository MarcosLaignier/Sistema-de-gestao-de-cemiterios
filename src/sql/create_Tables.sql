Criando tabela unidade Cemiterios
CREATE TABLE
    SGCUNIDADES
    (
        UNDCODIGO VARCHAR2(6),
        UNDNOME VARCHAR2(100),
        UNDENDERECO VARCHAR2(70),
        UNDNUMERO INTEGER,
        UNDCIDADE VARCHAR2(60),
        UNDESTADO VARCHAR2(2),
        UNDRESPONSAVEL VARCHAR2(18),
    );

Criando tabelas Sepulturas

    CREATE TABLE
    SGCSEPULTURAS
    (
        SEPCODIGO VARCHAR2(20),
        SEPDESCRICAO VARCHAR2(100),
        SEPCEMITERIO VARCHAR2(100),
        
    );

Criando tabela Falecidos

CREATE TABLE
    SGCFALECIDOS
    (
        FALCODIGO VARCHAR2(6),
        FALNOME VARCHAR2(100),
        FALCPF VARCHAR2(11),
        FALSEXO VARCHAR2(10),
        FALNASCIMENTO DATE,
        FALNATURALIDADE VARCHAR2(30),
        FALFALECIMENTO DATE,
        FALMEDRESP VARCHAR2(60),
    );

    

     Criando tabelas Funerarias

    CREATE TABLE
    SGCFUNERARIAS
    (
        FUNCODIGO VARCHAR2(20),
        FUNDESCRICAO VARCHAR2(100),
        FUNCIDADE VARCHAR2(100),
        FUNENDERECO VARCHAR2(100),
        FUNNUMERO INTEGER
        
    );

    Criando Tabela Sepultamentos

    CREATE TABLE
    SGCSEPULTAMENTOS
    (
        SEPFALECIDO  VARCHAR2(100);
    );