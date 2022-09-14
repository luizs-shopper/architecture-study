/** Configurações para o servidor da aplicação */
export const serverConfig = {
    /** Porta de execução do servidor, por padrão usará a porta 80 */
    serverPort: parseInt(process.env.PORT || '80'),
}

/** Configurações para a conexão do banco de dados */
export const databaseConfig = {
    /** Tipo de cliente do banco de dados, por padrão MySQL2 */
    databaseClient: 'mysql2',
    /** Host do servidor do banco de dados */
    databaseHost: process.env.DB_HOST,
    /** Porta do banco de dados, por padrão a porta 3306 que é a padrão do MySQL */
    databasePort: parseInt(process.env.DB_PORT || '3306'),
    /** Nome do usuário do banco de dados */
    databaseUser: process.env.DB_USER,
    /** Senha do usuário do banco de dados */
    databasePassword: process.env.DB_PASS,
    /** Nome do banco de dados */
    databaseName: process.env.DB_NAME,
    /** Timeout em milissegundos para estabelecimento de conexão com o banco */
    databaseConnectTimeout: 60000,
    /** Quantidade mínima de conexões com o banco de dados para ficarem ativas */
    databaseMinPool: 2,
    /** Quantidade máxima de conexões com o banco de dados para ficarem ativas */
    databaseMaxPool: 10,
}
