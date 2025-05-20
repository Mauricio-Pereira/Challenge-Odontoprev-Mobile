# Challenge Odontoprev Mobile

Aplicativo mobile desenvolvido em React Native com Expo, focado na prevenção de fraudes em procedimentos odontológicos. O app permite cadastro de usuários, login seguro, visualização e gerenciamento de usuários (CRUD), integração com uma API Java Spring Boot, e persistência de dados usando Async Storage.

## Sumário
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Iniciando o Projeto](#iniciando-o-projeto)
- [Instalação](#instalação)
- [Scripts](#scripts)
- [Dependências](#dependências)
- [Uso](#uso)
- [Contribuintes](#contribuintes)
- [Licença](#licença)

## Funcionalidades

- **CRUD Completo de Usuários:** Listagem paginada, criação, edição e exclusão de usuários cadastrados.
- **Integração com API Spring Boot:** Todas as ações CRUD são integradas à API Java com persistência real de dados.
- **Login e Autenticação:** Login via API com senhas criptografadas e gerenciamento de sessão com Async Storage.
- **Acesso Restrito por Perfil:** Apenas usuários administradores visualizam e gerenciam usuários cadastrados.
- **Formulários com Máscaras:** Campos com máscaras para CPF, telefone e data de nascimento.
- **Busca de CEP Automatizada:** Preenchimento automático de endereço com base no CEP.
- **Navegação Personalizada:** Stack navigation com headers customizados e logout funcional.
- **Design Responsivo e Modular:** Componentes reaproveitáveis, estilos separados e estrutura organizada.

## Estrutura do Projeto

```

Challenge-Odontoprev-Mobile/
│
├── assets/                     # Imagens e logos
├── src/
│   ├── components/             # Componentes reutilizáveis (ex: Header)
│   ├── navigation/             # Stack Navigator
│   ├── screens/                # Telas: Login, Cadastro, Home, Usuários, etc.
│   ├── services/               # Configuração de chamadas à API externa
│   ├── styles/                 # Estilos organizados por tela
│   └── utils/                  # Validações e formatadores
├── App.js                      # Entrada principal
├── app.json                    # Configurações do Expo
└── package.json                # Dependências e scripts

````

### 🧩 Integração com o Backend (Java API)

Este projeto depende do backend desenvolvido em Java, disponível em:

🔗 **[FraudWatch-Java - GitHub](https://github.com/Mauricio-Pereira/FraudWatch-Java)**

#### Como rodar o backend:

1. Clone o repositório:

```bash
git clone https://github.com/Mauricio-Pereira/FraudWatch-Java
cd FraudWatch-Java
```

2. Rode com Docker Compose:

```bash
docker-compose up --build
```

> Isso irá subir a API Java Spring Boot juntamente com o banco de dados Oracle e outras dependências.

#### ⚠️ Ajuste necessário no App Mobile:

Para que o app mobile consiga acessar a API Java corretamente via rede local (por exemplo, testando no celular com Expo Go), é necessário **ajustar o IP da máquina host no arquivo:**

📄 `src/services/api.js`

```js
// Exemplo:
const api = axios.create({
  baseURL: "http://SEU_IP_LOCAL:8080",
});
```

Substitua `SEU_IP_LOCAL` pelo IP da sua máquina na rede.
Para descobrir o IP local:

* **Windows (cmd):** `ipconfig`
* **Mac/Linux (terminal):** `ifconfig`

Procure por algo como `192.168.x.x` ou `10.0.x.x`.


## Iniciando o Projeto

1. **Clonar o Repositório**
```bash
git clone https://github.com/Mauricio-Pereira/Challenge-Odontoprev-Mobile
cd Challenge-Odontoprev-Mobile
````

2. **Instalar as Dependências**

```bash
npm install
```

3. **Rodar o Projeto**

```bash
npm start
```

> Escaneie o QR Code com o aplicativo **Expo Go** no seu celular.

## Instalação

* **Node.js**: [https://nodejs.org](https://nodejs.org)
* **Expo CLI**:

```bash
npm install -g expo-cli
```

* **Backend Java API**: Clonar e rodar o projeto `FraudWatch-Java` em Docker ou localmente para ativar os endpoints REST que o app consome. Uma Explicação mais detalhada foi feita acima.

## Scripts

```bash
npm start        # Inicia o Expo
npm run android  # Roda no Android (se emulador estiver ativo)
npm run ios      # Roda no iOS (Mac + Xcode)
npm run web      # Abre versão web (experimental)
```

## Dependências

* **React Native / Expo**
* **React Navigation**
* **Axios**
* **Async Storage**
* **react-native-masked-text** (máscaras de input)
* **Outras**: consultar `package.json` para detalhes.

## Uso

* Criar uma conta preenchendo nome, endereço e dados de acesso.
* Login com persistência de sessão via Async Storage.
* Usuários com perfil **Administrador** visualizam todos os usuários e podem editar/excluir.
* Somente o Administrador do sistema pode criar outros usuários do tipo administrador, feita pela plataforma spring mvc.
* Dados validados antes de enviar (formatos corretos de CPF, telefone, etc).
* Integração 100% funcional com a API Java FraudWatch (via Docker ou local).

## Contribuintes

* RM553542 Luiz Otávio – 2TDSPR
* RM553483 Vitor de Melo – 2TDSPR
* RM553748 Mauricio Pereira – 2TDSPC

## Licença

Este projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).


