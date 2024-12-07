-- Créer la base de données
CREATE DATABASE octopus_jjb;

-- Utiliser la base de données
USE octopus_jjb;

-- Créer la table des utilisateurs
CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    gender INT,
    date_of_birth DATE NOT NULL,
    status VARCHAR(19) DEFAULT 'user',
    grade VARCHAR(20) DEFAULT 'ceinture blanche',
    abonnement INT,
    FOREIGN KEY (gender) REFERENCES genres(id),
    FOREIGN KEY (abonnement) REFERENCES plans_tarifaires(id)
);


-- Créer la table des cours
CREATE TABLE cours (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date_cours DATE NOT NULL,
    type_cours VARCHAR(50) NOT NULL,
    heure_debut TIME NOT NULL,
    heure_fin TIME NOT NULL
);

-- Créer la table des inscriptions
CREATE TABLE inscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT,  -- Clé étrangère vers la table utilisateurs
    cours_id INT,        -- Clé étrangère vers la table cours
    date_inscription TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id),
    FOREIGN KEY (cours_id) REFERENCES cours(id)
);


-- Créer une table temporaire pour les dates
CREATE TEMPORARY TABLE dates (
    date_cours DATE
);

-- Insérer des dates dans la table temporaire (remplacer seq_0_to_729 par la bonne séquence)
INSERT INTO dates (date_cours)
SELECT DATE_ADD('2024-01-01', INTERVAL seq DAY)
FROM seq_0_to_729; -- Assurez-vous d'avoir une séquence pour 730 jours

-- Insérer les cours basés sur les dates
INSERT INTO cours (date_cours, type_cours, heure_debut, heure_fin)
SELECT 
    date_cours,
    CASE 
        WHEN DAYOFWEEK(date_cours) = 2 THEN 'JJB'         -- Lundi (2)
        WHEN DAYOFWEEK(date_cours) = 5 THEN 'JJB'         -- Jeudi (5)
        WHEN DAYOFWEEK(date_cours) = 7 THEN 'Grappling'   -- Samedi (7)
        WHEN DAYOFWEEK(date_cours) = 1 THEN 'Grappling'   -- Dimanche (1)
    END AS type_cours,
    CASE 
        WHEN DAYOFWEEK(date_cours) = 2 THEN '19:30:00'    -- Lundi
        WHEN DAYOFWEEK(date_cours) = 5 THEN '19:30:00'    -- Jeudi
        WHEN DAYOFWEEK(date_cours) = 7 THEN '12:00:00'    -- Samedi
        WHEN DAYOFWEEK(date_cours) = 1 THEN '14:15:00'    -- Dimanche
    END AS heure_debut,
    CASE 
        WHEN DAYOFWEEK(date_cours) = 2 THEN '21:15:00'    -- Lundi
        WHEN DAYOFWEEK(date_cours) = 5 THEN '21:15:00'    -- Jeudi
        WHEN DAYOFWEEK(date_cours) = 7 THEN '13:30:00'    -- Samedi
        WHEN DAYOFWEEK(date_cours) = 1 THEN '16:00:00'    -- Dimanche
    END AS heure_fin
FROM dates
WHERE DAYOFWEEK(date_cours) IN (1, 2, 5, 7);

-- Création table plan tarifaires --

CREATE TABLE plans_tarifaires (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_plan VARCHAR(50) NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    periode VARCHAR(20) NOT NULL, -- Exemple: "mois", "trimestre", "an"
    description TEXT
);

-- Insérer les trois plans tarifaires
INSERT INTO plans_tarifaires (nom_plan, prix, periode, description)
VALUES
    ('Paiement mensuel', 25.00, 'mois', 'Abonnement de 25 EUR par mois'),
    ('Paiement trimestriel', 100.00, 'trimestre', 'Abonnement de 100 EUR tous les 3 mois'),
    ('Paiement annuel', 300.00, 'an', 'Abonnement de 300 EUR pour une année complète');


CREATE TABLE genres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  genre_name VARCHAR(50) NOT NULL
);

-- Insérer les deux genres
INSERT INTO genres (genre_name) VALUES ('Masculin');
INSERT INTO genres (genre_name) VALUES ('Féminin');

-- Créer la table des grades
CREATE TABLE grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grade VARCHAR(100) NOT NULL
);

-- Insérer les différents grades
INSERT INTO grades (grade) VALUES 
('ceinture blanche'),
('ceinture blanche une barette'),
('ceinture blanche deux barettes'),
('ceinture blanche trois barettes'),
('ceinture blanche quatre barettes'),
('ceinture bleue'),
('ceinture bleue une barette'),
('ceinture bleue deux barettes'),
('ceinture bleue trois barettes'),
('ceinture bleue quatre barettes'),
('ceinture violette'),
('ceinture violette une barette'),
('ceinture violette deux barettes'),
('ceinture violette trois barettes'),
('ceinture violette quatre barettes'),
('ceinture marron'),
('ceinture marron une barette'),
('ceinture marron deux barettes'),
('ceinture marron trois barettes'),
('ceinture marron quatre barettes'),
('ceinture noire'),
('ceinture noire une barette'),
('ceinture noire deux barettes'),
('ceinture noire trois barettes'),
('ceinture noire quatre barettes'),
('ceinture noire cinq barettes (ceinture noire avec bande rouge)'),
('ceinture noire six barettes (ceinture noire avec bande rouge)'),
('ceinture noire sept barettes (ceinture rouge et noire)'),
('ceinture noire huit barettes (ceinture rouge et noire)'),
('ceinture noire neuf barettes (ceinture rouge)'),
('ceinture noire dix barettes (ceinture rouge)');




insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (1, 'Cinéma', 'Burkinshaw', 'sburkinshaw0@reference.com', 'Male', '2002-08-09', 'administrator', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (2, 'Thérèsa', 'Farrall', 'hfarrall1@youku.com', 'Male', '1992-12-03', 'user', 4);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (3, 'Mélanie', 'Paolacci', 'opaolacci2@indiegogo.com', 'Male', '1995-09-26', 'super-administrator', 13);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (4, 'Jú', 'Farguhar', 'mfarguhar3@biblegateway.com', 'Genderfluid', '1967-06-06', 'administrator', 1);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (5, 'Mélina', 'Dyter', 'cdyter4@last.fm', 'Male', '1970-08-20', 'administrator', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (6, 'Andrée', 'Scripture', 'jscripture5@slashdot.org', 'Male', '1997-12-18', 'super-administrator', 4);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (7, 'Estée', 'Velte', 'mvelte6@soundcloud.com', 'Female', '1981-07-03', 'administrator', 4);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (8, 'Rachèle', 'Hame', 'jhame7@businesswire.com', 'Male', '1986-06-23', 'super-administrator', 18);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (9, 'Maïlis', 'Bracer', 'tbracer8@cloudflare.com', 'Female', '2011-09-13', 'administrator', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (10, 'Cécilia', 'Ick', 'dick9@jigsy.com', 'Female', '1972-07-13', 'super-administrator', 8);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (11, 'Pò', 'Venart', 'evenarta@nhs.uk', 'Female', '2003-06-04', 'administrator', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (12, 'Dafnée', 'Woolston', 'mwoolstonb@skype.com', 'Female', '1993-03-24', 'super-administrator', 8);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (13, 'Danièle', 'Edler', 'nedlerc@newyorker.com', 'Female', '1965-01-05', 'super-administrator', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (14, 'Mélina', 'Bourton', 'lbourtond@miibeian.gov.cn', 'Genderqueer', '1983-06-26', 'user', 5);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (15, 'Camélia', 'Stripling', 'jstriplinge@java.com', 'Genderfluid', '2000-03-12', 'super-administrator', 1);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (16, 'Irène', 'Castanaga', 'icastanagaf@google.com.br', 'Female', '2023-08-15', 'administrator', 6);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (17, 'Léone', 'Cranstone', 'ecranstoneg@google.it', 'Female', '1988-12-28', 'user', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (18, 'Maëly', 'Trayton', 'jtraytonh@barnesandnoble.com', 'Female', '2008-06-12', 'super-administrator', 20);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (19, 'Néhémie', 'Gronav', 'sgronavi@whitehouse.gov', 'Male', '2007-06-15', 'user', 4);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (20, 'Kuí', 'O''Garmen', 'sogarmenj@posterous.com', 'Female', '1998-03-16', 'administrator', 3);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (21, 'Mårten', 'Haspineall', 'ahaspineallk@cdbaby.com', 'Polygender', '2005-11-09', 'administrator', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (22, 'Gaïa', 'Egarr', 'pegarrl@toplist.cz', 'Female', '1980-02-11', 'administrator', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (23, 'Angèle', 'Tickle', 'dticklem@washington.edu', 'Male', '1983-09-10', 'user', 21);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (24, 'Maëline', 'MacKowle', 'omackowlen@zimbio.com', 'Genderfluid', '1962-01-06', 'user', 4);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (25, 'Märta', 'Porch', 'cporcho@qq.com', 'Genderfluid', '1986-07-29', 'user', 13);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (26, 'Léana', 'Bessett', 'sbessettp@economist.com', 'Male', '2013-06-23', 'user', 18);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (27, 'Eugénie', 'Petrello', 'lpetrelloq@reuters.com', 'Female', '1964-01-24', 'administrator', 17);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (28, 'Loïs', 'Caneo', 'jcaneor@harvard.edu', 'Male', '1965-01-02', 'administrator', 2);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (29, 'Bécassine', 'Odhams', 'nodhamss@is.gd', 'Male', '2007-02-27', 'super-administrator', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (30, 'Bérénice', 'Gateman', 'jgatemant@hhs.gov', 'Female', '1991-03-01', 'super-administrator', 6);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (31, 'Cléa', 'Caverhill', 'bcaverhillu@mayoclinic.com', 'Female', '2002-02-08', 'user', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (32, 'Styrbjörn', 'Foucar', 'afoucarv@nps.gov', 'Male', '1997-12-29', 'user', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (33, 'Océane', 'Aleksashin', 'baleksashinw@chron.com', 'Female', '1996-03-02', 'administrator', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (34, 'Maéna', 'Brownlee', 'ebrownleex@scribd.com', 'Female', '1964-07-29', 'super-administrator', 9);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (35, 'Danièle', 'Hunnam', 'nhunnamy@theguardian.com', 'Male', '2006-12-19', 'administrator', 9);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (36, 'Yáo', 'Mee', 'dmeez@bravesites.com', 'Female', '1963-05-17', 'administrator', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (37, 'Garçon', 'Liddiatt', 'aliddiatt10@typepad.com', 'Male', '1985-08-14', 'administrator', 1);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (38, 'Illustrée', 'Farfull', 'efarfull11@1688.com', 'Male', '2000-01-24', 'user', 20);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (39, 'Michèle', 'Capon', 'hcapon12@yale.edu', 'Male', '2005-01-18', 'user', 2);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (40, 'Régine', 'Goulder', 'lgoulder13@twitpic.com', 'Female', '2008-04-02', 'user', 3);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (41, 'Josée', 'Lightbody', 'alightbody14@mac.com', 'Female', '1987-03-30', 'super-administrator', 17);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (42, 'Aimée', 'Rudman', 'trudman15@sina.com.cn', 'Female', '2008-10-31', 'administrator', 3);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (43, 'Renée', 'Gregg', 'bgregg16@yellowbook.com', 'Female', '2017-08-13', 'administrator', 3);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (44, 'Marie-josée', 'Stanners', 'cstanners17@feedburner.com', 'Female', '1993-05-11', 'user', 9);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (45, 'Illustrée', 'Strafford', 'dstrafford18@parallels.com', 'Female', '2002-06-03', 'administrator', 20);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (46, 'Léonore', 'Elcox', 'relcox19@vkontakte.ru', 'Male', '2022-06-02', 'administrator', 13);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (47, 'Maëly', 'Carrivick', 'scarrivick1a@gov.uk', 'Female', '1994-01-29', 'administrator', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (48, 'Geneviève', 'McFayden', 'nmcfayden1b@aol.com', 'Male', '1966-05-14', 'administrator', 4);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (49, 'Nadège', 'Renowden', 'crenowden1c@furl.net', 'Female', '1991-12-08', 'super-administrator', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (50, 'Yè', 'Brunker', 'mbrunker1d@bluehost.com', 'Male', '2018-06-26', 'administrator', 2);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (51, 'Thérèsa', 'Kindleysides', 'rkindleysides1e@foxnews.com', 'Female', '1981-09-10', 'user', 8);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (52, 'Lèi', 'Willimont', 'wwillimont1f@army.mil', 'Female', '2004-03-01', 'administrator', 21);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (53, 'Clélia', 'Darwent', 'zdarwent1g@multiply.com', 'Female', '2001-10-01', 'super-administrator', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (54, 'Rachèle', 'Bradmore', 'dbradmore1h@rakuten.co.jp', 'Male', '2011-12-25', 'user', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (55, 'Dà', 'Huburn', 'mhuburn1i@intel.com', 'Female', '1961-03-13', 'user', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (56, 'Clélia', 'Hargreave', 'jhargreave1j@macromedia.com', 'Male', '1989-12-28', 'administrator', 7);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (57, 'Céline', 'Dring', 'bdring1k@csmonitor.com', 'Male', '1980-07-29', 'administrator', 12);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (58, 'Görel', 'Seine', 'fseine1l@abc.net.au', 'Female', '1993-11-02', 'super-administrator', 20);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (59, 'Loïs', 'Kettle', 'lkettle1m@reuters.com', 'Male', '1981-07-08', 'super-administrator', 3);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (60, 'Félicie', 'MacCulloch', 'cmacculloch1n@jigsy.com', 'Female', '1995-11-28', 'super-administrator', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (61, 'Ruì', 'Corrie', 'scorrie1o@cmu.edu', 'Male', '1986-02-09', 'administrator', 21);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (62, 'Bérénice', 'Dumpleton', 'tdumpleton1p@myspace.com', 'Female', '1963-09-24', 'administrator', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (63, 'Marylène', 'Ledster', 'gledster1q@prnewswire.com', 'Male', '1990-03-18', 'administrator', 21);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (64, 'Kuí', 'Fitzsimons', 'afitzsimons1r@ebay.co.uk', 'Male', '1989-11-01', 'user', 9);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (65, 'Dà', 'Kalf', 'nkalf1s@businessinsider.com', 'Male', '1976-12-16', 'user', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (66, 'Bécassine', 'Ferreli', 'iferreli1t@youku.com', 'Female', '1984-04-11', 'administrator', 18);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (67, 'Marie-josée', 'Northedge', 'knorthedge1u@baidu.com', 'Male', '1965-07-31', 'user', 3);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (68, 'Méghane', 'Martinez', 'fmartinez1v@feedburner.com', 'Female', '1973-05-30', 'super-administrator', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (69, 'Adèle', 'Spandley', 'ispandley1w@addthis.com', 'Male', '1970-07-19', 'administrator', 6);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (70, 'Håkan', 'Stapylton', 'dstapylton1x@about.com', 'Male', '2011-02-03', 'super-administrator', 2);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (71, 'Gaétane', 'Elleyne', 'selleyne1y@symantec.com', 'Male', '1992-04-29', 'administrator', 2);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (72, 'Angélique', 'Newborn', 'anewborn1z@economist.com', 'Male', '1984-11-02', 'super-administrator', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (73, 'Salomé', 'Aldritt', 'caldritt20@live.com', 'Male', '1969-07-19', 'super-administrator', 17);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (74, 'Mélinda', 'Sewards', 'asewards21@google.co.uk', 'Male', '1967-04-24', 'user', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (75, 'Måns', 'covino', 'gcovino22@cisco.com', 'Female', '1979-09-09', 'super-administrator', 5);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (76, 'Mårten', 'Blemen', 'cblemen23@bravesites.com', 'Male', '1988-05-30', 'user', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (77, 'Anaël', 'Crabtree', 'mcrabtree24@jugem.jp', 'Female', '1967-09-25', 'super-administrator', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (78, 'Yóu', 'Kenna', 'hkenna25@europa.eu', 'Female', '1989-02-23', 'administrator', 13);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (79, 'Laurène', 'Hanmore', 'jhanmore26@omniture.com', 'Female', '2009-05-02', 'administrator', 21);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (80, 'Lén', 'Whorlow', 'cwhorlow27@gov.uk', 'Female', '2014-08-28', 'super-administrator', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (81, 'Irène', 'Trapp', 'ytrapp28@addthis.com', 'Female', '2004-11-29', 'user', 9);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (82, 'Marie-thérèse', 'Freshwater', 'efreshwater29@constantcontact.com', 'Female', '1985-04-09', 'user', 11);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (83, 'Ophélie', 'Gulk', 'ygulk2a@ucoz.ru', 'Male', '2023-02-12', 'super-administrator', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (84, 'Andréanne', 'Kynston', 'akynston2b@ebay.co.uk', 'Male', '1981-08-30', 'user', 9);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (85, 'Ráo', 'McConnal', 'emcconnal2c@ifeng.com', 'Female', '1970-02-22', 'user', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (86, 'Faîtes', 'Parkins', 'rparkins2d@studiopress.com', 'Female', '1980-06-15', 'super-administrator', 2);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (87, 'Östen', 'Rooms', 'mrooms2e@nhs.uk', 'Male', '1979-09-17', 'user', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (88, 'Angélique', 'Mosedill', 'kmosedill2f@domainmarket.com', 'Female', '2011-08-27', 'super-administrator', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (89, 'Noëlla', 'Baldery', 'vbaldery2g@whitehouse.gov', 'Genderqueer', '1970-06-17', 'administrator', 7);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (90, 'Adélaïde', 'Beagan', 'mbeagan2h@examiner.com', 'Genderfluid', '1987-12-08', 'super-administrator', 21);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (91, 'Intéressant', 'Kowalik', 'dkowalik2i@163.com', 'Female', '2011-03-10', 'administrator', 3);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (92, 'Fèi', 'Burleton', 'rburleton2j@wunderground.com', 'Female', '1989-07-17', 'super-administrator', 18);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (93, 'Sélène', 'Cauderlie', 'scauderlie2k@google.es', 'Female', '2012-10-15', 'administrator', 11);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (94, 'Göran', 'Leason', 'dleason2l@feedburner.com', 'Male', '2019-12-15', 'user', 5);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (95, 'Agnès', 'Widger', 'twidger2m@mtv.com', 'Male', '1997-12-16', 'user', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (96, 'Aimée', 'Clawson', 'aclawson2n@hugedomains.com', 'Male', '2009-05-21', 'super-administrator', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (97, 'Françoise', 'Andreasson', 'candreasson2o@shutterfly.com', 'Agender', '1990-02-02', 'administrator', 6);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (98, 'Lén', 'Comoletti', 'jcomoletti2p@domainmarket.com', 'Female', '1976-01-02', 'super-administrator', 9);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (99, 'Björn', 'Eshelby', 'ceshelby2q@alibaba.com', 'Male', '2012-01-21', 'administrator', 12);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (100, 'Amélie', 'Milam', 'gmilam2r@yandex.ru', 'Male', '1984-04-19', 'user', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (101, 'Åsa', 'Slainey', 'hslainey2s@quantcast.com', 'Female', '1990-02-15', 'super-administrator', 11);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (102, 'Valérie', 'Ortiger', 'mortiger2t@spiegel.de', 'Male', '2002-02-16', 'administrator', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (103, 'Dorothée', 'Weippert', 'eweippert2u@typepad.com', 'Female', '2010-09-03', 'super-administrator', 9);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (104, 'Yè', 'Lambin', 'hlambin2v@ucoz.ru', 'Male', '1961-10-21', 'super-administrator', 7);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (105, 'Nadège', 'Richardin', 'wrichardin2w@gizmodo.com', 'Female', '1961-03-01', 'administrator', 20);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (106, 'Maïly', 'Narramore', 'jnarramore2x@jimdo.com', 'Female', '2016-04-30', 'administrator', 21);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (107, 'Stévina', 'Pregal', 'spregal2y@oaic.gov.au', 'Female', '1998-11-03', 'super-administrator', 1);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (108, 'Zoé', 'Forkan', 'aforkan2z@acquirethisname.com', 'Female', '1961-10-08', 'administrator', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (109, 'Maïlys', 'Searle', 'bsearle30@purevolume.com', 'Genderqueer', '2013-06-15', 'user', 5);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (110, 'Régine', 'Crampin', 'acrampin31@1688.com', 'Male', '2011-10-21', 'super-administrator', 18);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (111, 'Lucrèce', 'Phelipeaux', 'fphelipeaux32@histats.com', 'Female', '2023-10-04', 'user', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (112, 'Médiamass', 'Larmour', 'jlarmour33@t.co', 'Female', '1961-07-01', 'administrator', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (113, 'Maïly', 'Thunders', 'dthunders34@yahoo.com', 'Non-binary', '1991-05-03', 'administrator', 12);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (114, 'Esbjörn', 'Kedwell', 'bkedwell35@cornell.edu', 'Female', '1991-12-04', 'super-administrator', 6);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (115, 'Pénélope', 'Copeman', 'rcopeman36@sphinn.com', 'Male', '1976-05-11', 'administrator', 20);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (116, 'Dà', 'Gregoli', 'mgregoli37@t.co', 'Female', '2022-10-29', 'user', 13);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (117, 'Aurélie', 'McKnockiter', 'gmcknockiter38@miitbeian.gov.cn', 'Female', '1993-07-22', 'user', 21);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (118, 'Anaël', 'Mussared', 'imussared39@photobucket.com', 'Female', '2001-09-17', 'super-administrator', 13);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (119, 'Marie-hélène', 'Scarisbrick', 'pscarisbrick3a@ezinearticles.com', 'Female', '1980-07-24', 'administrator', 17);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (120, 'Stéphanie', 'Twiddy', 'jtwiddy3b@over-blog.com', 'Agender', '2005-03-10', 'administrator', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (121, 'Tán', 'Nutkin', 'enutkin3c@oakley.com', 'Male', '1988-12-03', 'administrator', 20);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (122, 'Börje', 'Casham', 'ecasham3d@theguardian.com', 'Male', '2013-01-31', 'administrator', 18);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (123, 'Anaël', 'Larratt', 'dlarratt3e@live.com', 'Male', '2015-12-11', 'super-administrator', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (124, 'Lóng', 'Dunridge', 'adunridge3f@homestead.com', 'Male', '1996-12-25', 'user', 17);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (125, 'Adélaïde', 'Izkovicz', 'aizkovicz3g@google.cn', 'Polygender', '2001-04-22', 'super-administrator', 20);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (126, 'Solène', 'Picken', 'kpicken3h@free.fr', 'Male', '1971-02-24', 'super-administrator', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (127, 'Anaïs', 'Ladbrooke', 'nladbrooke3i@nydailynews.com', 'Male', '1981-01-05', 'user', 18);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (128, 'Pénélope', 'Elloy', 'velloy3j@mediafire.com', 'Male', '1963-08-10', 'administrator', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (129, 'Sélène', 'Robroe', 'frobroe3k@bravesites.com', 'Male', '1967-04-04', 'administrator', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (130, 'Mélys', 'Oris', 'boris3l@mozilla.com', 'Male', '2018-10-19', 'super-administrator', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (131, 'Stévina', 'Shearsby', 'gshearsby3m@biblegateway.com', 'Male', '2005-01-17', 'administrator', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (132, 'Méthode', 'Durdle', 'ddurdle3n@myspace.com', 'Female', '1968-02-15', 'administrator', 2);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (133, 'Célestine', 'Vedenyapin', 'bvedenyapin3o@foxnews.com', 'Male', '2007-06-18', 'super-administrator', 7);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (134, 'Joséphine', 'Martelet', 'wmartelet3p@elegantthemes.com', 'Male', '2006-03-10', 'administrator', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (135, 'Vénus', 'Limerick', 'rlimerick3q@mapy.cz', 'Female', '1986-02-13', 'administrator', 17);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (136, 'Marie-ève', 'Mattersley', 'lmattersley3r@nps.gov', 'Male', '1975-04-26', 'administrator', 19);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (137, 'Estève', 'Mackriell', 'smackriell3s@constantcontact.com', 'Female', '1965-12-02', 'user', 7);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (138, 'Åsa', 'Ellph', 'kellph3t@theguardian.com', 'Agender', '1977-05-26', 'super-administrator', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (139, 'Célia', 'Olford', 'molford3u@4shared.com', 'Female', '1961-05-13', 'administrator', 7);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (140, 'Maëlann', 'Hugues', 'whugues3v@microsoft.com', 'Female', '1971-10-02', 'super-administrator', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (141, 'Clémence', 'Coolahan', 'bcoolahan3w@google.com', 'Male', '2018-12-25', 'user', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (142, 'Laïla', 'Varfalameev', 'lvarfalameev3x@usa.gov', 'Female', '1961-06-20', 'user', 10);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (143, 'Agnès', 'Torrijos', 'dtorrijos3y@cmu.edu', 'Male', '1988-06-02', 'super-administrator', 15);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (144, 'Lyséa', 'McKirdy', 'fmckirdy3z@mac.com', 'Female', '2008-08-03', 'administrator', 6);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (145, 'Maëlle', 'MacConchie', 'dmacconchie40@nbcnews.com', 'Male', '2000-07-08', 'administrator', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (146, 'Méghane', 'Kear', 'ckear41@shutterfly.com', 'Female', '2008-11-03', 'user', 14);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (147, 'Pò', 'Robjohns', 'crobjohns42@ebay.co.uk', 'Female', '1972-12-26', 'administrator', 7);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (148, 'Kù', 'Sharville', 'fsharville43@digg.com', 'Female', '2001-04-12', 'administrator', 16);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (149, 'Régine', 'Berkery', 'mberkery44@mashable.com', 'Male', '2018-11-29', 'user', 4);
insert into utilisateurs (id, first_name, last_name, email, gender, date_of_birth, status, grade) values (150, 'Daphnée', 'Hastilow', 'ghastilow45@zimbio.com', 'Male', '1980-03-10', 'user', 13);
