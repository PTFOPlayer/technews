function Data(){
        return ( [        
        {
            id: 0,
            autor: "Patryk",
            date: "niedziela, 19 czerwca 2022",
            title: "Qualcomm i procesory desktopowe?, U AMD zobaczymy bardzo mocne integry a Intel ma ogromne skoki wydajności",
            img: "pobrane.png",
            cats: ["cat1", "cat2"],
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
        }
    ])
}

export default Data;