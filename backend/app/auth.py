import httpx
import time
from .config import settings
from .logger import logger

# Cache simples para armazenar o token temporariamente
_token_cache = {"token": None, "expires_at": 0}

async def get_access_token():
    now = time.time()

    # Se já existe um token válido, reutiliza
    if _token_cache["token"] and _token_cache["expires_at"] > now:
        logger.info("Token válido encontrado em cache.")
        return _token_cache["token"]

    cert = (settings.CERTIFICATE_PATH, settings.CERTIFICATE_PASSWORD)

    async with httpx.AsyncClient(cert=cert) as client:
        data = {
            "grant_type": "client_credentials",
            "client_id": settings.CLIENT_ID,
            "client_secret": settings.CLIENT_SECRET
        }
        headers = {"Content-Type": "application/x-www-form-urlencoded"}

        logger.info("Solicitando novo token de acesso...")
        response = await client.post(settings.TOKEN_URL, data=data, headers=headers)

        response.raise_for_status()
        res_json = response.json()

        _token_cache["token"] = res_json.get('access_token')
        _token_cache["expires_at"] = now + res_json.get('expires_in', 3600) - 60  # 1 min de segurança

        logger.info("Novo token armazenado em cache.")
        return _token_cache["token"]
