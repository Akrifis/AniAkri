import httpx
from bs4 import BeautifulSoup

async def parse_anime(anime_id: int):
    url = f"https://shikimori.one/animes/{anime_id}"
    async with httpx.AsyncClient() as client:
        response = await client.get(url)
    
    soup = BeautifulSoup(response.text, 'html.parser')
    
    return {
        "title": soup.find('h1').get_text(strip=True),
        "description": soup.find('div', class_='text').get_text(strip=True),
        "rating": float(soup.find('div', class_='score-value').get_text(strip=True)),
        "poster_url": soup.find('img', class_='poster')['src']
    }
