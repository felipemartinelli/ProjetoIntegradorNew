create database clickIn;

use clickIn;

create table Usuario(
idUsuario int not null auto_increment,
nome varchar(100),
tipo varchar(2),
cnpj varchar(25),
telefone varchar(20),
razaoSocial varchar(150),
nomeFantasia varchar(100),
email varchar(80),
senha varchar(100),
constraint pk_usuario primary key(idUsuario)
);

create table InfoUsuario(
idInfo int not null auto_increment,
idUsuario int not null,
cpf varchar(20),
endereco text,
setor text,
cargo text,
infoAcademica text,
fotoPerfil text,
infoProfissional text,
infoEmpresa text,
infoVagas text,
constraint pk_infoUsuario primary key(idInfo),
constraint fk_infoUsuario foreign key (idUsuario) references Usuario(idUsuario)
);

create table Postagem(
idPostagem int not null auto_increment,
idUsuario	int not null,
texto text,
dataPostagem date,
imagem text,
constraint pk_postagem primary key (idPostagem),
constraint fk_postagem foreign key (idUsuario) references Usuario(idUsuario)
);

create table Comentario(
idComentario int not null auto_increment,
idPostagem int not null,
texto text,
dataComentario date,
imagem text,
constraint pk_comentario primary key (idComentario),
constraint fk_comentario foreign key (idPostagem) references Postagem(idPostagem)
);


create table Noticia(
idNoticia int not null auto_increment,
titulo text,
texto text,
dataNoticia date,
imagem text,
constraint pk_noticia primary key(idNoticia)
);

/*INSERTS EM USUARIO*/

insert into Usuario values (null, 'Luis Carlos Witts', 'PF', null, '11956300083', null, null, 'luis.witts@outlook.com',        '12345');
insert into Usuario values (null, 'Felipe Martinelli', 'PF', null, '11956300084', null, null, 'felipe.martinelli@outlook.com', '12345');
insert into Usuario values (null, 'joão da Silva'    , 'PF', null, '11956300083', null, null, 'luis.witts@outlook.com'       ,'12345');
insert into Usuario values (null, 'ENZO GABRIEL'     , 'PF', null, '11956300084', null, null, 'felipe.martinelli@outlook.com','12345');
insert into Usuario values (null, 'MIGUEL '          , 'PF', null, '11956300085', null, null, 'luis.witts@outlook.com'       ,'12345');
insert into Usuario values (null, 'ARTHUR '          , 'PF', null, '11956300086', null, null, 'felipe.martinelli@outlook.com','12345');
insert into Usuario values (null, 'JOÃO MIGUEL'      , 'PF', null, '11956300087', null, null, 'luis.witts@outlook.com'       ,'12345');
insert into Usuario values (null, 'MARIA EDUARDA'    , 'PF', null, '11956300088', null, null, 'felipe.martinelli@outlook.com','12345');
insert into Usuario values (null, 'MARIA CLARA '     , 'PF', null, '11956300089', null, null, 'luis.witts@outlook.com'       ,'12345');
insert into Usuario values (null, 'HEITOR'           , 'PF', null, '11956300090', null, null, 'felipe.martinelli@outlook.com','12345');
insert into Usuario values (null, 'PEDRO HENRIQUE'   , 'PF', null, '11956300091', null, null, 'luis.witts@outlook.com'       ,'12345');
insert into Usuario values (null, null, 'PJ','10.984.785/0001‐38', '11956300092', '2 FLEX TELECOM LTDA ‐ ME', '2FLEX TELECOM', 'empresa1@outlook.com','12345');
insert into Usuario values (null, null, 'PJ', '11.866.957/0001‐31', '11956300093', ' A C BOSLOOPER IMPORTACAO E EXPORTACAO', 'BOSLOOPER TECNOLOGIA FERROVIARIA', 'empresa2@outlook.com', '12345');
insert into Usuario values (null, null, 'PJ', '01.566.337/0001‐23', '11956300094', 'A KAMIDE ‐ INFORMATICA ME', 'ISPSHOP', 'empresa3@outlook.com','12345');
insert into Usuario values (null, null, 'PJ', '01.137.391/0001‐53', '11956300095',  'A. S. AVIONICS SERVICES S.A', 'AVIONICS SERVICES' , 'luis.witts@outlook.com','12345'); 

/*INSERTS EM POSTAGEM*/

insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 1, 'Postagem 1','2020-01-28', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 3, 'Postagem 2','2020-01-27', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 4, 'Postagem 3','2020-01-27', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 5, 'Postagem 4','2020-01-27', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 6, 'Postagem 5','2020-01-22', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 7, 'Postagem 6','2020-01-23', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 8, 'Postagem 7','2020-01-10', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 9, 'Postagem 8','2020-01-09', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 10, 'Postagem 9','2020-01-01', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 1, 'Postagem 10','2020-01-10', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 1, 'Postagem 11','2020-01-13', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 2, 'Postagem 12','2020-01-14', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 3, 'Postagem 13','2020-01-19', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 4, 'Postagem 1','2020-01-21', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 14, 'Postagem 465','2020-01-01', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 15, 'Postagem 213','2020-01-01', null);
insert into Postagem (idPostagem,idUsuario,texto,dataPostagem,imagem) values(null, 15, 'Postagem 132','2020-01-01', null);

/*INSERTS EM COMENTARIOS*/

insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,1,'Comentario 1', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,1,'Comentario 2', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,1,'Comentario 3', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,1,'Comentario 4', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,2,'Comentario 1', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,3,'Comentario 1', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,4,'Comentario 1', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,7,'Comentario 1', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,7,'Comentario 1', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,14,'Comentario 1', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,14,'Comentario 2', '2020-01-28', null);
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,14,'Comentario 3', '2020-01-28', null);
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,13,'Comentario 1', '2020-01-28', null);
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,15,'Comentario 1', '2020-01-28', null); 
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,15,'Comentario 2', '2020-01-28', null);  
insert into Comentario (idComentario,idPostagem,texto,dataComentario,imagem) value(null,10,'Comentario 1', '2020-01-28', null);  

/*INSERTS EM INFO_USUARIO*/

insert into InfoUsuario values (null,1, '502-194-418-55', 'RUA 7 RUA 7 RUA 7', null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,2, '503-194-418-55','RUA 7 RUA 7', null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,3, '504-194-418-55', 'RUA 7'    , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,4, '505-194-418-55','RUA 7 RUA 7'     , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,5, '506-194-418-55','RUA 7 '          , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,6, '507-194-418-55','RUA 7 '          , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,7, '508-194-418-55','RUA 7 RUA 7'      , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,8, '509-194-418-55','RUA 7 RUA 7'    , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,9, '510-194-418-55','RUA 7 RUA 7 '     , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,10, '517-194-418-55','RUA 7'           , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null,11, '518-194-418-55','RUA 7'   , null, 'desenvolvedor', 'ensino superior', 'https://osegredo.com.br/wp-content/uploads/2017/07/9-maneiras-de-se-tornar-uma-pessoa-melhor-830x450.jpg', 'desempregado', null,'dev jj');
insert into InfoUsuario values (null, 12, null,'RUA 7', 'bancario', null, null, 'http://www.engeplusempresas.com.br/arquivos/img/img_engeplus.jpg', null, 'entidade privada','dev jj');
insert into InfoUsuario values (null, 13, null,'RUA 7', 'bancario', null, null, 'http://www.engeplusempresas.com.br/arquivos/img/img_engeplus.jpg', null, 'entidade privada','dev jj');
insert into InfoUsuario values (null, 14, null,'RUA 7', 'bancario', null, null, 'http://www.engeplusempresas.com.br/arquivos/img/img_engeplus.jpg', null, 'entidade privada','dev jj');
insert into InfoUsuario values (null, 15, null,'RUA 7', 'bancario', null, null,  'http://www.engeplusempresas.com.br/arquivos/img/img_engeplus.jpg', null ,'entidade privada','dev jj'); 



/*INSERTS EM NOTICIA*/

insert into Noticia values(null, 'Acessibilidade Digital: por que o futuro tem tudo a ver com inclusão?',
'Falar em acessibilidade significa ter empatia, colocar-se no lugar do outro – não como um gesto de bondade, mas reconhecendo no outro alguém como você, que precisa se comunicar, estar conectado com o mundo e ter as mesmas oportunidades. E mesmo sabendo que, uma em cada sete pessoas no mundo possui algum grau de deficiência, acessibilidade digital não é só para esse grupo de pessoas, como você já deve ter percebido.',
'2020-01-28',null);

insert into Noticia values(null, 'Acessibilidade vira item obrigatório em novos apartamentos a partir desta segunda',
'As construtoras e incorporadoras serão obrigadas a construir apartamentos que possam ser adaptados às pessoas com deficiência física ou mobilidade reduzida. Os projetos deverão considerar, por exemplo, largura de portas e corredores, desníveis e altura de janelas.',
'2020-01-20', null);

insert into Noticia values(null, 'Professor aponta necessidade de debate sobre acessibilidade em Campina Grande','Segundo Lívio, um decreto específico para construtoras, no qual é preciso pôr em prática a Lei Brasileira de Inclusão da Pessoa com Deficiência nas unidades habitacionais, passou a valer a partir dessa segunda-feira (27) no Brasil. Ele avaliou que Campina Grande “precisa parar e conversar com as pessoas” para que políticas públicas de acessibilidade sejam implementadas pensando nos mais diversos tipos de deficiência.',
'2020-01-27', null);

insert into Noticia values(null, 'Dia de Inclusão reúne acessibilidade e sensibilidade em Capão da Canoa','Essa ação fez parte do primeiro Dia de Inclusão do Estação Verão Sesc que promove, ao longo do sábado (18), uma série de atividades de acessibilidade e inclusão para pessoas com deficiência. A iniciativa surgiu da observação do aumento na demanda pelas cadeiras anfíbias - aquelas adaptadas com rodas grandes para levar cadeirantes ao mar -, conta a coordenadora estadual do Estação Verão, Melissa Stoffel. ',
'2020-01-18', null);

insert into Noticia values(null, 'CI analisa obrigação de acessibilidade em programas habitacionais públicos','Os projetos e tipologias construtivas adotados em programas habitacionais públicos ou subsidiados com recursos públicos deverão passar a considerar os princípios do desenho universal, com vistas à acessibilidade, quando da aquisição pela pessoa com deficiência. Essa novidade está prevista no PLS 279/2016, pronto para votação na Comissão de Infraestrutura (CI).',
'2020-01-23', null);

insert into Noticia values(null, 'Guarujá institui Plano Municipal de Acessibilidade','Guarujá acaba de ganhar o seu Plano Municipal de Acessibilidade, instituído pela Lei nº 4.754, que reúne política públicas e ações inclusivas voltadas à pessoa com deficiência. O plano foi criado pela Comissão Permanente de Acessibilidade, que tem por objetivo tornar a cidade cada vez mais acessível para seus munícipes.',
'2020-01-24', null);

insert into Noticia values(null,'TI como propulsora para acessibilidade','O que define a palavra acessibilidade? Se não uma via de duas mãos, aonde cada um pode ir e voltar por ela. Pensar em acessibilidade é aceitar que o mundo pode ser igual para todos. Mas quando falamos de igualdades em um mundo contemporâneo, surge a palavra “utopia”, e como Eduardo Galeano definiria a utopia é a mesma forma que defino e penso sobre a acessibilidade. “A utopia está lá no horizonte.',
'2020-01-10', null);

insert into Noticia values(null,'Lei da Inclusão entra em vigor este mês e prevê acessibilidade em todos os novos projetos residenciais','Ter uma casa adaptada e equipamentos tecnológicos e com design são elementos essenciais para quem tem nenhuma ou pouca locomoção e necessita de ajuda diária. Esses quesitos, no entanto, pesam no bolso. Surge no horizonte uma solução, a Lei de Inclusão. ',
'2020-01-16', null);

insert into Noticia values(null,'CIDADESGDF deve garantir estruturas de acessibilidade na Rodoviária','Conforme a decisão do Tribunal de Justiça do Distrito Federal e Territórios, o Governo do DF deverá apresentar ainda a documentação de instalação e de manutenção dos equipamentos e adotar providências para o funcionamento de todos os elevadores e escadas rolantes da Rodoviária.',
'2019-12-16', null);

insert into Noticia values(null,'Projeto dispensa micro e pequenas empresas do cumprimento de regras de acessibilidade','O Projeto de Lei 5687/19 dispensa as microempresas e empresas de pequeno porte enquadradas no regime do Simples Nacional do atendimento às regras de acessibilidade previstas na legislação como condição para recebimento do alvará de funcionamento ou sua renovação. O texto tramita na Câmara dos Deputados.',
'2020-01-23',null);

insert into Noticia values(null,'Grupo de deficientes físicos se une em protesto à falta de acessibilidade de Itaquaquecetuba','Moradores relatam problemas nas calçadas, banheiros públicos e transportes. A Prefeitura de Itaquaquecetuba informou que melhorias em calçadas no centro e também dos banheiros estão sendo feitas e que vai criar mais vagas de estacionamento para pessoas com deficiência.',
'2020-01-20',null);

insert into Noticia values(null,'Bolsonaro estende por um ano prazo para acessibilidade em salas de cinema','O presidente Jair Bolsonaro assinou nesta terça-feira (31/12) uma Medida Provisória (MP) que altera a Lei nº 13.146 de 2015 que versa sobre a Lei Brasileira de Inclusão da Pessoa com Deficiência (LBI). A medida estende por mais um ano o prazo para que as salas de cinema ofereçam recursos de acessibilidade para a pessoa com deficiência visual e auditiva. A determinação está na Instrução Normativa 128/2016, da Agência Nacional do Cinema (Ancine). O prazo venceria neste 1º de janeiro de 2020.',
'2019-12-31', null);

insert into Noticia values(null,'MP requer que prefeitura realize campanha sobre acessibilidade das calçadas em Fortaleza','O Ministério Público do Ceará ingressou com uma ação civil pública nesta terça-feira (14) para que o município de Fortaleza realize uma campanha de conscientização sobre a importância da acessibilidade das calçadas.',
'2020-01-15', null);

insert into Noticia values(null,'Novos empreendimentos residenciais devem ser 100% adaptáveis para pessoas com mobilidade reduzida','Passam a valer neste domingo (26) as novas exigências de acessibilidade voltadas a prédios residenciais, determinadas pelo decreto federal 9451, de 2018. Construtoras e incorporadoras tiveram um ano e meio para se adequar às demandas da lei, que incluem ajustes nas aberturas, possibilidade de giro no espaço interno dos apartamentos e adequações nas áreas comuns dos novos edifícios.',
'2020-01-24', null);

insert into Noticia values(null,'A acessibilidade em centros históricos de cidades mineiras','No Brasil, 68 conjuntos urbanos são tombados como Patrimônio Cultural pelo Iphan (Instituto de Patrimônio Histórico e Artístico Nacional), segundo dados de 2017. O tombamento desses espaços tem como objetivo preservar a história e a cultura do país. ',
'2019-11-16', null);


select * from Noticia;
select * from Usuario;
select * from Postagem;
select * from Comentario;
select * from InfoUsuario;

/*Selecionar um usuario pelo ID*/
select * from Usuario where idUsuario = 1;

/*Selecionar noticia pela data*/
select * from noticia where dataNoticia = '2020-01-28';

/*Selecionar usuarios cadastrados como empresa*/
select * from Usuario where tipo = 'PJ';

/*Selecionar nome de usuario que tem ensino superior*/
select nome, infoAcademica from Usuario inner join InfoUsuario using (idUsuario);

/*Selecionar nome de usuario e postagens realizadas pelo usuario 1*/
select nome, texto from Usuario inner join Postagem using (idUsuario) where idUsuario = 1;

/*Selecionar nome de usuario, postagem e numero de comentarios do usuario 1*/
select nome, postagem.texto, count(comentario.texto) from Usuario 
							inner join Postagem using (idUsuario)
							inner join Comentario using (idPostagem) 
                            where idUsuario = 1 group by (idPostagem);

                              
