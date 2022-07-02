function Data(){
        return ( [        
        {
            id: 0,
            autor: "Patryk",
            date: "niedziela, 19 czerwca 2022",
            title: "Qualcomm i procesory desktopowe?, U AMD zobaczymy bardzo mocne integry a Intel ma ogromne skoki wydajności",
            img: "pobrane.png",
            cats: ["leak", "zapowiedzi"],
            paragraphs:[
                {
                    title: "Qualcomm chce uderzyć w Appla (A nawet nie tylko)",
                    text: "Rzucą się oni na cały rynek procesorów z swoimi procesorami desktopowymi i laptopowymi na architekturze ARM, "
                        +"Na razie to tylko założenia producenta ale zobaczymy  co nam czas przyniesie",
                },
                {
                    title: "A teraz trochę o grafikach AMD, i małe conieco o procesorach ",
                    text: "Zen4 `Phoenix Point` ma mieć zintegrowaną grafikę RDNA3, "+
                "Natomiast Zen5 `Strix Point` ma posiadać ulepszoną grafikę RDNA3+ i mają one wychodzić w 2024 roku " +
                "A jeśli chodzi o procesory AMD Zen 4 to co prawda GHZ zostały zwiększone lecz niestety IPC niezbyt, "+
                "Nowa architektura zyskuje tylko 8% wzrostu IPC przy obniżeniu procesu. "+
                "Natomiast jeśli chodzi o RX 6700 który w poprzednim newsie był opisany jako Radeon 6700 " +
                "Okazuje się że Sapphire a konkretniej leaker z tej firmy który puścił informacje w sieć popełnił po prostu błąd i że grafika ta to RX 6700 (non xt)",
                },
                {
                    title: "A teraz o procesorach Intel",
                    text: "14 gen intela zostało potwierdzone że będzie wykonane w technologii FOVEROS, Technologia polega ta na tym że procesor ma dalej jeden duży rdzeń monolityczny lecz "+
                    "wewnętrzna struktura jego jest podzielona na elementy wymienne i modularne (nie dla zwykłęgo zjadacza chleba ale dla fabryki Intela jak najbardzie) co ma zmniejszyć koszta produkcji i zwiększyć skalowalność procesorów. "+
                    "Do tego procesory te mają mieć 20% wzrost wydajności na wat względem AlderLake (13 gen ma mieć mnije więcej taką samą wydajność na wat jak Alder lake więc porównanie jest do alder lake)",
                },
                {
                    title: "Natomianst jeśli chodzi o 13 gen Intela",
                    text: "Okazuje się że procesor I9 13900 (non k) jest aż od 30% do  50% szybszy od I9 12900K " +
                    "a dodatkowo procesor ten jest taktowany tylko na 3,7 GHz co może oznaczać że wydajność ostateczna będzie jeszcze większa."+
                    "Patrząc na to że prawdopodobnie procesor ten będzie taktowany na około 5,5 Ghz to możemy się spodziewać aż do 60%-70% wzrozstu wydajności",
                },
            ]
        },
        {
            id: 1,
            autor: "Patryk",
            date: "sobota, 2 lipca 2022",
            title: "Nowe threadrippery, ogromne karty graficzne oraz 13 gen Intela okaże się być bardzo szybkie",
            img: "4090.png",
            cats: ["Leak", "Zapowiedź"],
            paragraphs:[
                {
                    title: "Threadrippery 5000 wreszcie dostępne nie w oemach",
                    text: "Już wkrótce zobaczymy na rynku DIY. Będą to jednostki 24, 32 i 64 rdzeniowe a każda z nich będzie miała HT. " +
                    "Będą one podchodziły pod serię WX inaczej też znaną jako threadripper PRO, a więc zobaczymy tutaj więcej linii PCI-e. " +
                    "Jak na AMD przystało nie zabraknie możłiwości OC. Lecz niestety nie można zapomnieć że to seria PRO a jak coś ma w nazwie PRO to ma tendencje do bycia drogim, procesor 64 rdzeniowy będzie kosztować 6499 dolarów amerykańskich"
                },
                {
                    title: "MCM w RX7000 potwierdzone?",
                    text: "Tak. Konkretniej będzie to rdzeń Navi3 z 16384 rdzeniami co daje dokładnie 128CU. "+
                    "Niestety istnieje duże prawdopodobieństwo że jest to tylko model PRO / nie konsumencki." 
                },
                {
                    title: "AMD nie pozostawia starszych grafik na lodzie",
                    text: "Dużo starych grafik AMD dostanie update sterowników a na liśćie zobaczymy grafiki aż od HD7700 idąc przez serie R5, R7 i R9.",
                    img: "oldAmd.png"
                },
                {
                    title: "4090TI ma mieć 4 sloty?",
                    text: "Dokładniej 3,6 lecz w 4 slot nie włożymy nic a więc można mówić tutaj o zajmowanych 4 slotach. " +
                    "Sam cooler będzie łudząco podobny do tego w 3090 lecz znacznie większy."
                },
                {
                    title: "I9 13900 na 6Ghz?",
                    text: "Nie koniecznie lecz Intel prawdopdobnie wypuści model specjalny tak samo jak zrobił podczas wypuszczania 8 gen gdzie pierwszy raz pojawił się 5Ghz procesor (I7 8086)" +
                    "Możliwe że będzie to I9 o jakiejś specjalnej nazwie albo po prostu I9 13900KS."
                },
                {
                    title: "AMD też nie zostaje w tyle jeśli chodzi o procesory",
                    text: "Okazuje się że AMD planuje wypuścić aż 16 rdzeniowe procesory do laptopów, pierwszym takim procesorem będzie Ryzen 9 7980HX. " +
                    "Oprócz tego zobaczymy też jednostki na 12 rdzeni. A do tego są jeszcze lepsze informacje. Seria HS będzie miała grafiki zintegrowane wydajnościowo podobne wydajnościowo do RTX2060, przynajmniej teoretycznie.",
                    img: "mobile16c.png"
                }
            ]
        }
    ])
}

export default Data;