# Como contribuir

Este documento tem o objetivo de apresentar as instruções básicas para que você
possa contribuir com o desenvolvimento do projeto.

## 1. Onde buscar o que posso fazer

Todas as features, bugs e melhorias são gerenciadas no ClickUp, acesse o board
do seu projeto e procure por tarefas que estão aguardando desenvolvimento.
Procure o gestor do seu time caso possua alguma dúvida.

## 2. Padrões de Git

### 2.1. Git Flow

Adotamos um padrão de workflow no git que se alinha com o nosso processo de
lançamento de versões, sendo assim, o código poderá estar nos seguintes
estágios:

1. **Priority** (feature branch): Ainda é uma funcionalidade isolada, testada 
apenas localmente em desenvolvimento, nesta fase o desenvolvedor faz as 
implementações e correções necessárias para atender os critérios de aceite da 
funcionalidade descritas no card do ClickUp relacionado.
2. **Candidate** (branch `candidate/x.y.z`): As funcionalidades são combinadas
em uma única branch, ainda testadas apenas localmente pelo tech lead ou pelos
próprios desenvolvedores, nesta fase são resolvidos os eventuais conflitos e
feitos os ajustes para que todas as funcionalidades se integrem corretamente,
tanto no backend quanto no frontend.
3. **Release** (branch `release`): As funcionalidades são disponibilizadas em
ambientes de testes, nesta fase os QAs executarão os cenários de teste
planejados para as features a fim de atestar que todos os critérios de aceite
foram implementados. Caso alguma incoformidade seja encontrada, ela será
relatada em uma lista de bugs no ClickUp e os desenvolvedores deverão fazer as
correções, até que todos os cenários de teste sejam concluídos com sucesso.
4. **Production** (branch `master`): Após a validação dos QAs as funcionalidades
são liberadas para os usuários finais em produção, caso algum problema seja
percebidos pelos usuários, eles também serão reportados na lista de bugs ou como
novas funcionalidades no ClickUp e, dependendo da sua criticidade, deverão ser
corrigidos imediatamente ou na próxima versão do sistema.

### 2.2. Nomes de branchs

Os nomes das branchs devem ser escritas em inglês e possuir um prefixo que 
identifique o tipo de alteração seguido de um nome que permita identificar
fácilmente o que é a alteração.

Use os seguintes prefixos para cada situação:

- `feature` = Uma nova funcionalidade que está sendo implementada ou atualizada
- `fix` ou `bugfix` = Uma correção de bug
- `hotfix` = Uma correção emergencial que aponta diretamente para a branch
master
- `chore` = Outras alterações que não se enquadram nas opções anteriores

Exemplo, suponha que vamos criar uma nova funcionalidade para retornar uma
mensagem de boas vindas para os usuários, o nome da branch poderia ser:
`feature/user-welcome-message`.

### 2.3. Origem da branch

Para evitar conflitos no git sempre selecione uma branch de base para a sua nova
branch seguindo as regras abaixo:

- Caso seja uma nova funcionalidade ou a correção de um bug que está acontecendo
em produção, utilize a branch master como base para a nova branch.
- Caso seja a resolução de um conflito ou a correção de um bug reportado pelo 
tech lead ou outro desenvolvedor durante a fase candidate, utilize a própria 
branch candidate como base para a sua nova branch.
- Caso seja a correção de um bug reportado pelo QA durante a fase release,
utilize a branch release como base para a sua nova branch.

### 2.4. Destino do pull request

Para seguir o fluxo do git apresentado anteriormente, utilize as seguintes
regras para determinar para qual branch o seu pull request deverá apontar:

- Caso seja uma nova funcionalidade ou a correção de um bug que está acontecendo
em produção com menor criticidade, aponte o PR para a branch candidate
correspondente à próxima versão.
- Caso seja a correção de um bug reportado pelo tech lead ou outro desenvolvedor
durante a fase candidate, aponte o PR para a branch candidate relacionada.
- Caso seja a correção de um bug reportado pelo QA durante a fase release,
aponte o PR para uma nova branch candidate com o patch version atualizado, caso
seja apenas um único bug o PR poderá apontar diretamente para a branch release.
- Caso seja o lançamento de uma versão ou a correção de um bug que está
acontecendo em produção com criticidade alta, aponte o PR para a branch master.

### 2.5. Versionamento

Para versionamento das releases adotamos o padrão de 
[versionamento semântico](https://semver.org/lang/pt-BR/), sendo assim o número
da versão segue o padrão X.Y.Z onde:
- X é a *major version*, apenas incrementada quando existe uma quebra de
compatibilidade com as versões anteriores, isso ocorre apenas quando acontece
uma grande mudança de arquitetura do projeto.
- Y é a *minor version*, incrementada a cada nova release, volta a zero quando
a *major version* é incrementada. Essa versão terá novas features e correções
de bugs que aconteciam em produção com uma menor criticidade.
- Z é a *patch version*, incrementada a cada nova candidate da release ou
correção de bug crítico, volta a zero quando a *minor version* é incrementada.
Essa versão terá as correções de bugs reportadas na fase de release ou a
correção de um bug de alta criticidade feita diretamente na master.

Sempre que criar uma branch candidate a versão no package.json deverá ser
atualizada, é recomendável criar uma tag no git sempre que a versão é
incorporada a branch master.

### 2.6. Padrão de commit

Para as mensagens de commit adotamos o padrão
[Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) que
define a seguinte estrutura para as mensagens:

```
<tipo>[escopo opcional]: <descrição>

[corpo opcional]

[rodapé(s) opcional(is)]
```

Os tipos representam qual alteração foi feita:

- `feat`: Uma nova feature
- `fix`: Uma correção de bug
- `docs`: Inclusão ou atualização de documentação
- `style`: Alterações de estilo do código (formatação, espaçamento etc.)
- `refactor`: Uma alteração de código que nem corrige um bug e nem adiciona uma
feature
- `perf`: Uma alteração de código que melhora a performance
- `test`: Adiciona ou atualiza testes
- `build`: Alterações que afetam o build do projeto ou ferramentas externas
- `ci`: Alterações nos arquivos de configuração de CI/CD
- `chore`: Outras alterações que não afetam códigos do projeto ou testes
- `revert`: Reverte para um commit anterior

No escopo descreva opcionalmente qual o arquivo ou componente afetado pela
alteração.

Na descrição escreva brevemente a alteração usando a terceira pessoa do 
imperativo afirmativo. Por exemplo, *"Muda a variável X para Y"*.

Você pode adicionar um corpo que descreva a motivação da alteração e compare 
com o comportamento anterior se necessário.

Caso a alteração tenha uma quebra de compatibilidade com a versão anterior do
código adicione no rodapé o texto `BREAKING CHANGE` seguido da descrição das
alterações que causaram a quebra de compatibilidade.

### 2.7. Padrão de pull request

O repositório já está configurado com um template de pull request que é útil na
maioria das situações de criação de um pull request:

> **O que foi alterado nesse PR?**
>
> Explique as alterações feitas no código, de forma clara e objetiva como uma
> lista. Por exemplo:
> - Muda a variável X para Y
> - Adiciona nova funcionalidade Z
> 
> É importante descrever aqui também as claims do SSO e novas variáveis de
> ambiente que serão necessárias para o funcionamento da feature do PR. Por
> exemplo:
>
> - Nova claim `foo:bar` permite executar a ação "bar" na entidade "foo".
> - Nova variável de ambiente `HELLO_MESSAGE` deve ter o valor a ser exibido
> na mensagem de boas vindas.
> 
> **Porque foi necessária a alteração?**
>
> Explique o motivo das alterações, quais os impactos no negócio? Use exemplos
> caso necessário.
> 
> **Como testar a alteração?**
>
> Explique o passo a passo de como reproduzir o comportamento esperado da
> alteração.
> 
> **Relacionado com:**
> 
> Caso esse PR esteja relacionado com outros PRs de outros projetos, 
> liste-os com links para os respectivos PRs.
> 
> **Link para o ClickUp:**
> 
> Caso o PR tenha uma tarefa relacionada no ClickUp, cole o link para o card
> dela

O título do PR deve representar de forma clara e objetiva ao que ele se refere,
tente utilizar o mesmo padrão usado no commit:

```
<tipo>: <descrição>
```

Existe ainda dois tipos de PRs que fogem deste padrão:

- No PR de uma branch candidate para a branch release coloque no título a versão
da candidate: `Candidate X.Y.Z`.
- No PR da branch release para a branch master coloque no título a versão da
release: `Release X.Y.Z`.

Em ambos os casos, o corpo do PR deve seguir este padrão:

> **Novas features:**
>
> Liste as features que estão foram implementadas nesta versão, coloque links
> para os épicos ou features do ClickUp, por exemplo:
>
> - Nova Feature (https://app.clickup.com/t/abc1234)
>
> **Correções de bugs:**
>
> Liste os bugs que já aconteciam em produção que foram corrigidos nesta versão,
> adicione os links para eles no ClickUp da mesma forma que as features.
>
> **Revisões:**
>
> Liste as correções de bugs das features que estão sendo implementadas nesta
> versão, adicione também os links para eles no ClickUp.
>
> **Configurações:**
>
> Adicione as variáveis de ambiente, claims e descrição de procedimentos
> necessários para que as features e correções implementadas nesta versão possam
> ser executadas em ambiente de homologação ou produção.
>
> Caso exista a dependência de algum outro sistema, isso deverá estar descrito
> aqui, assim como qualquer processo manual que precise ser executado antes do
> lançamento da versão.

## 3. Padrões de código, testes e documentação

### 3.1. Linter

O projeto está configurado com o eslint e o prettier para validação e formatação
do código, ao usar o VSCode os problemas detectados serão apresentados como
erros ou alertas diretamente no código.

Ao fazer um commit um hook será executado e fará a validação do código, caso
algum erro seja encontrado, o commit será cancelado e os problemas serão
apresentados, você precisará resolver os problemas para conseguir fazer o
commit.

As principais regras de estilo de código para essa API são:

- Use tabulação com 4 espaços.
- Use aspas simples.
- Não utilize o ponto-e-virgula (;) no final das linhas.
- Não utilize o `console.log`, caso realmente seja necessário imprimir algo na
saída padrão do sistema utilize um método mais específico como `console.info` ou
`console.error`.
- Não deixe variáveis não utilizadas no código.
- Mantenha o código com a identação correta.

### 3.2. TypeScript

O projeto está configurado para usar TypeScript, todo novo código deverá ser
escrito em TypeScript, caso o projeto possua arquivos legados em JavaScript eles
deverão ser migrados para TypeScript assim que possível.

Usando o TypeScript se atente a estes pontos:

- Evite ao máximo o uso de `any` e `unknown`, utilize apenas se realmente não
for possível criar uma interface ou tipo para ser usado no lugar, e mesmo assim
é preferível usar o tipo `unknown` em vez do `any`.
- Crie os tipos e interfaces em arquivos com extensão `.d.ts`, também é possível
criar as interfaces em arquivos iniciados com `I`, por exemplo `IMyFeature`.
- Utilize `CamelCase` nos nomes do arquivos.

### 3.3. Testes unitários

O projeto já está configurado com o [Jest](https://jestjs.io/pt-BR/) para
execução dos testes unitários.

Toda nova funcionalidade deve possuir um ou mais testes unitários relacionados.
Os testes unitários devem atestar que os critérios de aceite foram implementados
e que os cenários de sucesso e de erro estão sendo tratados corretamente.

Evite o uso de requisições e consultas a banco de dados reais, utilize mocks
nestas situações, o objetivo principal é testar a implementação da regra de
negócio e não a integração com sistemas externos. As integrações serão avaliadas
pelos QAs de forma manual ou automática, ficando sob responsabilidade deles a
criação de tais testes.

Mantenha os arquivos de teste próximos à implementação que estão testando, se
possível no mesmo diretório, o nome do arquivo deve ser o mesmo nome do arquivo
da implementação, acrescido do sufixo "test" ou "spec". Por exemplo, o
arquivo `Feature.ts` será testado no arquivo `Feature.test.ts`.

Utilize um ou mais `describe` do Jest para refletir a organização do código que
será testado, por exemplo:

```typescript
describe('Recurso do sistema que está sendo testado', () => {
    describe('Funcionalidade do recurso que será testada', () => {
        it('deve ter o comportamento XYZ', () => {
            // validação do comportamento
        })
    })
})
```

### 3.4. JSDoc

Adicione marcações JSDoc ao código para documentar brevemente as regras de
negócio e comportamentos do sistema. Não é necessário documentar tipos de
propriedades e de retornos porque o TypeScript já nos fornecerá essa
documentação automaticamente.

O JSDoc deverá ser adicionado em classes para explicar o que elas representam no
mundo real ou no contexto do sistema. Também deverá ser adicionado em funções 
para explicar o que elas fazem e em quais situações podem ser usadas.

Lembre que o JSDoc é uma documentação adicional, os nomes de variáveis, classes
e interfaces deve representar exatamente o que elas são, evite abreviaturas,
mesmo que o nome fique grande.

Por exemplo, `lsAU()` é um péssimo nome de função, pois não permite entender o
que ela faz, porém `listActiveUsers()` nos permite entender o resultado esperado
ao executar a função.

As marcações JSDoc deverão ser escritas em português, porém o código sempre
deverá ser escrito em inglês.

### 3.5. OpenAPI

Para documentação de APIs REST usamos o padrão 
[OpenAPI v3.1.0](https://spec.openapis.org/oas/v3.1.0), a documentação deve ser
adicionada em uma pasta "docs" e ser escrita no formato YAML.

Todo endpoint deve ser documentado, o OperationId na documentação deve refletir
o nome do controller ou caso de uso executado pelo endpoint.

Caso um parâmetro, argumento, tipo de dado ou requisição e reposta seja
utilizado por mais de um endpoint, eles deverão ser criados separadamente para
serem reutilizados e não reescritos em cada endpoint.

## 4. Arquitetura

Visando padronizar o desenvolvimento dos sistemas definimos alguns padrões
arquitetonicos para os projetos de backend, se baseando principalmente nas
idéias da clean arquitecture.

### 4.1. Entidades

As entidades representam partes do negócio ou do ambiente em que o sistema está
inserido. Elas possuem as regras de negócio que definem o core da empresa, todas
as funcionalidades dos sistemas são resultados das interações entre as
entidades.

No sistema a entidade será criada como um subdiretório com o nome da entidade na
pasta `entities` e poderá ter a seguinte estrutura:

- `model`: O model é a representação da entidade, normalmente é uma classe
simples que define apenas as propriedades e suas tipagens com um construtor que
recebe um objeto com os dados da entidade, o nome do arquivo deve ser o próprio
nome da entidade, por exemplo:
    ```typescript
    // Arquivo entities/Book/Book.ts
    class Book {
        title: string
        year: number
        
        constructor(book: Book) {
            this.title = book.title
            this.year - book.year
        }
    }
    ```
- `repository`: O repository é uma classe que fornece os meios de obter, criar,
atualizar e apagar as entidades, é importante que seja criada uma interface que
declare os métodos possíveis para executar tais ações, depois outra classe ou
classes implementam a interface e fazem a comunicação com o mundo exterior da
aplicação (banco de dados ou outros sistemas).

    A declaração da interface pode ter o prefixo `I`, seguido do nome da
    entidade e do sufixo `Repository`, por exemplo: `IBookRepository`.

    A implementação deve indicar no seu nome onde será feita a busca da entidade
    como um prefixo, seguido também do nome da entidade e do sufixo
    `Repository`, por exemplo: `SQLBookRepository`.

- `factory` ou `adapter`: A factory ou adapter é uma classe estática, ou um
módulo com funções exportadas, que permite criar novas instâncias da entidade
e adaptá-la para o repository, o principal uso da factory seria converter o
retorno de uma consulta SQL, por exemplo, para uma instância da entidade, ou
converter uma entidade para ser usada em um insert no SQL, as funções mais
comuns da factory são:
    - `fromSQL` que converte o retorno de um registro do banco SQL para uma
    entidade.
    - `fromSQLList` que converte o retorno de vários registros do banco SQL para
    uma lista de entidades.
    - `toSQL` que converte uma entidade para os campos a serem usados no insert
    do SQL.

    A factory deve ser nomeada com o nome da entidade seguida do sufixo
    `Factory`, por exemplo: `BookFactory`.

    Também poderá ser nomeado como um adapter, mas desta vez com um prefixo que
    indique a origem da informação, sequido do nome da entidade e com o sufixo
    `Adapter`, por exemplo: `SQLBookAdapter`.

### 4.2. Casos de Uso

Os casos de uso gerenciam o fluxo de informações entre as entidades com o
objetivo de fazer elas cumprirem uma regra de negócio, os casos de uso em sua
grande maioria vão representar uma ação do usuário que afeta uma ou mais
entidades e possui um input e um output de dados.

O arquivo de caso de uso deve possuir o nome do caso de uso seguido do sufixo
`UseCase`, por exemplo: `ListBooksUseCase`.

O caso de uso é uma classe em que o método construtor receberá todas as
dependências que permitem interação com o mundo exterior, como os repositories,
seguindo o padrão de inversão de dependência, essas dependencias deverão ser
sempre declaradas com as interfaces, assim o caso de uso funcionará de forma
igual para todas as possíveis implementações dessas interfaces.

O caso de uso opcionalmente terá uma método prepare que receberá o input de
dados e fará validações e tratamentos, disparando exceções caso algum problema
seja encontrado.

Pode ser interessante criar uma classe validadora em conjunto
com o caso de uso, para separar as lógicas de validação da regra de negócio
principal que o caso de uso representa, neste caso crie um arquivo com o nome
do caso de uso seguido do sufixo `Validator`, por exemplo: `ListBooksValidator`.

O método execute no caso de uso é o que aplicará a regra de negócio que ele
representa, devolvendo em seu retorno o output esperado pelo usuário.

Os casos de uso em sua maioria estão diretamente relacionados a um contexto,
devendo ser criados no diretório do contexto, porém é possível que existam casos
de uso mais genéricos, que podem ser reautilizados em mais de um contexto, neste
caso eles poderão ser criados em uma pasta `useCases` na raiz do projeto.

### 4.3. Contextos

Para melhor organização do código, tudo o que for relacionado a uma feature do
sistema deverá ficar agrupado dentro de um contexto, o contexto em resumo seria
apenas um diretório com o nome do contexto criado dentro do diretório `contexts`
na raiz do projeto, ele pode ter um arquivo index que exporte todo o conteúdo do
contexto.

Os itens que podem ser agrupados em um contexto podem ser:

- **Casos de uso:** Os casos de uso relacionados a feature.
- **Validadores de casos de uso:** Os validadores de input dos casos de uso.
- **Controllers de servidores:** Controladores que constroem as dependencias e
executam os casos de uso expondo-os em um serviço público, como uma API REST.
- **Serviços especializados para o contexto:** Implementação de serviços do
mundo exterior da aplicação necessários para a feature.
- **Entidades especializadas para o contexto:** São entidades que estendem as
entidades principais adicionando propriedades que só existem quando elas estão
no contexto da feature, por exemplo em um contexto de coleção de livros eles
teriam uma propriedade de número do livro que só faz sentido existir no contexto
de uma coleção.
- **Adaptadores para os servidores:** Implementações que adaptam a entrada
e a saida de informação do mundo externo para o sistema no contexto da feature.

Dentro do contexto, os itens podem ser agrupados em subdiretórios conforme a
necessidade, segue um exemplo de contexto:

- contexts/BookCase
    - index.ts
    - useCases
        - ListBookUseCase.ts
        - ListBookUseCase.test.ts
        - AddBookUseCase.ts
        - AddBookUseCase.test.ts
    - validators
        - ListBookValidator.ts
        - ListBookValidator.test.ts
        - AddBookValidator.ts
        - AddBookValidator.test.ts
    - controllers
        - ListBookPageController.ts
        - ListBookPageController.test.ts
        - AddBookController.ts
        - AddBookCOntroller.test.ts
    - adapters
        - BookPageResponseAdapter.ts
        - BookPageResponseAdapter.test.ts
        - BookCreationRequestAdapter.ts
        - BookCreationRequestAdapter.test.ts
        - BookCreationResponseAdapter.ts
        - BookCreationResponseAdapter.test.ts
    - services
        - INewBookNotificationService.ts
        - NewBookNotificationEmailService.ts
        - NewBookNotificationEmailService.test.ts


### 4.4. Servidores, controladores, adaptadores e serviços para o mundo externo

O sistema deve existir e funcionar em seu próprio contexto, independente do
mundo exterior, porém para que ele possa ser utilizado no mundo real precisa
ter uma camada que faz a conexão do sistema com o exterior, nessa camada as
regras de negócio são abstraidas pelos casos de uso e entidades da camada
anterior.

Nesta camada podemos ter:

- **Servidores:** Os servidores fornecem um meio do mundo externo interagir com
o sistema, a forma mais comum é através de uma API REST com o Express, mas
poderia ser através de Pub/Sub, GraphQL, RPC entre outros. 

    O servidor deve ser criado dentro do diretório `server` na raiz do projeto
    e conter quaisquer outros arquivos e configurações necessários, como por
    exemplo middlewares e definições de rotas.
- **Controladores:** Os controladores (ou *controllers*) são os códigos onde
todas as peças do sistema se encontram, eles são acessados diretamente pelos
servidores e criam as instâncias dos casos de uso, repositories, serviços etc.

    O ideal é que sejam criados dentro do contexto da feature ao qual pertencem, 
    em um diretório `controllers`. Podem ser classes ou módulos, de acordo com o
    framework escolhido do servidor. O nome deve ter o nome da ação controlada
    por ele seguido do sufixo `Controller`, por exemplo: `AddBookController`.
- **Adaptadores:** Os adaptadores são classes ou tipos que representam as
informações do mundo exterior, diferentemente dos adaptadores de entidade, que
representam uma única entidade, os adaptadores do sistema podem conter nenhuma,
uma ou várias entidades representadas. Seu objetivo principal é mapear o input e
o output de informação através de servidores e serviços que são utilizados em
interfaces gráficas ou outros sistemas.

    Os adaptadores devem ser criados dentro do contexto da feature ao qual
    pertencem, em um diretório `adapters` e devem ter o nome da informação que
    representam seguido do sufixo `Adapter`, para o padrão REST é recomendado
    adicionar o sufixo `Request` para requisições ao servidor ou `Response` para
    respostas do servidor também.

    Exemplos: Uma requisição REST que contenha um corpo JSON para a criação de
    um livro pode ser representada no `BookCreationRequestAdapter`, a resposta
    da criação desse livro, também em JSON, pode ser representada no 
    `BookCreationResponseAdapter`.
- **Serviços:** Os serviços se parecem com os servidores, porém com a função
inversa, permitem que o sistema interaja com o mundo exteno. A forma mais comum
é através de APIs REST com o Axios, mas também poderia ser através de Pub/Sub,
GraphQL, RPC entre outros.

    O serviço deve ser criado dentro do contexto da feature ao qual pertence, no
    diretório `services`, mas caso seja um serviço genérico usado em mais de um
    contexto, poderá ser criado em um diretório `services` na raiz do projeto.
    
    O serviço obrigatóriamente precisa de uma interface que será utilizada como
    dependência inversa nos casos de uso, declarando os métodos que poderão ser
    utilizados para interagir com o sistema externo, a nomenclatura da interface
    pode ter o prefixo `I`, seguido do nome do serviço e adicionado do sufixo 
    `Service`, por exemplo: `INewBookNotificationService` seria uma interface
    para um serviço que envia notificações quando um livro for adicionado.

    As implementações da interface devem conter como prefixo ou sufixo uma
    identificação do tipo de serviço implementado, além do nome do serviço e do
    sufixo `Service`, exemplos de possíveis nomes para serviços hipotéticos:

    - `NewBookNotificationEmailService`: Serviço de notificação de novos livros
    por e-mail.
    - `SMSOrderNotificationService`: Serviço de notificação de pedido por SMS.
    - `StoreFrontAPIService`: Serviço de API REST de um sistema balcão de loja.
    - `QueueStockUpdateService`: Serviço de fila de atualização de estoque.

## 5. Sugestões de melhorias

Todo projeto está aberto para sugestões de melhorias e evoluções, quando
identificar alguma melhoria registre-a no board de ideias no ClickUp e comunique
seu gestor e colegas de time sobre a sugestão, caso não existam tarefas 
disponíveis na sprint e você já tenha finalizado todas atribuídas a você, busque
na lista de ideias algo em que gostaria de trabalhar e inicie o desenvolvimento
de forma separada das features da versão, essas melhorias poderão ser inclusas
posteriormente na versão atual ou em uma próxima versão.

<br><br>
Bom código!<br>
Equipe de Tecnologia

*Revisado em 03/11/2022*

