
# Integra Contador OpenSource

## 🔥 Projeto

Solução Open Source para integração com a API Integra Contador (Serpro), permitindo:

- Consultas de dados fiscais
- Emissão de documentos (DAS, DEFIS, DCTFWeb)
- Envio de declarações
- Sistema completo: Backend (FastAPI) + Frontend (React) + Docker

Projeto pensado para contadores, sistemas ERP e empresas que precisam integração oficial com a Receita Federal.

---

## 🧩 Tecnologias Utilizadas

- **Backend**: Python 3.11, FastAPI, HTTPX, Docker
- **Frontend**: React 18, TailwindCSS, Axios, Docker
- **Comunicação**: OAuth2 + Certificado Digital A1

---

## 📂 Estrutura do Projeto

/backend

API FastAPI

Autenticação OAuth2 com certificado digital /frontend

Frontend ReactJS

Comunicação com API docker-compose.yml

Orquestra backend e frontend 

---

---

## 🚀 Como Rodar Localmente

### 1. Clone o repositório

git clone https://github.com/SEU-USUARIO/integra-contador-opensource.git
cd integra-contador-opensource

2. Configure o ambiente
Crie o arquivo .env dentro de /backend:

cp backend/.env.example backend/.env

3. Rode tudo com Docker Compose
docker-compose up --build

4. Acesse
Backend (FastAPI - documentação Swagger): http://localhost:8000/docs

Frontend (ReactJS): http://localhost:3000

⚡ Endpoints Disponíveis

Método	Rota	Função
POST	/consultar	Consulta informações fiscais
POST	/emitir	Emissão de documentos (DAS, DEFIS)
POST	/declarar	Envio de declarações fiscais (DEFIS)
📜 Licença
Este projeto está licenciado sob a licença MIT.
Sinta-se livre para usar, modificar e distribuir!

🙌 Contribuições
Contribuições são bem-vindas!
Faça um fork, crie uma branch (git checkout -b feature/sua-feature), realize suas alterações e envie um Pull Request!
