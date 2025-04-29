import httpx
from .auth import get_access_token
from .config import settings
from .logger import logger

async def consultar(payload: dict):
    token = await get_access_token()
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }

    async with httpx.AsyncClient() as client:
        logger.info("Chamando API de consulta...")
        response = await client.post(f"{settings.API_URL}/consultar", json=payload, headers=headers)
        response.raise_for_status()
        return response.json()

async def emitir(payload: dict):
    token = await get_access_token()
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }

    async with httpx.AsyncClient() as client:
        logger.info("Chamando API de emissão...")
        response = await client.post(f"{settings.API_URL}/emitir", json=payload, headers=headers)
        response.raise_for_status()
        return response.json()

async def declarar(payload: dict):
    token = await get_access_token()
    headers = {
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json"
    }

    async with httpx.AsyncClient() as client:
        logger.info("Chamando API de declaração...")
        response = await client.post(f"{settings.API_URL}/declarar", json=payload, headers=headers)
        response.raise_for_status()
        return response.json()
