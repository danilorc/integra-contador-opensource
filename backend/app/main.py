from fastapi import FastAPI
from app.services import consultar, emitir, declarar

app = FastAPI(title="Integra Contador OpenSource")

@app.post("/consultar")
async def consultar_dados(payload: dict):
    resposta = await consultar(payload)
    return resposta

@app.post("/emitir")
async def emitir_documento(payload: dict):
    resposta = await emitir(payload)
    return resposta

@app.post("/declarar")
async def declarar_documento(payload: dict):
    resposta = await declarar(payload)
    return resposta
