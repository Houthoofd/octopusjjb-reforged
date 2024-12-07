-- Créer la base de données
CREATE DATABASE octopus_jjb;

-- Utiliser la base de données
USE octopus_jjb;


-- Créer la table des genres
CREATE TABLE genres (
  id INT AUTO_INCREMENT PRIMARY KEY,
  genre_name VARCHAR(50) NOT NULL
);

-- Insérer les deux genres
INSERT INTO genres (genre_name) VALUES ('Masculin'), ('Féminin');

-- Créer la table des plans tarifaires
CREATE TABLE plans_tarifaires (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom_plan VARCHAR(50) NOT NULL,
    prix DECIMAL(10, 2) NOT NULL,
    periode VARCHAR(20) NOT NULL, -- Exemple: "mois", "trimestre", "an"
    description TEXT
);

-- Insérer les trois plans tarifaires
INSERT INTO plans_tarifaires (nom_plan, prix, periode, description) VALUES
    ('Paiement mensuel', 25.00, 'mois', 'Abonnement de 25 EUR par mois'),
    ('Paiement trimestriel', 100.00, 'trimestre', 'Abonnement de 100 EUR tous les 3 mois'),
    ('Paiement annuel', 300.00, 'an', 'Abonnement de 300 EUR pour une année complète');

-- Créer la table des utilisateurs
CREATE TABLE utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100),
    gender INT,  -- Clé étrangère pour le genre
    date_of_birth DATE NOT NULL,
    status VARCHAR(19) DEFAULT 'user',
    grade VARCHAR(20) DEFAULT 'ceinture blanche',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    abonnement INT,  -- Clé étrangère pour le tarif (plan)
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

-- Créer la table des grades
CREATE TABLE grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grade VARCHAR(100) NOT NULL
);

CREATE TABLE reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    utilisateur_id INT,
    cours_id INT,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateurs(id) ON DELETE CASCADE,
    FOREIGN KEY (cours_id) REFERENCES cours(id) ON DELETE CASCADE,
    UNIQUE (utilisateur_id, cours_id) -- pour éviter les réservations en double pour le même utilisateur et le même cours
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


insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (1, 'Hannie', 'Sivess', 'hsivess0@dot.gov', '$2a$04$syCwDsAkuXUL7llfxLKmFelz2lrxEJDhn.2i0hJjtcRt5Ko5EDVku', 1, '2024-08-07', 'user', 14, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (2, 'Verne', 'Schwant', 'vschwant1@quantcast.com', '$2a$04$uWEAdRObu4WjUWLbBdYh4OsGC4oKAcUICQ1HzyK4XdtIhFj8HGADW', 2, '2024-09-18', 'super-administrator', 9, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (3, 'Stanleigh', 'Darco', 'sdarco2@ucsd.edu', '$2a$04$AQDVP7LjS1ojg7njm/AiT.HneM3pnE3QEeybriD63GEkYhAmh3cc.', 1, '2024-06-28', 'user', 20, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (4, 'Eleanora', 'Penketh', 'epenketh3@yolasite.com', '$2a$04$f42iW3d.q5HMdG0IGWYR1.7odXfI.2llu51eVfntWeHSrcHisqPjG', 1, '2024-05-09', 'administrator', 9, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (5, 'Priscella', 'Pleat', 'ppleat4@blog.com', '$2a$04$0oWdkXNz1mR2DiRmVmj.jOWup4kicwO4hgWO.40X25TSx7e.9Iasa', 2, '2024-08-22', 'user', 20, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (6, 'Brant', 'Stothert', 'bstothert5@altervista.org', '$2a$04$aHewPztEXoy4KUANh1iS3ueML5WzegnLQlVQBuFzvzjcz4Ur7Ku.S', 1, '2024-07-14', 'user', 26, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (7, 'Lindi', 'Gulleford', 'lgulleford6@cnet.com', '$2a$04$U/dTzK.pvrPjooNnGBD6luB5rr0i1SNfx/YfTVX1dcnPWQmrwFHu6', 1, '2024-01-30', 'administrator', 15, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (8, 'Evangeline', 'Dainton', 'edainton7@spotify.com', '$2a$04$HoSJJXjs3IMH2HlMsHOwYumc5STOqcrp3B6umOHU1tKLOz6pWZTZq', 1, '2024-09-28', 'user', 18, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (9, 'Ephrayim', 'Paeckmeyer', 'epaeckmeyer8@nature.com', '$2a$04$Qw/lRktf1LlCaIESTxJJTe56NW6IBVWKm3qoe1CD.NmKawYZiBSO2', 2, '2024-03-20', 'super-administrator', 21, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (10, 'Tiena', 'Skate', 'tskate9@merriam-webster.com', '$2a$04$F2jO2WALNUL65X7/WIYr5utQMV7ON37IDOcGgNadg86qJ2Xa7ZKcq', 1, '2024-11-01', 'super-administrator', 4, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (11, 'Dee', 'Samber', 'dsambera@thetimes.co.uk', '$2a$04$e3EOhMqQHEebxL7wyvnyP.D09Qjzv1ekXL7gKKF6uPDKDIfQCWnue', 2, '2024-04-12', 'administrator', 17, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (12, 'Flss', 'Sheer', 'fsheerb@slashdot.org', '$2a$04$DW0jhzo14TCipN0A4Fr2iurdQR2pHwxvYxBpBVfMkkAqBO8cWtbuO', 2, '2024-11-01', 'user', 7, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (13, 'Charin', 'Whistlecraft', 'cwhistlecraftc@unesco.org', '$2a$04$U4sQq5otJmKKtZRCspNWUOncwMH7Ua/Q0u1tuypDI0O2WzTB18hva', 2, '2024-01-09', 'super-administrator', 24, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (14, 'Adolpho', 'Oak', 'aoakd@squarespace.com', '$2a$04$wRxRXab7SzF4vEXy2mcm8uM.N52dvWVhjPesJyUT2h8iuZmewbdwe', 1, '2023-12-31', 'user', 11, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (15, 'Susanetta', 'Malyan', 'smalyane@guardian.co.uk', '$2a$04$7SOmXjGxcB8czmiIKxyaW.v1Mh7NxlFVuOCiRf4cR8LdSMffJbj8e', 2, '2024-01-04', 'administrator', 4, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (16, 'Shannen', 'Manuelli', 'smanuellif@yelp.com', '$2a$04$R9GevuACJ/wOEpzTo36itOMydgSGIIq962gUSLmxLq61FdZGrVN/m', 1, '2024-09-20', 'user', 17, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (17, 'Neal', 'Pratley', 'npratleyg@un.org', '$2a$04$1A.At9chYzck7nCFgDgxd.F.G/I83IzegEyHIk60K4UamVWYFFPbe', 2, '2024-02-03', 'user', 16, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (18, 'Loralie', 'Coate', 'lcoateh@rambler.ru', '$2a$04$9JL/rC9ZgRiH6cZVMdBFsubQJBYDY6HWlbDPH5RkwFjGLNNf9lWXq', 2, '2024-07-02', 'administrator', 20, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (19, 'Willis', 'Goodlet', 'wgoodleti@purevolume.com', '$2a$04$d0/MqjaoI7i1NJQ5BNqggOmeb3hVv/d0pyvoQfDn8CFMpOakKznIe', 1, '2024-07-16', 'administrator', 17, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (20, 'Cordula', 'Kilbane', 'ckilbanej@amazon.co.uk', '$2a$04$98ttTFBm2b4yohiFAzQI0uF01mNiHYdMbdsdCpWA4129tH7G08Ati', 2, '2024-09-20', 'user', 21, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (21, 'Tab', 'Yakebovitch', 'tyakebovitchk@domainmarket.com', '$2a$04$GqfR6sY/Es3Yeq6YNtQoT.9j15JF8nfZlVVeLo4K1iGEDeZbqeJHq', 2, '2024-03-01', 'super-administrator', 19, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (22, 'Desi', 'Mandifield', 'dmandifieldl@patch.com', '$2a$04$Tq1czp6eQZdZfjkmVNhAY.3BT.vDsgcYFgNa9h8nfpsr18ulMv19O', 1, '2024-04-24', 'user', 29, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (23, 'Janina', 'McCrostie', 'jmccrostiem@feedburner.com', '$2a$04$zIkJzHXjkuxPFu1FPwE/hu3tC1FdNmTK3NzBM8otFj0JMp0YjwERi', 2, '2024-05-28', 'administrator', 5, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (24, 'Tobias', 'Di Bernardo', 'tdibernardon@google.nl', '$2a$04$bmfhjuz2YxHqizdfVcU/s.HDxhi29rKwlsCU4tIjCiI0Wlo62qwYe', 1, '2024-04-10', 'administrator', 15, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (25, 'Kevan', 'Magor', 'kmagoro@ask.com', '$2a$04$AvjfAIwXAWivH.QfZpzQSeWsihBznefHKh0gwE15g9W.SYupr1FV6', 2, '2024-03-08', 'administrator', 28, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (26, 'Bethina', 'Giddons', 'bgiddonsp@wsj.com', '$2a$04$eGonJGsjrpcytB/X9BzIOelHYaMUdDoeOKlMbmE3EAYxJqicJ/agu', 2, '2024-02-28', 'administrator', 29, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (27, 'Burch', 'Fraschini', 'bfraschiniq@angelfire.com', '$2a$04$NFYr.seuKZBFCaMbW3i50uf94bmPgKQ/obLV9Cu3D/334TBRyym/W', 2, '2024-06-06', 'user', 21, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (28, 'Kellina', 'Summerlie', 'ksummerlier@bloomberg.com', '$2a$04$.sBm0/Z2VGPKJffnCJTou.X/0xk8846CvmhqccRKSRvvsLQjUsgOG', 1, '2024-09-26', 'user', 30, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (29, 'Lexie', 'Allsepp', 'lallsepps@etsy.com', '$2a$04$MfSPotWK88FKNt7.u4TwJuo6RFP8OZtbfAeMSQ3QB10pNoESuGfFW', 2, '2024-02-15', 'administrator', 26, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (30, 'Cletis', 'Mowne', 'cmownet@foxnews.com', '$2a$04$SVS3COMhe8DZoJah5HOqh.HMz6OaRe2.F9hMdGXeSTt7Ovn2sE0v2', 1, '2024-06-16', 'user', 4, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (31, 'Jemimah', 'Castilljo', 'jcastilljou@dyndns.org', '$2a$04$bBP/i84m73L3X62jbXB4aebSxjM2Wc5UIgQ5BDfzMVb6kbga17o0e', 1, '2024-10-04', 'super-administrator', 27, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (32, 'Pascale', 'Dipple', 'pdipplev@walmart.com', '$2a$04$8XGpAFlAyDa0lJKAFLS98evH1xvM3E.Ff69gRGfFxIgJrrf8kDf5K', 2, '2024-04-22', 'super-administrator', 1, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (33, 'Louella', 'Pym', 'lpymw@so-net.ne.jp', '$2a$04$TgfYEVmZ4iSkfKUXYo13sesCs6byAYWcv3O2VurBxFo6pQ9izxiTC', 2, '2023-12-23', 'super-administrator', 7, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (34, 'Burtie', 'Howse', 'bhowsex@about.com', '$2a$04$trSXQJFD42iolLUPMmD6Ze6zCBqD9FlVn0fN7cqIfjyYvfP0psUp.', 2, '2024-03-07', 'administrator', 11, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (35, 'Jonathan', 'Ferrai', 'jferraiy@bigcartel.com', '$2a$04$PPRdAhZpNhf8ewCQNllObOzp.p1zoifrtR1pBeW20.OyRqkB1ThCG', 1, '2024-02-26', 'user', 18, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (36, 'Percival', 'Burland', 'pburlandz@xing.com', '$2a$04$kji6iUEdxVsII82h/w0j2uLsP6VO9wbdPhvP8AvDUTdBqqPx6PUCK', 1, '2024-02-17', 'super-administrator', 25, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (37, 'Adelaide', 'Beasleigh', 'abeasleigh10@latimes.com', '$2a$04$l5rHEf14C9zVAomxZ6dCX.Ky/IZ5gAqGs7jkSUkstMB1yEbADiwCC', 1, '2024-11-11', 'administrator', 22, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (38, 'Aldric', 'Naul', 'anaul11@plala.or.jp', '$2a$04$pFb/EQ92gDg1t7fCy8d1hefmhZhUXzmD9BX1jbzCWkSLvr0r7fDe2', 1, '2024-03-13', 'administrator', 28, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (39, 'Kacy', 'Lansdale', 'klansdale12@surveymonkey.com', '$2a$04$FMfjxzpo3q.nM5xfEZP0Bu8SMMuXKQ2V2gt6njuqiXSPbPSdp2ymC', 1, '2023-11-24', 'super-administrator', 15, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (40, 'Sarita', 'Arran', 'sarran13@canalblog.com', '$2a$04$SaJZcHhXn.8dE6j6WqJKN.mxXgyOIMRW8N4jjrzzXkJPeGStedJV2', 2, '2024-02-11', 'super-administrator', 9, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (41, 'Nomi', 'Jizhaki', 'njizhaki14@de.vu', '$2a$04$mrv.0tcX.NfABqpmrSiaTOsNBdGUkJ1bklyXRAwXrfioz4duMlVQu', 1, '2023-12-10', 'administrator', 10, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (42, 'Burnaby', 'Ashleigh', 'bashleigh15@yale.edu', '$2a$04$6UDZ5HSJwRL5CI17Zn58duiKng3t3EDPVS9V3n6Qyvwix0pouxYmm', 1, '2023-12-15', 'super-administrator', 28, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (43, 'Clarabelle', 'Crayker', 'ccrayker16@bandcamp.com', '$2a$04$KhtvpFxq05f5Dg3pxs8HQeis/jXmoWaszD5DcUNz5.8XwkF4qnCAO', 1, '2024-02-28', 'administrator', 17, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (44, 'Bonnie', 'Vedyasov', 'bvedyasov17@google.com.hk', '$2a$04$1cMtNclrcsB/RdsShN81s.fXrpUSBJl2wlEF3FRPPDdx1PuLkYiM2', 2, '2024-01-12', 'administrator', 12, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (45, 'Cynde', 'Valerius', 'cvalerius18@1688.com', '$2a$04$mAanhMs3ynQxAVO9MHtorOcB8TD8byp6QicjDIu5RcE32ULLBeYRS', 2, '2023-12-05', 'user', 25, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (46, 'Matthew', 'Saph', 'msaph19@washington.edu', '$2a$04$Z.of0E1Q4rP7JHgsIfO73utwQIPXY0jKbDlCJkDh9rV8.4zzcbDHO', 1, '2024-09-16', 'administrator', 10, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (47, 'Kurtis', 'Maddin', 'kmaddin1a@walmart.com', '$2a$04$tf4LVoFL.paypT4Si9E69u5gVA52zIIXT8r5PiRuEWqsP/FCOgr7S', 1, '2024-03-23', 'administrator', 3, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (48, 'Beverly', 'Devereu', 'bdevereu1b@multiply.com', '$2a$04$w4mKOWNet1lp9tiOPdokduqOoVeQgy40YZGF/fduea8oxzD70n3gO', 2, '2024-04-28', 'user', 31, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (49, 'Erinn', 'Speedy', 'espeedy1c@wufoo.com', '$2a$04$h3IHwJFf4PvuAiu6CgiWI.UcfMvZtW1a88QjdrxihrT8KXyRo3R/S', 1, '2024-05-21', 'user', 31, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (50, 'Salvatore', 'Fawlkes', 'sfawlkes1d@noaa.gov', '$2a$04$j5eLgoxqP221OG6czXKVN.SL7/76m4VAUIJztc7FDWULGdzklmwiC', 2, '2024-03-14', 'administrator', 5, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (51, 'Almeda', 'Donett', 'adonett1e@scribd.com', '$2a$04$sqPBt0JqfeN2ZaKO.Wc/sONPKT3SVyplYrmmxwFYa21Lw1jmlmkVy', 1, '2024-04-25', 'administrator', 13, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (52, 'Malena', 'MacColgan', 'mmaccolgan1f@51.la', '$2a$04$Gz9OQxyRI0iSHIbS1YElWuGhZdj3l8a0YesFgjo7VkCsced2hYQpC', 1, '2024-08-11', 'user', 4, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (53, 'Vale', 'Peake', 'vpeake1g@nymag.com', '$2a$04$DyEZMVMKm4/X.3OCFDgdaOrZzBgO/Z6/C6mMKN.evkNyFtak8/bF6', 1, '2023-12-24', 'administrator', 24, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (54, 'Lauri', 'Greyes', 'lgreyes1h@mashable.com', '$2a$04$BxHfYogm7vsBxuQD6o68uesDY0wonmU8aUdsmm.AT0xCwdpHbvdTK', 2, '2024-02-02', 'user', 22, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (55, 'Pascal', 'Devonish', 'pdevonish1i@forbes.com', '$2a$04$i3BX0YNQh8CcYwB5ppZlhuzVNgMhqdA.hERKaQYmNZ.a5aU4ODjCm', 2, '2024-03-12', 'user', 19, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (56, 'Laverna', 'Ballendine', 'lballendine1j@gizmodo.com', '$2a$04$yA7Oav2kTb9p2znXON.Wh.BuLWPn0cTQVycIhobFfrMOsm4jMBygG', 2, '2024-01-24', 'super-administrator', 27, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (57, 'Curcio', 'Billingsly', 'cbillingsly1k@squarespace.com', '$2a$04$ovh/XEq/NfcH6/8hDA9/F.zZH67sbeTqeYaaCCAva.guZNRTbC9JS', 2, '2024-10-04', 'super-administrator', 30, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (58, 'Florida', 'Kaas', 'fkaas1l@reddit.com', '$2a$04$nTOHXzprS.mi4o4SyDdm1uhR7uDjAGR1en3yfIrjd5AHd/sGHN94G', 2, '2024-07-06', 'user', 7, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (59, 'Llewellyn', 'Bartolomucci', 'lbartolomucci1m@narod.ru', '$2a$04$tBoVQ5yPf.ItyS.Oy.mMuememIAkfClfprl5rowKwbdn6m0VscHlm', 1, '2023-12-03', 'administrator', 28, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (60, 'Brook', 'Parrot', 'bparrot1n@va.gov', '$2a$04$5BKtl9pXex2QlvcvmHSWnul4RXw8qJ467XwV1v6.diImNnJ2fJ/5a', 1, '2024-04-24', 'user', 17, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (61, 'Alexandra', 'Stobie', 'astobie1o@ted.com', '$2a$04$14Mkh1XDtg5wRlNuWNDpwuU1Gdy1X035UnOkdmDkUJNlRnfcWEpTm', 2, '2023-12-14', 'user', 7, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (62, 'Fidole', 'Poynzer', 'fpoynzer1p@a8.net', '$2a$04$64rI/JfgOE7b2Mu4fSVFnONFjM73Od5upUO9vQ1ZmaOHmUXSMJHwG', 2, '2023-12-17', 'administrator', 29, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (63, 'Yul', 'Clem', 'yclem1q@bigcartel.com', '$2a$04$.0Y1J8Z2uW1MaY94.pu5SuGuCW1wy4ufcaXkUY/D78ZO2b.SnGHSK', 1, '2024-09-13', 'user', 9, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (64, 'Anatollo', 'Balasin', 'abalasin1r@squarespace.com', '$2a$04$n.CrlV6ox7vG.rYCPQ7bluNX57VBk7fCGD0RC8D5l/mvk5tbBbgXu', 2, '2024-08-24', 'administrator', 16, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (65, 'Olenka', 'Angric', 'oangric1s@taobao.com', '$2a$04$GQR4prk9gjuhT8lDyyNf2ODOQYU7rXQYPVpRUVML54vgSuOj2e2Ge', 2, '2024-01-19', 'user', 30, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (66, 'Philly', 'Cescon', 'pcescon1t@ed.gov', '$2a$04$5spptZ//lIrtWkf96Q8aWO4N/I22yYHAiN5Fh8kUWCqhJ3f2K1wRu', 2, '2024-03-08', 'user', 10, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (67, 'Eunice', 'Luddy', 'eluddy1u@nba.com', '$2a$04$144JnyRK7xWDv3fNOtjEo.TKMLfN3lRJ.SJzxo3bLsyRbP39N9uBG', 1, '2024-04-14', 'super-administrator', 19, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (68, 'Nicolas', 'Janway', 'njanway1v@lycos.com', '$2a$04$3enuYEE7fjDKCpYpA8ruoO.l/F5N.LGjujHnJcbUlVLITgEpidVzm', 2, '2023-11-23', 'administrator', 25, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (69, 'Charmaine', 'Pilkinton', 'cpilkinton1w@nps.gov', '$2a$04$2glIJ6.WC1mCw9axA263c.T6GRB21Qt90sMbMybdy.BYIemdDlxQe', 2, '2023-12-05', 'super-administrator', 16, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (70, 'Morrie', 'Lacase', 'mlacase1x@etsy.com', '$2a$04$273uOm0gmX9cZDf46zalNO/08p9rdQiSNA5MHptqt8QS3bOdlRC9O', 2, '2024-05-17', 'super-administrator', 27, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (71, 'Leticia', 'Llywarch', 'lllywarch1y@creativecommons.org', '$2a$04$27Qs7JCmVocVsI4eMzUbSOnROlJF2AdLTXmVu8bJAZINTrFzfqOC2', 1, '2024-11-07', 'user', 15, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (72, 'Nicolette', 'Brownsall', 'nbrownsall1z@pen.io', '$2a$04$b9eSZM4l/ZnIGB8TC3yoMOwmkyBcfN0gLQneWojG035snGyWxPAAe', 1, '2024-06-19', 'super-administrator', 27, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (73, 'Parry', 'Grise', 'pgrise20@psu.edu', '$2a$04$fIHomCHzuhZk4kYivI6lFeYaBQzWlB8FNYvwHZQTLJHOQNJQ3FjgK', 2, '2024-02-04', 'administrator', 15, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (74, 'Fredra', 'Broom', 'fbroom21@state.tx.us', '$2a$04$xMymea5hKNKfm43Xrq0TC.tkdSUCvMSKUFaAxHfSZI2IakaRhaLEC', 2, '2024-05-19', 'user', 10, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (75, 'Karlotte', 'Josovich', 'kjosovich22@123-reg.co.uk', '$2a$04$O5fgWJN5q.n.iyb.3DF0HOp6Yyxw6aOul5y4CAh34gme25LXlGNTO', 1, '2023-12-19', 'administrator', 18, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (76, 'Gilberta', 'Beinisch', 'gbeinisch23@moonfruit.com', '$2a$04$rPpt/1ulkJOy1ZrFicBN/u9.HeuMwwEbt1VtSOiy7q8kOz9Ed.ggq', 2, '2024-01-17', 'administrator', 13, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (77, 'Munroe', 'Clampe', 'mclampe24@godaddy.com', '$2a$04$Yub22S7L4vTe3XY6PMpG/.1Z2b1Re7PtXpmtiTnsq3I3tMnPKYgpu', 1, '2024-06-04', 'super-administrator', 1, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (78, 'Alden', 'Ellingham', 'aellingham25@house.gov', '$2a$04$taNcOSpoVkdp20/HBfbDCemJB7XQ/LyIvHtHTyxQX0zN3Zu5/OfuK', 2, '2024-09-06', 'super-administrator', 31, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (79, 'Gwenneth', 'Kynastone', 'gkynastone26@webmd.com', '$2a$04$9e5C5A4NvWA9dg/0qTXkjOH9VCMjO70f9mPTHTm9maO4JylmRjS46', 1, '2024-04-22', 'administrator', 27, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (80, 'Mord', 'Luetkemeyer', 'mluetkemeyer27@ebay.co.uk', '$2a$04$03c7nkC6KhvatVUYghGhr.H8vXR6/qmQI551RubxrxeCEB84WfQM.', 2, '2024-08-07', 'super-administrator', 5, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (81, 'Donal', 'Burrass', 'dburrass28@biglobe.ne.jp', '$2a$04$NOYAmb53.0Lc/UCASErxT.U4mmpaFnxLDoUDY/88T6qYx573LLex2', 2, '2023-12-31', 'administrator', 17, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (82, 'Andria', 'Qusklay', 'aqusklay29@google.com.hk', '$2a$04$awCNTLBOdheHhpvArNRBOeeQBDL7P/NjYAfyfAaWaI4vfvGBeJC2u', 1, '2024-04-15', 'super-administrator', 20, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (83, 'Bary', 'Bavester', 'bbavester2a@cmu.edu', '$2a$04$FieRVqfsf7/KTc0I3UejMeY4HtBnUT50Mu8MhwIh2FEp5qLqUozES', 2, '2024-06-20', 'user', 28, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (84, 'Myrah', 'Kendal', 'mkendal2b@pinterest.com', '$2a$04$hiBHdIFbPxoZV9HVl7E0C.B8nAQ5/417e6ZlgFx8KzagR7O30xoR6', 1, '2023-12-02', 'super-administrator', 29, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (85, 'Elyssa', 'Trewhella', 'etrewhella2c@elpais.com', '$2a$04$Lxd01qThJB/a683EulWwxOzdPnUv7k7ZWtQJfieMCYlARYVtr/1D2', 2, '2024-03-28', 'super-administrator', 24, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (86, 'Patricio', 'Camelli', 'pcamelli2d@boston.com', '$2a$04$JctlGiMtyBCL7Qn830h73uI2UwRWhgsTvvKDcqVltsR7A7yg.w2IS', 1, '2024-08-02', 'user', 20, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (87, 'Bobine', 'Whitlock', 'bwhitlock2e@theatlantic.com', '$2a$04$QGNj5IOGXiaJ0dY/305.E.gkQ8skGfrwaacNs2BfbW/n4SAbr7ERa', 1, '2024-02-12', 'administrator', 2, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (88, 'Constantin', 'Guilloux', 'cguilloux2f@soundcloud.com', '$2a$04$LmwsWPsg/92Aomw/ePXUiul55waxcWtVA/t3mXkJAx5mFarrLiD3e', 1, '2024-03-06', 'administrator', 9, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (89, 'Arlee', 'Drogan', 'adrogan2g@nba.com', '$2a$04$rh.prQ8TL8sq/W9jpaAB9ug5gye0gMl5obFllTuJ/MeiM7iYVHKCO', 2, '2023-12-13', 'super-administrator', 15, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (90, 'Amye', 'Dunthorne', 'adunthorne2h@about.com', '$2a$04$kj2imgcGJx7NsmZRCBabAOPyIh9CrEvag1jtOo76apUNiRl07uwey', 2, '2024-10-06', 'user', 1, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (91, 'David', 'Weare', 'dweare2i@opensource.org', '$2a$04$2NlC3snuLi5QoI5TzYwtWuAgvDvRCbzvntsw1YNxRkxFMpgBwy/hC', 2, '2024-01-27', 'super-administrator', 20, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (92, 'Wolfy', 'Hallwell', 'whallwell2j@nih.gov', '$2a$04$VZ6lkP7YobA2UCZTKQDgWeruI0svXoEMQfpSxuNINhVJg6kH6r9Fu', 1, '2023-12-10', 'administrator', 2, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (93, 'Kacie', 'Orhtmann', 'korhtmann2k@wufoo.com', '$2a$04$1NwTtWHTPDF0TYGx9Au2bu81LOgZxm9BPUqBLA2xI1.GBGUuuA2L.', 1, '2024-02-18', 'administrator', 3, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (94, 'Zandra', 'Knightley', 'zknightley2l@people.com.cn', '$2a$04$QmALuoxly89LVf1.xNUnZeSXMY8wW6oyDHmKfB/Z1iPOAKPeoWCVW', 1, '2023-12-30', 'user', 1, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (95, 'Willie', 'O''Regan', 'woregan2m@free.fr', '$2a$04$BIyNIg6tIhApD.eoBgIR..z8Ngzt/3b2GqgVLcctAl334BFtDJlBu', 1, '2024-08-21', 'user', 9, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (96, 'Man', 'Duff', 'mduff2n@ocn.ne.jp', '$2a$04$w.Emo4LzIwrEtRuov2GB..ZUSsSFztdLcECauTRP0Fbu8DUpSvRxq', 2, '2024-03-28', 'super-administrator', 7, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (97, 'Robinia', 'Ffrench', 'rffrench2o@mac.com', '$2a$04$zl/hmyFjfZ.fBlqZZ.oh2.OVMsKbsoak2c2OxUP1AjpwpyYheAmsa', 1, '2024-04-12', 'user', 7, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (98, 'Jaclyn', 'Philippart', 'jphilippart2p@howstuffworks.com', '$2a$04$vR9HZOgT4RxQYFBW2X27VOZavQT13Wspkph1uIUDXAHIGv683KSiS', 1, '2024-02-02', 'user', 13, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (99, 'Jimmie', 'Wisker', 'jwisker2q@tinypic.com', '$2a$04$vmyNX9yyJZ1SP7l9ulJNI.qrlx4O5WYhYoep2fCYw.mHhKbjhdmSa', 2, '2023-12-15', 'super-administrator', 3, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (100, 'Arty', 'Sollitt', 'asollitt2r@nhs.uk', '$2a$04$nwpSMmLTKb0W1VYL4SIbB.Td3WJKL74k/jngk59.COYTS30MY0iky', 2, '2024-05-19', 'user', 10, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (101, 'Giulia', 'D''eye', 'gdeye2s@flavors.me', '$2a$04$g9BNSG3y9SstOG/PP2Tmk.3l.RfE2o5oarXy6/IVjnokbCndO.XpW', 2, '2024-03-02', 'user', 28, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (102, 'Franzen', 'Durrans', 'fdurrans2t@dmoz.org', '$2a$04$uNmgXgCiMlQlD8Rde3LVPOEjOAy78.to51bTHM/ZDAnLPIt9QXSf2', 2, '2024-11-09', 'super-administrator', 7, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (103, 'Tiff', 'Jozwik', 'tjozwik2u@toplist.cz', '$2a$04$b6CX9NPwC.bspc6Xd5AVmeQEh204S.0hE3HSv72fjj7Kbd67OoYci', 1, '2023-12-18', 'super-administrator', 21, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (104, 'Giacobo', 'Iveans', 'giveans2v@google.com.br', '$2a$04$bjmAE4BzGld9d1TZonaHDOGZsmkvOatGE09G7CF13Th4ZO72KIADW', 2, '2024-05-14', 'administrator', 15, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (105, 'Vincenz', 'Barens', 'vbarens2w@cloudflare.com', '$2a$04$ydwsp5yhXZNlhPn3cUkHAunNNv8NiRmENpGDfHl/noosh.H.XBoHm', 2, '2023-11-28', 'user', 7, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (106, 'Marten', 'De Witt', 'mdewitt2x@ft.com', '$2a$04$9rckMSOmaStYsVZH3vQIk.3DY8DSmfU6iGGd9QRNGPUUYMsn0QZMq', 1, '2024-11-04', 'administrator', 25, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (107, 'Merry', 'Shevlane', 'mshevlane2y@dion.ne.jp', '$2a$04$T8a5R182pVi7GKSOjBX6buTEzNAjtjZ.K8.BJb.bcmTzqeXr2Yqe6', 2, '2024-07-07', 'super-administrator', 31, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (108, 'Keriann', 'Donaher', 'kdonaher2z@google.com', '$2a$04$kgUQvoc/N.xJ3uTGyUBJeur4RckJM7Qc5PY7UNvcuVEu2AOP9AxSS', 1, '2024-10-13', 'administrator', 14, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (109, 'Inness', 'Gillman', 'igillman30@globo.com', '$2a$04$4rtNtFM2yaMjyBetZ9c2vuj9BwsedD8Hq5IAzcddkkoUb.p2.rgya', 2, '2024-10-12', 'administrator', 11, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (110, 'Cornelius', 'Kilmister', 'ckilmister31@wikipedia.org', '$2a$04$lqXfrEF4UhCR3cVK.utGyufB3eZIbVUyceR5UQFLY3R5PYC2LaR.u', 2, '2024-03-02', 'super-administrator', 4, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (111, 'Nicola', 'Vaskin', 'nvaskin32@google.ru', '$2a$04$EJFXf/2HDLw7XzRbWTeILeVf20ZKIhb/TybKQzcwd05GCEgA8NG/u', 1, '2023-11-22', 'super-administrator', 6, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (112, 'Nikolaus', 'Race', 'nrace33@blogger.com', '$2a$04$fGiNaFFfvhQUZdPuXpma9OkLOV.oGEkjS4xuKGWiZxTw/ij/hckvO', 1, '2024-04-09', 'super-administrator', 5, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (113, 'Dannye', 'Kennifeck', 'dkennifeck34@abc.net.au', '$2a$04$X1dUR3hPbePFiiKXEYP9b.VktqLER7oYMe5G6S8e6.Atqb66TaLLC', 2, '2024-01-31', 'super-administrator', 2, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (114, 'Griffie', 'Swinyard', 'gswinyard35@hibu.com', '$2a$04$Xky6eq7d0WPfvo4HHiBjd.a.5h7EoCusFO9hMmJdZ1FUzPVLSKjU6', 2, '2024-03-03', 'super-administrator', 27, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (115, 'Celinka', 'Elland', 'celland36@illinois.edu', '$2a$04$exTy6S/udr6erdY/Ym58OODSuWyiLXiaSI6Nix4WPXKN3TrGXY76C', 2, '2024-07-05', 'super-administrator', 9, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (116, 'Corrine', 'Cawdery', 'ccawdery37@hc360.com', '$2a$04$nAN1l39VZyPIcm.xJnWEK.rY3YPsUFb1PQA2Uru.q1OLv0H3Ci0fS', 2, '2024-08-21', 'super-administrator', 8, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (117, 'Malachi', 'Breddy', 'mbreddy38@skyrock.com', '$2a$04$nszVuCbORw4BDLeggyMqvOnF9SUXpLSYTU9RkKXtvxkTWifTGHExa', 2, '2024-02-04', 'super-administrator', 4, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (118, 'Violet', 'Breadon', 'vbreadon39@nsw.gov.au', '$2a$04$omtbhv2KMaahntos17aFWOH5sAcqjTnz3YMWHuWK7TysI0DYM79eW', 1, '2023-11-24', 'super-administrator', 13, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (119, 'Jarrod', 'Klaggeman', 'jklaggeman3a@ucsd.edu', '$2a$04$sZKQMaMHnwDpj6wx5sRUKe6o65odluO/dz50qBS.JfCBF58PrVsKu', 2, '2024-07-17', 'super-administrator', 28, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (120, 'Elie', 'Slowley', 'eslowley3b@mlb.com', '$2a$04$osTES7DfPTx2YHNB1jZRDOvMMJwbXcWFIxHzu4rT5b9NrcJktK.Ni', 1, '2024-04-29', 'super-administrator', 18, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (121, 'Antony', 'Gauld', 'agauld3c@flavors.me', '$2a$04$Qaa8Wq9oR5fdLl/2PwS6Z.frT49MBPUr907ibrHQg7GxZdlZgpHY2', 1, '2024-09-15', 'super-administrator', 22, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (122, 'Gregor', 'Proud', 'gproud3d@eventbrite.com', '$2a$04$/9xqbr7pUABl9JsRQgj1YudIRzGCzEKlBH22uG.njzFCF/IZFCc6i', 1, '2024-06-26', 'administrator', 22, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (123, 'Candice', 'Deshorts', 'cdeshorts3e@apple.com', '$2a$04$I8s8RJ5DtpAn4xvyG9n7xujvk8VkUaC0Rq.pBr.1.A4Vv5bo4YZza', 2, '2024-02-19', 'super-administrator', 21, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (124, 'Philippa', 'Caville', 'pcaville3f@yolasite.com', '$2a$04$JnqQA/X.u795..GooKZUEeYmUWwgm3gQu8hy2cNisiWgtzgs4x0/u', 1, '2024-04-20', 'administrator', 21, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (125, 'Yorke', 'Pennycock', 'ypennycock3g@netlog.com', '$2a$04$90mMYmt3Fl28VArl9ut68u80RJkCyzxyauO4yMsJENIIc12zBqZyC', 1, '2024-07-05', 'super-administrator', 24, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (126, 'Henrieta', 'Nyssens', 'hnyssens3h@bloglines.com', '$2a$04$O5yLPXegqGBkG0PD57Alo.zjxvyGKBSq5TAAtCmdb4IxahKWMIata', 2, '2024-08-25', 'super-administrator', 4, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (127, 'Eva', 'Manvelle', 'emanvelle3i@skyrock.com', '$2a$04$DnqsQ2G0z1tm8OJ7NYxFHOlyNJdRv7SpeNo87dj5Aku4kJXboFXVy', 2, '2024-01-31', 'user', 8, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (128, 'Merilee', 'Rubra', 'mrubra3j@chron.com', '$2a$04$/tTc2kZP9hwAjtI9UaINBOwycG5Gx7/tAKACz.3STyCUA1M6OiugC', 1, '2024-04-26', 'user', 30, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (129, 'Fiann', 'Cordon', 'fcordon3k@hp.com', '$2a$04$UqllYIpHBi5AmaL9JBihg.U5UCfSGiP7GOKQo12/r.7HoaqDCLQdW', 2, '2023-12-20', 'user', 14, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (130, 'Northrop', 'Labrenz', 'nlabrenz3l@cnet.com', '$2a$04$iHpCPp1Ia20EFghRrrxRA.1gPcSCqw0f7OGWYXVanf2JUPbYswCcq', 2, '2023-11-30', 'super-administrator', 2, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (131, 'Piotr', 'Harnett', 'pharnett3m@last.fm', '$2a$04$gsx7yDYaaH0Ty2cWVIDOxOcsDO1uqE2jQHsuASvM/GTQKALcMGXPG', 2, '2023-12-27', 'super-administrator', 20, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (132, 'Ky', 'Matthaus', 'kmatthaus3n@ibm.com', '$2a$04$Uty.IlqYJFYWNG4jd/UqjOgVNUHqqR4Npa3jozH55BwHD6DV9MJs.', 2, '2023-12-16', 'administrator', 25, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (133, 'Brnaby', 'Chatto', 'bchatto3o@vistaprint.com', '$2a$04$e/i9evzHx.X0Y4tqjjJKsushrw.zeVMvCfJ6/c0XWUQuJ/ySEkUlS', 1, '2024-06-11', 'super-administrator', 23, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (134, 'Mae', 'Halse', 'mhalse3p@imgur.com', '$2a$04$S2jWImbXpzIp9jM.F/OcSOKYUc9sb6i/6klZbkyJJtZTWs9QCrQL2', 2, '2024-02-05', 'super-administrator', 28, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (135, 'Caritta', 'Thom', 'cthom3q@sun.com', '$2a$04$.n5e9Y1hi.kY.TSWjw783eJH0f58DW3aoQIOBhru6J4q5dQ0RiLgO', 2, '2024-10-31', 'super-administrator', 23, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (136, 'Mord', 'Pavy', 'mpavy3r@mozilla.com', '$2a$04$W8zxMf2KI7zhvaLNRrwcGe4E9D.S9wllNzifJ7XJsELzANsohT8TG', 2, '2024-08-18', 'user', 29, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (137, 'Perrine', 'Gorthy', 'pgorthy3s@miibeian.gov.cn', '$2a$04$51wlV2iYbeX9Q4XIWaCaa.SZLSybUgaYizrt.4WI6abQOF57Vx96.', 1, '2024-09-05', 'super-administrator', 7, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (138, 'Meredeth', 'Swabey', 'mswabey3t@utexas.edu', '$2a$04$0WN//R8a.YUI3TAnAwgvH.6YZzx3eOP2OWLZVmp45atgqhlgYCTVW', 1, '2024-05-27', 'super-administrator', 29, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (139, 'Leupold', 'Leadbetter', 'lleadbetter3u@nbcnews.com', '$2a$04$2LrZslJR8ohl2VYNIrLLOu7kwiuy5ysPjjswoAh48CatIM391xToa', 1, '2024-02-08', 'administrator', 5, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (140, 'Fern', 'Teall', 'fteall3v@noaa.gov', '$2a$04$JtPrkTFVFz68ak3eA9LW8Oz438yKjbE36OJ9LE82yFMxJ81splc46', 1, '2024-08-01', 'administrator', 11, 3);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (141, 'Magdalene', 'Memmory', 'mmemmory3w@vistaprint.com', '$2a$04$gh7oCjlWtn4HliLdlfHhyey0G29qy62UhRySzRdhx7K7etBOXcgVi', 2, '2024-11-02', 'user', 17, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (142, 'Tripp', 'Escot', 'tescot3x@simplemachines.org', '$2a$04$43YWaBHNfGdOQOAKfonmpOlyQrWVd4jE2bOpdcPP9Gb0rtglSO7RW', 2, '2024-02-04', 'administrator', 8, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (143, 'Brande', 'Ternault', 'bternault3y@google.pl', '$2a$04$rzq.gPLj65mVem.eoTBK9euJNZ/xZbtU.sXMW7ysWWFV1RVBgWvPe', 2, '2024-09-27', 'user', 10, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (144, 'Britt', 'Tranter', 'btranter3z@scientificamerican.com', '$2a$04$Eb4Gi16p0iagRZrifNjXleyzDU/tRDJ3VK.fJ9gnoruV5lObKNWCu', 1, '2023-12-24', 'super-administrator', 6, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (145, 'Bellina', 'Fearney', 'bfearney40@weebly.com', '$2a$04$.XQQprOdr2Dg2hd4wjLCW.XX/Ur592tjCLmCExYxJGbISjsKn3pny', 2, '2024-03-28', 'user', 18, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (146, 'Dick', 'Shama', 'dshama41@cloudflare.com', '$2a$04$MUB.ugMnPNFNm.cprRGSQepIpwbTTdraaC3cytYkxU.jJwn8wWXdi', 1, '2024-03-02', 'administrator', 13, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (147, 'Cammy', 'Krinks', 'ckrinks42@studiopress.com', '$2a$04$kmhutMKKj5a9D2LosjfDaeQsl9x2lGwEr4IDEW6iuPmTjW/gvwhWq', 1, '2024-05-18', 'user', 29, 1);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (148, 'Mohammed', 'Pinkett', 'mpinkett43@wikimedia.org', '$2a$04$1SX.wpQYGSpyMUz6/5Wxjufr6YYYK.mzH2DY7boY2q3nSHHvMbYVq', 2, '2024-02-05', 'user', 25, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (149, 'Goober', 'Wavish', 'gwavish44@parallels.com', '$2a$04$2bHX3XnNgO4aFnN0zZFn2Om5/rzX0OOzSbgYV1szh1JpVLkprka7S', 1, '2024-07-22', 'super-administrator', 24, 2);
insert into utilisateurs (id, first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement) values (150, 'Andi', 'Knivett', 'aknivett45@bizjournals.com', '$2a$04$K5mC4GY3oLKcXgltPVFhkOJh5/htQt9t./Y3YkIpSYpa.iZkpb.mK', 2, '2024-03-17', 'super-administrator', 16, 1);

