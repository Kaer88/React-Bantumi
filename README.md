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