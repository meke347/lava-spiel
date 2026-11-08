// =====================================================================
//  EINSTELLUNGEN & BILDER – hier tauschst du Figuren und Grafiken aus
// =====================================================================
//  Eigene Bilder einfach in den Ordner public/bilder/ legen und unten
//  den Dateinamen eintragen. Am besten quadratische PNGs mit
//  durchsichtigem Hintergrund (z. B. 256 x 256 Pixel).
//  Leeres Feld ('') = das Spiel zeichnet die Grafik selbst.
// =====================================================================

window.SPIEL_CONFIG = {
  titel: 'Der Boden ist Lava!',

  // Spielfiguren (Name + Bild). Es dürfen auch mehr oder weniger sein.
  // "farbe" wird für Rahmen und Markierungen benutzt.
  figuren: [
    { name: 'Bluey',  bild: 'bilder/figuren/bluey.jpg',  farbe: '#3d7be0' },
    { name: 'Bingo',  bild: 'bilder/figuren/bingo.jpg',  farbe: '#e8873a' },
    { name: 'Bandit', bild: 'bilder/figuren/bandit.jpg', farbe: '#2f4f8f' },
    { name: 'Chilli', bild: 'bilder/figuren/chilli.jpg', farbe: '#d9a066' },
  ],

  bilder: {
    // feste Möbel je Raum (z. B. Sofa, Spielzeugkiste, Baumstumpf, Holzplattform)
    moebel: {
      wohnzimmer:   '',
      kinderzimmer: '',
      garten:       '',
      spielplatz:   '',
    },
    kissen:    '',   // sinkendes Kissen
    trampolin: '',   // Trampolin
    brett:     '',   // fahrendes Rollbrett
    ziel:      '',   // Ziel-Feld
    stern:     '',   // Sammelstern
    titelbild: '',   // großes Bild auf dem Startbildschirm
  },

  // Eigene Musik (z. B. 'musik/lied.mp3'), leer = eingebaute Melodie
  musik: '',

  // Spielregeln
  kissenZeit: 1800,       // so lange (ms) hält ein Kissen, bevor es versinkt
  kissenWiederDa: 3000,   // nach so vielen ms taucht es wieder auf
};
