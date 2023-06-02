# React-Bantumi

Bantumi ötletelés

Rekurzív funkcióval teszegetni le a babokat
	paraméter: kézben lévő babok száma
	kilépési kritérium: a beadott paraméter 0

Linked lista adatstruktúra játékpályának? 
	tömbbel egyszerűbb, reacttal se lesz gond elvileg
	linkelt lista bonyolultabb, külön metódusokat kellene hozzá írni

React vagy vanilla js?  

Couch coop eleinte, esetleg később firebase-zel multi 


Kezdőállapot: 

 _   <> <> <> <> <> <>   _
 / \                     / \
 \_/                     \_/
      <> <> <> <> <> <>

2 játékos
6-6 tál
1-1 eredményedény

egy kör: 
 - játékos választ egy tetszőleges tálat a 6ból, ami előtte van
 - a tálban lévő babokat az óramutató járásával ellentétesen, egyesével letesszük a tálba
	- A saját eredményedénybe is teszünk!

3 eset: 
	- ha az utolsó bab a saját tálunkba tettük: 
        - még egy kört kapunk
        - nincs limitálva, hogy így jány kört tudunk lépni
    - olyan tálba esik az utolsó bab, ami korábban üres volt:
        - az utolsó bab bemegy a játékos eredményedényébe
        - az ellenfél oldali tálból is betesszük a babokat az eredményedénybe
    - bárhol máshol tesszük le az utolsó babot: 
        - ellenfél jön

A játék addig folytatódik, amíg valamelyik játékosnak már csak üres edénye van

React haditerv: 

    - Logika: 
        - új játék gomb megnyomása után beállításra kerül a játékasztal az alapbeállítás szerint
        - az első játékos következik, a térfelét kiemeljük
        - A játékos kiválaszt egy tálat
        - A tál tartalmát kiürítjük 
        - a tál tartalma a kézbe kerül
        - a kéz a következő tálra lép: 
            - megvizsgálja, hogy van-e még bab a kézben
                - ha nincs, akkor lépés végi vizsgálat
            - ha van még bab a kézben, megnézi az aktuális tálat
                - ha sima tál, akkor egyet beletesz a kézben lévő babokból, kézben lévőből levon egyet
                - ha eredménytál, megnézi, hogy az akutálisan lépésben lévő játékosé-e
                    - ha igen, akkor beletesz egy babot
                    - ha nem, akkor átugorja
        - ha elfogyott a kézből a bab: 
            - ha az utolsó pozíciója a kéznek eredménytál, akkor az aktuális játékos még egyszer jön
            - ha a kéz utolsó pozíciójánál üres tál van: 
                - megkeressük az ellenfél táljai között a szembenlévőt 
                - kivesszük belőle az össze babot
                - az aktuális játékos eredménytáljába tesszük
                - másik játékos következik
            - olyan tálba tesszük, ami nem eredménytál és nem üres: 
                - következő játékos jön 
        - Ha a játékos nem kapott plusz kört és vége a körének: 
            - összeszámolni a tálakban lévő babokat
            - ha 0, vége a játéknak
            - eredménytálak összehasonlítása, győztes kiválasztása 
        - Ha folytatódik a játék, akkor a másik játékos jön, és az ő tálai lesznek aktívak
        - megjelenik az új játék gomb, 

    - Szedő-rakó logika: 
        - 
    - Tálak komponensek 
        - Van saját state változójuk, amiben el van tárolva, hogy babjuk van
    - Board
    - Aktív játékos figyelése
    - Pontok számlálása
    - Babok elfogyásának figyelése 

    Játék menete: 

    - 



              {/* <div id="player1">
                        <Pot beans={gameBoard.board[0].pot} />
                        <Pot beans={game.board[1].pot} />
                        <Pot beans={game.board[2].pot} />
                        <Pot beans={game.board[3].pot} />
                        <Pot beans={game.board[4].pot} />
                        <Pot beans={game.board[5].pot} />
                        <BigPot beans={game.board[6].bigPot} />
                    </div>
                    <div id="player2">
                        <Pot beans={game.board[7].pot} />
                        <Pot beans={game.board[8].pot} />
                        <Pot beans={game.board[9].pot} />
                        <Pot beans={game.board[10].pot} />
                        <Pot beans={game.board[11].pot} />
                        <Pot beans={game.board[12].pot} />
                        <BigPot beans={game.board[13].bigPot} />
                    </div> */}
