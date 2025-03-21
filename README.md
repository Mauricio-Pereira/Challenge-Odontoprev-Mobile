# Challenge Odontoprev Mobile

Aplicativo mobile desenvolvido em React Native e Expo para gerenciar procedimentos odontológicos e prevenir fraudes. Este app conta com autenticação de usuário, inputs dinâmicos com máscaras, integração de busca de CEP para preenchimento automático de endereços e uma estrutura de projeto modular.

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
- **Autenticação e Criação de Conta:** Processos de cadastro e login de forma segura.  
- **Navegação Personalizada:** Fluxo de navegação fluido com React Navigation.  
- **Máscaras de Input:** Campos de CPF, data e telefone usando componentes de máscara.  
- **Busca de CEP:** Integração para preenchimento automático de endereço.  
- **Design Modular:** Componentes, telas, estilos e funções utilitárias bem organizados.

## Estrutura do Projeto
O projeto foi organizado para ser escalável e de fácil manutenção:

```
Challenge-Odontoprev-Mobile/
│
├── .expo/                      # Configurações e assets do Expo
├── assets/                     # Imagens, fontes e outros recursos
├── src/
│   ├── components/             # Componentes reutilizáveis de UI
│   │   ├── CPFInput.js
│   │   ├── DateInput.js
│   │   └── Header.js
│   │
│   ├── navigation/             # Configurações de navegação
│   │   └── StackNavigator.js
│   │
│   ├── screens/                # Telas do aplicativo
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   ├── PersonalDataScreenRegister.js
│   │   ├── AddressScreenRegister.js
│   │   ├── AccountDataScreen.js
│   │   └── FinalRegistrationScreen.js
│   │
│   ├── styles/                 # Arquivos de estilo para componentes e telas
│   │   ├── accountDataScreen.js
│   │   ├── addressStyles.js
│   │   ├── colors.js
│   │   ├── finalRegistrationStyles.js
│   │   ├── globalStyles.js
│   │   ├── homeStyles.js
│   │   ├── loginStyles.js
│   │   └── personalDataStyles.js
│   │
│   └── utils/                  # Funções de validação e formatação
│       ├── formatters.js
│       └── validations.js
│
├── App.js                      # Ponto de entrada principal do aplicativo
├── app.json                    # Configurações do Expo
├── index.js                    # Arquivo de inicialização do aplicativo
└── package.json                # Dependências e scripts NPM
```

## Iniciando o Projeto

Siga estes passos para configurar e executar o projeto localmente:

1. **Clonar o Repositório**  
   ```sh
   git clone <url_do_repositorio>
   cd Challenge-Odontoprev-Mobile
   ```

2. **Instalar Dependências**  
   Certifique-se de ter o Node.js instalado. Em seguida, rode:
   ```sh
   npm install
   ```

3. **Iniciar o Servidor Expo**  
   Inicie o servidor de desenvolvimento do Expo:
   ```sh
   npm start
   ```
   Isso vai abrir o Expo Dev Tools no seu navegador. Você pode rodar o app em um emulador ou escanear o QR code com o aplicativo Expo Go no seu dispositivo móvel.

## Instalação

- **Node.js:** Baixe e instale do [site oficial](https://nodejs.org/).  
- **Expo CLI:** Instale globalmente com:
  ```sh
  npm install -g expo-cli
  ```
- **Emuladores Android/iOS:** Para desenvolvimento mobile, instale Android Studio ou Xcode conforme necessário.

## Scripts

Scripts úteis definidos no `package.json`:

- **Iniciar o Expo:**  
  ```sh
  npm start
  ```
- **Rodar no Android:**  
  ```sh
  npm run android
  ```
- **Rodar no iOS:**  
  ```sh
  npm run ios
  ```
- **Rodar no Web (se configurado):**  
  ```sh
  npm run web
  ```

## Dependências

Algumas das principais bibliotecas e ferramentas usadas neste projeto:

- **React Native & Expo:** Base para desenvolvimento e deploy do app.
- **React Navigation:** Para gerenciar a navegação entre telas.
- **react-native-masked-text:** Para máscaras de input (CPF, telefone etc.).
- **Axios/Fetch:** (Se aplicável) para chamadas de API e busca de CEP.
- **Bibliotecas Adicionais:** Verifique o `package.json` para a lista completa.

## Uso

Após iniciar o projeto, você pode:
- Criar conta e gerenciar a autenticação.
- Inserir dados pessoais e de conta com validações em tempo real.
- Usar máscaras de input e buscas de CEP.

## Contribuintes

- RM553542 Luiz Otávio - 2TDSPR  
- RM553483 Vitor de Melo - 2TDSPR  
- RM553748 Mauricio Pereira - 2TDSPC  

## Licença

Este projeto está licenciado sob a Licença MIT.  
Sinta-se à vontade para usar, modificar e distribuir de acordo com os termos do licenciamento.