
async function loadAlbum(){
  const res = await fetch('albums/ejemplo-0702263/album.json');
  const data = await res.json();
  return data;
}

function gate(pinExpected){
  const pinInput = document.getElementById('pinInput');
  const btn = document.getElementById('pinBtn');
  const pinView = document.getElementById('pinView');
  const galleryView = document.getElementById('galleryView');

  function openGallery(){
    pinView.style.display = 'none';
    galleryView.style.display = '';
  }

  // Allow Enter key
  pinInput.addEventListener('keypress', (e)=>{ if(e.key==='Enter'){ btn.click(); } });

  btn.addEventListener('click', ()=>{
    const v = pinInput.value.trim();
    if(!v){ alert('Ingresa el PIN'); return; }
    if(v===pinExpected){
      sessionStorage.setItem('albumAccess', 'ok');
      openGallery();
    } else {
      alert('PIN incorrecto');
    }
  });

  // If already validated in this session
  if(sessionStorage.getItem('albumAccess')==='ok'){
    openGallery();
  }
}

(async ()=>{
  const album = await loadAlbum();
  document.getElementById('pinHint').textContent = 'Pista: ' + (album.pin_hint || 'Fecha del matrimonio');
  gate(album.pin);
})();
