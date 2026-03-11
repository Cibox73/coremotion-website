const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Cache-Control Header für alle Responses
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    next();
});

// Statische Dateien aus dem aktuellen Verzeichnis servieren
app.use(express.static(path.join(__dirname)));

// Route für die Hauptseite
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route für dienstleistungen.html
app.get('/dienstleistungen.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'dienstleistungen.html'));
});

// Fallback für alle anderen Routen - zeige index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Server starten
app.listen(PORT, () => {
    console.log(`🚀 Server läuft auf http://localhost:${PORT}`);
    console.log(`📁 Statische Dateien werden aus: ${__dirname} serviert`);
    console.log(`🌐 Öffne http://localhost:${PORT} in deinem Browser`);
    console.log(`🔧 Cache-Control ist aktiviert - kein Caching`);
});
