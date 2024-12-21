import MysqlConnector from './mysqlconnector';


export class Client{

    VerificationUtilisateur(sql: string, values: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            console.log("éxécution du query");
            console.log(sql,values);
            mysqlConnector.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête : ' + error.message);
                    reject(error);
                } else {
                    console.log('Résultats de la requête :', results);
                    resolve(results);
                }
    
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }

    IsUserExist(nom: string, prenom: string, email: string, date_naissance: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            
            // Requête SQL pour vérifier si l'utilisateur existe déjà
            const sql = `SELECT * FROM utilisateurs 
                         WHERE last_name = ? AND first_name = ? AND email = ? AND date_of_birth = ?`;
            const values = [nom, prenom, email, date_naissance];

            console.log("Éxécution de la requête :");
            console.log(sql, values);

            // Exécution de la requête
            mysqlConnector.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête : ' + error.message);
                    reject(error);
                } else {
                    if (results.length > 0) {
                        console.log('Utilisateur trouvé :', results);
                        resolve({ exists: true, user: results[0] });  // Utilisateur trouvé
                    } else {
                        console.log('Aucun utilisateur trouvé.');
                        resolve({ exists: false });  // Aucun utilisateur trouvé
                    }
                }

                // Fermez la connexion après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }

    Inscription(nom: string, prenom: string, email: string, date_naissance: string, genre: string, plan_tarifaire: string, nom_utilisateur: string, password: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            const sql = `
                INSERT INTO utilisateurs (first_name, last_name, nom_utilisateur, email, password, gender, date_of_birth, status, grade, abonnement)
                VALUES (?, ?, ?, ?, ?, ?, 'user', '1', ?)`;
    
            const values = [prenom, nom, nom_utilisateur, email, password, genre, plan_tarifaire];
    
            console.log("Exécution de la requête d'inscription avec les données:", values);
    
            mysqlConnector.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'insertion de l\'utilisateur : ' + error.message);
                    reject(error);
                } else {
                    console.log('Utilisateur inséré avec succès, ID:', results.insertId);
                    resolve(results);  // retourne les résultats, par exemple l'ID de l'utilisateur inséré
                }
    
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }

    obtenirLesRoles(): Promise<any> {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            const sql = `SELECT * FROM roles`;
    
            console.log("Exécution de la requête pour obtenir les rôles");
    
            mysqlConnector.query(sql, [],(error, results) => {
                if (error) {
                    console.error('Erreur lors de la récupération des rôles : ' + error.message);
                    reject(error);
                } else {
                    console.log('Rôles récupérés avec succès :', results);
                    resolve(results);  // retourne les rôles obtenus
                }
    
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }
    

    obtenirLesPlansTarifaires(){
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            const sql = `
                SELECT * FROM plans_tarifaires`;
    
            console.log("Exécution de la requête pour obtenir les rôles");
    
            mysqlConnector.query(sql, [],(error, results) => {
                if (error) {
                    console.error('Erreur lors de la récupération des rôles : ' + error.message);
                    reject(error);
                } else {
                    console.log('Rôles récupérés avec succès :', results);
                    resolve(results);  // retourne les rôles obtenus
                }
    
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }

    obtenirLesGenres(){
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            const sql = `
                SELECT * FROM genres`;
    
            console.log("Exécution de la requête pour obtenir les genres");
    
            mysqlConnector.query(sql, [],(error, results) => {
                if (error) {
                    console.error('Erreur lors de la récupération des rôles : ' + error.message);
                    reject(error);
                } else {
                    console.log('Rôles récupérés avec succès :', results);
                    resolve(results);  // retourne les rôles obtenus
                }
    
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }
    
    

    Insert(sql: string, values: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            console.log("éxécution du query Insert");
            mysqlConnector.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête : ' + error.message);
                    reject(error);
                } else {
                    console.log('Résultats de la requête :', results);
                    resolve(results);
                }
    
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }

    query(sql: string, values?: any[]): Promise<any> {
        return new Promise((resolve, reject) => {
            const mysqlConnector = new MysqlConnector();
            console.log("éxécution du query");
            mysqlConnector.query(sql, values as any, (error, results) => {
                if (error) {
                    console.error('Erreur lors de l\'exécution de la requête : ' + error.message);
                    reject(error);
                } else {
                    console.log('Résultats de la requête :', results);
                    resolve(results);
                }
    
                // Fermez la connexion ici après avoir traité les résultats
                mysqlConnector.close();
            });
        });
    }

}


