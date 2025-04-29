FROM python:3.11-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia as dependências
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copia o restante do código
COPY . .

# Expõe a porta da API
EXPOSE 8000

# Comando para iniciar o FastAPI com Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
