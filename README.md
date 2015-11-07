# YearCompass-online specifikáció

## Tartalomjegyzék
<!-- TOC depth:6 withLinks:0 updateOnSave:1 orderedList:0 -->

- YearCompass-online specifikáció
	- Tartalomjegyzék
	- Összefoglaló
	- Szereplők listája
	- Oldalak listája
	- Történetek
		- A látogató történetei
			- Kezdőoldal
				- A látogató a bejelentkezés gombra kattint
				- A látogató nyelvet választ
		- A bejelentkezett felhasználó történetei
			- Kezdőoldal
				- A bejelentkezett felhasználó kijelentkezik
				- A bejelentkezett felhasználó megkezdi a kitöltést
			- Üdvözlőoldal
				- A bejelentkezett felhasználó nyelvet választ
				- A bejelentkezett felhasználó kijelentkezik
				- A bejelentkezett felhasználó megkezdi a kitöltést
			- Lezárandó év oldal
				- A bejelentkezett felhasználó megválaszol egy kérdést
				- A bejelentkezett felhasználó elnavigál az oldaról
			- Tervezendő év oldal
			- Befejezőoldal
				- A bejelentkezett felhasználó befejezi a kitöltést
				- A bejelentkezett felhasználó megosztja a YC-online elérhetőségét
	- Rendszerrel kapcsolatos állítások
	- Jegyzet
		- !v1
<!-- /TOC -->


## Összefoglaló
A YearCompass-online (YC-online) lehetővé teszi, hogy a YearCompass évrendező füzet online módon is kitölthetővé váljon, így szélesebb réteghez eljuttatva a tudatos évrendezés fontosságát.

## Szereplők listája
- látogató (nem regisztrált felhasználó)
- bejelentkezett felhasználó
(- rendszeradminisztrátor)

## Oldalak listája
- kezdőoldal
- üdvözlőoldal
- lezárandó év oldala
- tervezendő év oldala
- befejezőoldal

## Történetek
### A látogató történetei
#### Kezdőoldal
**Elemek**
- navigációs elemek
    + link a http://yearcompass.com oldalra
- tartalmi elemek
    + leírás a YC mozgalomról
    + leírás az azonosítás szükségességéről
- adatbeviteli elemek
    + bejelentkezés facebook segítségével gomb
    + nyelvválasztó az elérhető nyelvekkel

##### A látogató a bejelentkezés gombra kattint
- **leírás**: A látogató a bejelentkezés facebook segítségével gombra kattint. Böngészőjében új ablak nyílik, amelyben engedélyezi a YC facebook app (appId: '171485476532772') részére az adataihoz (név, email cím, profilkép) való hozzáférést.
- **hibakezelés**: Hibás azonosítás esetén a rendszer hibaüzenetet jelenít meg.
- **sikeres művelet**: Sikeres azonosítás esetén a rendszer megerősítő üzenetet jelenít meg, és a látogatót automatikusan átirányítja az üdvözlőoldalra.

##### A látogató nyelvet választ
- **leírás**: A látogató a nyelvválasztó segítségével választhat az elérhető nyelvek közül. Az oldal nyelve alapesetben angol.
- **hibakezelés**: Ha nem sikerül a nyelvválasztás, az oldal az alapértelmezett angol változatot jeleníti meg.
- **sikeres művelet**: Sikeres nyelvválasztás esetén az oldalon lévő fordítható elemek a kiválasztott nyelven jelennek meg. A nyelvválasztó mutatja az aktuálisan kiválasztott nyelvet.

### A bejelentkezett felhasználó történetei
#### Kezdőoldal
**Elemek**
Megegyezik a látogató által látott kezdőoldallal, azzal a különbséggel, hogy a 'bejelentkezés facebook segítségével' gomb helyett a következő tartalmi elemek érhetők el:
- azonosított felhasználó neve
- kijelentkezés gomb
- kitöltés megkezdése gomb

##### A bejelentkezett felhasználó kijelentkezik
- **leírás**: A bejelentkezett felhasználó a kijelentkezés gombra kattint.
- **hibakezelés**: Sikertelen művelet esetén a rendszer a bejelentkezett felhasználót kijelentkezteti.
- **sikeres művelet**: A rendszer a bejelentkezett felhasználót kijelentkezteti, és a látogató számára elérhető kezdőoldalt jeleníti meg.

##### A bejelentkezett felhasználó megkezdi a kitöltést
- **leírás**: A bejelentkezett felhasználó a kitöltés megkezdése gombra kattint.
- **hibakezelés**: A rendszer hibaüzenetet jelenít meg.
- **sikeres művelet**: A rendszer a bejelentkezett felhasználót átirányítja az üdvözlőoldalra.

#### Üdvözlőoldal
**Elemek**
- navigációs elemek
    + link a kezdőoldalra (aktív állapotban)
    + link a lezárandó év oldalára (előrehaladási jelzéssel)
    + link a tervezendő év oldalára (előrehaladási jelzéssel)
    + link a befejezőoldalra
    + link a kijelentkezéshez
- tartalmi elemek
    + a YC online kitöltési útmutatója
    + a bejelentkezett felhasználó azonosítója (profilkép + név)
    + mentési visszajelzés (sikeres mentés esetén megerősítő visszajelzéssel)
- adatbeviteli elemek
    + kitöltés megkezdése gomb
    + nyelvválasztó

##### A bejelentkezett felhasználó nyelvet választ
Megegyezik az 'A látogató nyelvet választ' történettel.

##### A bejelentkezett felhasználó kijelentkezik
Megegyezik az 'A bejelentkezett felhasználó kijelentkezik (kezdőoldal)' történettel.

##### A bejelentkezett felhasználó megkezdi a kitöltést
Megegyezik az 'A bejelentkezett felhasználó megkezdi a kitöltést (kezdőoldal)' történettel, azzal a különbséggel, hogy sikeres művelet esetén a rendszer a felhasználót a 'lezárandó év' oldalra irányítja át.

#### Lezárandó év oldal
**Elemek**
- navigációs elemek
    + megegyezik az üdvözlőoldal navigációs elemeivel, azzal a különbséggel, hogy a 'link a lezárandó év oldalára' állapota az aktív
- tartalmi elemek
    + a bejelentkezett felhasználó azonosítója (profilkép + név)
    + mentési visszajelzés (sikeres mentés esetén megerősítő visszajelzéssel)
    + kérdések
- adatbeviteli elemek
    + minden kérdéshez adatbeviteli mező (tartalmazza a korábban elmentett válaszokat)

##### A bejelentkezett felhasználó megválaszol egy kérdést
- **leírás**: A bejelentkezett felhasználó egy kérdés adatbeviteli mezőjébe szöveget visz be. A rendszer az utolsó karakter bevitele után bizonyos idővel, illetve az adatbeviteli mezőből való elnavigálás esetén menti a bevitt információt.
- **hibakezelés**: Sikertelen mentés esetén a rendszer az oldalon található mentési visszajelzésben hibaüzenetet jelenít meg.
- **sikeres művelet**: Sikeres mentés esetén a rendszer az oldalon található mentési visszajelzésben megerősítő üzenetet jelenít meg.

##### A bejelentkezett felhasználó elnavigál az oldaról
- **leírás**: A bejelentkezett felhasználó az oldalon található linkek segítségével egy másik oldalra navigál. A rendszer menti az addig bevitt információt.
- **hibakezelés**: Sikertelen mentés esetén a rendszer az oldalon található mentési visszajelzésben hibaüzenetet jelenít meg, és megerősítést vár a felhasználótól az elnavigálás folytatására.
- **sikeres művelet**: Sikeres mentés esetén a rendszer az oldalon található mentési visszajelzésben megerősítő üzenetet jelenít meg és a bejelentkezett felhasználót a kért oldalra irányítja.

#### Tervezendő év oldal
Elemei és történetei megegyeznek a 'Lezárandó év oldal' történeteivel és elemeivel, azzal a különbséggel, hogy a navigációs elemek között a 'link a tervezendő év oldalára' állapota aktív.

#### Befejezőoldal
**Elemek**
- navigációs elemek
    + megegyezik az üdvözlőoldal navigációs elemeivel, azzal a különbséggel, hogy a 'link a befejezőoldalra' állapota az aktív
- tartalmi elemek
    + leírás a befejezéshez
    + leírás a gratulációhoz (rejtve)
- adatbeviteli elemek
    + 'kitöltöttem' gomb
    + megosztás gomb(ok) (rejtve)

##### A bejelentkezett felhasználó befejezi a kitöltést
- **leírás**: A bejelentkezett felhasználó a 'kitöltöttem' gombra kattint.
- **hibakezelés**: Sikertelen mentés esetén a rendszer hibaüzenetet jelenít meg.
- **sikeres művelet**: Sikeres mentés esetén a rendszer megerősítő üzenetet jelenít meg, és megjeleníti
    + a 'leírás a gratulációhoz' részt
    + a 'megosztás gomb(ok)' részt

##### A bejelentkezett felhasználó megosztja a YC-online elérhetőségét
- **leírás**: A bejelentkezett felhasználó a megosztás gombok egyikére kattint. Böngészőjében új ablakban megnyílik az adott szolgáltató felülete, amelynek segítségével megoszthatja a YC-online elérhetőségét. Az előre kitölthető elemeket (url, főcím, rövid leírás, ikonkép) a rendszer automatikusan kitölti számára.
- **hibakezelés**: -
- **sikeres művelet**: -

## Rendszerrel kapcsolatos állítások
- a rendszer mobileszközről is elérhető és kitölthető
- a rendszer a fordításokat különálló nyelvi file-okból tölti be

## Jegyzet
- URL-ből tudjuk, hogy melyik nyelvre akar érkezni

### !v1
- login with facebook, de bejelentkezés nélkül is kitöltheti, csak szól neki, hogy így jövőre nem tudod megnézni, és nem szólunk Neked
- a kitöltött változatot ki lehet nyomtatni
- a kitöltött változatot le lehet tölteni pdf-ben
- lehet kérni emléleztetőt (célok, 30 napos kihívás)
- rajzolós rész → föltölthetsz fényképeket
- legyen szép :)
- az aktuális kérdés in focus látszik, a többi blurry, lehet lépkedni
- automata script húzza a fordítási file-okat
- fényképezd le önmagad webkameráddal, azt oszd meg
- mutasd meg a tavalyi válaszaimat
- a végén könnyen át lehet tekinteni az egészet
