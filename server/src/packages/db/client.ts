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


