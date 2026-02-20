
async function loadAlbum(){
  const res = await fetch('albums/ejemplo-0702263/album.json');
  const data = await res.json();
  return data;
}

function createCard(src, watermarkText){
  const card = document.createElement('div');
  card.className = 'card';
  const img = document.createElement('img');
  img.loading = 'lazy';
  img.src = src;
  img.alt = 'Foto';
  img.addEventListener('load', ()=> card.classList.add('loaded'));

  const wm = document.createElement('div');
  wm.className = 'wm';
  const span = document.createElement('span');
  span.textContent = watermarkText;
  wm.appendChild(span);

  card.appendChild(img);
  card.appendChild(wm);
  return card;
}

(async ()=>{
  const album = await loadAlbum();
  document.getElementById('albumTitle').textContent = album.title;
  document.getElementById('albumMeta').textContent = `${album.date} · Hasta ${album.download_zip.expires_on}`;
  const dl = document.getElementById('downloadAll');
  dl.href = album.download_zip.url;

  const grid = document.getElementById('grid');
  const wmText = 'Previsualización · Andrea Urrejola';

  // Render images
  if(Array.isArray(album.images)){
    album.images.slice(0, album.max_photos || 200).forEach(name => {
      const src = `albums/ejemplo-0702263/images/${name}`;
      grid.appendChild(createCard(src, wmText));
    });
  }
})();
