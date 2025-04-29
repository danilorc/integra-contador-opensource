import os
from dotenv import load_dotenv

# Carrega variáveis do .env
load_dotenv()

class Settings:
    CLIENT_ID = os.getenv("SERPRO_CLIENT_ID")
    CLIENT_SECRET = os.getenv("SERPRO_CLIENT_SECRET")
    TOKEN_URL = os.getenv("SERPRO_TOKEN_URL")
    API_URL = os.getenv("SERPRO_API_URL")
    CERTIFICATE_PATH = os.getenv("CERTIFICATE_PATH")
    CERTIFICATE_PASSWORD = os.getenv("CERTIFICATE_PASSWORD")

settings = Settings()
