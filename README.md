# E-handelsapplikation - React Demo

Detta projekt är en demonstration av **komponentbaserad arkitektur** i React. Applikationen visar hur man bygger moderna webbapplikationer genom att dela upp användargränssnittet i återanvändbara komponenter.

## Om Komponentbaserad Arkitektur

En komponent är en JavaScript-funktion som returnerar JSX och representerar en del av användargränssnittet. Tänk på det som en anpassad HTML-tagg som du själv definierar.

Denna demo implementerar komponenthierarkin som beskrivs i [Glimåkra Webbutvecklare - Kapitel 8](https://kursbok2024.hoster.glimnet.se/kapitel_8/index.html#vad-%C3%A4r-en-komponentbaserad-arkitektur):

```
App
├── Header
│   ├── Logo
│   └── Navigation
├── Main
│   ├── Sidebar
│   │   ├── SearchFilter
│   │   └── CategoryFilter
│   └── ProductList
│       └── ProductCard (flera instanser)
└── Footer
```

## Funktioner

- **Sökfunktion**: Filtrera produkter i realtid
- **Kategorfilter**: Välj produktkategorier med radioknappar
- **Responsiv design**: Anpassar sig till olika skärmstorlekar
- **Komponentbaserad struktur**: Varje del av applikationen är en återanvändbar komponent
- **CSS-moduler**: Separata CSS-filer för varje komponent

## Teknisk Stack

- **React** - Komponentbaserat JavaScript-bibliotek
- **Vite** - Snabb utvecklingsserver och byggverktyg
- **CSS3** - Modern styling med flexbox och grid
- **JavaScript ES6+** - Modern JavaScript-syntax

## Komponentöversikt

### Huvudkomponenter
- `App` - Huvudkomponent som hanterar state och layout
- `Header` - Sidhuvud med titel och välkomstmeddelande
- `Nav` - Navigationsmenyn
- `Logo` - Logotyp med ikon

### Funktionella Komponenter
- `Sidebar` - Innehåller filter för sökning och kategorier
- `SearchFilter` - Textfält för produktsökning
- `CategoryFilter` - Radioknappar för kategorival
- `ProductList` - Container som visar filtrerade produkter
- `ProductCard` - Individuell produktkort med titel, pris och kategori
- `Footer` - Sidfot med länkar

## Installation och Körning

```bash
# Installera beroenden
npm install

# Starta utvecklingsserver
npm run dev

# Bygg för produktion
npm run build
```

## Lärande Mål

Detta projekt demonstrerar:
- Komponentuppdelning och hierarki
- Props för dataöverföring mellan komponenter
- State management för interaktivitet
- Event handling för användarinteraktion
- Conditional rendering baserat på filter
- CSS-organisation per komponent

Mer information om komponentbaserad arkitektur finns i [kursboken](https://kursbok2024.hoster.glimnet.se/kapitel_8/index.html#vad-%C3%A4r-en-komponentbaserad-arkitektur).
