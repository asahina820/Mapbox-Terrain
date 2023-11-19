// Mapboxアクセストークン
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const map = new mapboxgl.Map({
  container: 'map',
  center: [138.73381, 35.35056], // 中心座標
  zoom: 12, // ズームレベル
  pitch: 52, // 傾き
  style: 'mapbox://styles/mapbox/satellite-streets-v12',
});

map.on('style.load', () => {
  map.addSource('mapbox-dem', {
    type: 'raster-dem',
    url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
    tileSize: 512,
    maxzoom: 14,
  });
  // add the DEM source as a terrain layer with exaggerated height
  map.setTerrain({source: 'mapbox-dem', exaggeration: 1});
});
