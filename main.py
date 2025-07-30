from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import httpx
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Anime(BaseModel):
    id: int
    title: str
    description: str
    rating: float
    poster_url: str
    episodes: List[dict]

@app.get("/api/anime/{anime_id}", response_model=Anime)
async def get_anime(anime_id: int):
    # Здесь будет интеграция с парсерами
    return {
        "id": anime_id,
        "title": "Пример аниме",
        "description": "Описание аниме...",
        "rating": 8.5,
        "poster_url": "https://example.com/poster.jpg",
        "episodes": [{"num": 1, "url": "https://kodik/123"}]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
