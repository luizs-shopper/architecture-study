# Estudo de arquitetura

Estrutura:

- **:file_folder: use-cases:** Contém os casos de uso do sistema, os casos de uso contém todas as regras de negócio e são independentes do mundo exterior
- **:file_folder: entities:** Contém as entidades do sistema, os casos de uso interagem com as entidades para executar as regras de negócio
    - index.ts: Os casos de uso verão apenas o model e interfaces expostos aqui
    - repository.ts: Implementa a interface de repositório declarada no index.ts
    - factory.ts: Traduz a entidade do mundo exterior para o mundo interior do sistema
- **:file_folder: server:** Contém a estrutura da aplicação como servidor web, as rotas executam os casos de uso, da mesma forma que é usado REST neste exemplo poderia estar sendo usado uma fila, eventos ou outro mecanismo para servir, os casos de uso sempra são os mesmos
- **:file_folder: database:** Configurações para comunicação com o banco de dados