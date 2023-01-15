function Data(){
        return ( [
        {
            id: 4,
            autor: "Patryk",
            date: "wtorek 2 sierpnia 2022",
            title: "Intel 13 gen lepsze z DDR5, seria Sapphire Rapids wyciekła, Ryzeny 7000 mają ogromne pobory mocy a Nvidia ma jedną 800W kartę do pokonania wszystkich.",
            img: "i7d5d4.png",
            cats: ["Leak"],
            paragraphs: [
                {
                    title: "Intel 13 gen będzie zyskiwało na wydajnośći po zastosowaniu pamięci DDR5",
                    text:"W ciągu paru ostatnich dni wyciekło parę benchmarków procesorów 13 gen z pamięciami DDR5 i DDR4. Okazuje się że I7 13700K zyskuje aż 20% dodatkowej wydajności i I5 13600K aż 10%.",
                    img:"i7d5d4.png"
                },
                {
                    title:"A jak 13 gen w grach?",
                    text: "Benchmarki wykonał 'Extreane Player' z 'bili bili' (nie do końca wiem co to jest ale to jedyne źródło) testując i5 13600K i I7 13700K w wersjach ES/QS. Różnice w wydajności dla I5 13600K wzgledem I5 12600K wynoszą nawet 11% na korzyść nowej generacji, natomiast w porównaniu DDR4 vs DDR5 w 13 gen rożnica wynosi jedynie 1-3%"
                },
                {
                    title: "Specyfikacja Sapphire rappids wyciekła",
                    text:"Specyfikacja procesorów serwerowych i do work-stacji wyciekła. Seria Sapphire rappids której premiera jest odsuwana od dłuższego czasu rozciąga się aż na 9 procesorów zaczynając od 12 rdzeniowych aż po 56 rdzeniowe (wszędzie zobaczymy hyper threading więc aż do 112 wątków), do tego każdy z tych procesorów ma aż 8 kanałową pamięć i 112 linii PCI-e 5 gen. Ich specyfikacje wyglądają następująco: będą istniały 2 procesory 12 rdzeniowe, Xeon W5-3423 i W5-3425, mają one odpowiednio 2,1 i 3,1 GHz. Przenosząc się półkę wyżej zobaczymy procesory W5-3433 i W5-3435X które reprezentują 16 rdzeniowce taktowane odpowiednio na 2,0 Ghz i 3,1 Ghz. Idąc wyżej widzimy model 20 rdzeniwy W7-3445 taktowany na 2,6Ghz, model 24 rdzeniowy W7-3455 taktowany na 2,5Ghz i model 28 rdzeniowy W7-3465X taktowany na 2,5Ghz. Na sam koniec zostyają dwa najwyższe modele czyli W9-3475X który jest procesorem 36 rdzeniowym taktowanym na 2,2Ghz i ostatni najmocniejszy procesor tej serii W9-2495X taktowany na 1,9Ghz. Jak widzicie cała seria ma dość niskie taktowania a to ponieważ są to taktowania bazowe, a taktowań turbo niestety nie znamy. Procesory te mają zastąpić wcześniejszą serię X procesorów Intela. "
                },
                {
                    title: "Czyżby intel nie jedyny miał problemy z poborami mocy?",
                    text: "AMD prawdopdobnie ma na niższych procesach technologicznych podobne problemy co Intel. Ich cała seria ma mieć TDP bazowe na poziomie... 170W. Czyli aż o 65 W więcej niż poprzednie generacje, dodatkowo nie mówimy tutaj tylko o ryzenie 9 16 rdzeniowym ale o 12 rdzeniowej opcji. Dodatkowo ponieważ to jest TDP bazowe a AMD potrafiło masywnie je przekraczać podczas turbo to ten procesor może spokojnie  przekraczać aż 300W TDP w turbo."
                },
                {
                    title: "Najwydajniejsza karta na świecie znów od Nvidii?",
                    text: "Na to wygląda, ponieważ znany leaker kopite7kimi ostatnio opublikował przeciek o potworze od Nvidii który ma porzerać aż 800W. Karta ta ma mieć 18 176 rdzeni FP32 i aż 48Gb pamięci GDDR6X o predkości 24Gbps. Napewno będzie to potężna karta ale nie wiemy czy będzie to 4090TI  czy jakiś Titan ale wiemy napewno że nowe 12 pinowe złącze do zasilanai kart napewno nie wystarczy i będzie się pojawiało w ilości sztuk dwóch",
                    img:"thebeast.png"
                },
                {
                    title:"A co z zwykłymi kartami od Nvidii?",
                    text:"Mamy przeciek znów od kopite7kimi który twierdzi że 4070TI ma mieć wydajność aż 3090TI, był by to wyższy skok wydajności niż przy przejściu z serii GTX 900 na 1000. To czy to jest 4070TI możemy się tylko domyślać po nazwie rdzenia, lecz jeżeli przypuszczenia są prawdziwe to jeśli podobne wzrosty są na całej serii 4000 względem serii 3000 to taki przykładowy RTX 4050 może mieć wydajność pomiędzy 3060 a 3060TI. Wracając do karty z przecieku to ma ona mieć 12Gb pamięci GDDR6X o przepustowości 21Gbps oraz 7680 rdzeni FP32, natomiast jedną wadę tej karty widzimy po przeczytaniu pierwszego zdania z przecieku a jest to TDP które ma wynosić aż 400W. Oznacza to że cała następna seria GPU od nvidii będzie bardzo prądożerna.",
                    img:"4070ti.png"
                }
            ]
        },
        {
            id: 3,
            autor: "Patryk",
            date: "sobota 23 lipca 2022",
            title: "Intel ma mieć trzeci typ rdzenia, Nvidia zmniejsza ceny oraz ogromne skoki wydajności w następnych generacjach",
            img: "intel3core.png",
            cats: ["Leak"],
            paragraphs:[
                {
                    title:"14 gen intela z trzema typami rdzenia?",
                    text:"Wyciekł schemat poglądowy mobilnych procesorów Intela 14 gen a z niego dowiadujemy się bardzo ciekawych rzeczy. Głównie tego że możemy się spodziewać trzeciego typu rdzenia który ma się nazywać LP E-core, czyli po prostu rdzeń energooszczędny czy też niskiego poboru. Po tym przecieku możemy się spodziewać w procesorach Intela rozwiązań które nam zaprezentował już ARM, prawdopodobnie nie zostaniemy na tylko dwóch typach rdzeni w jednym procesorze tylko procesory będą miały wiele poziomów przykłądowo dla teoretycznego procesora 10 rdzeniowego mogło by to być 2 rdzenie P do tego 4 rdzenie E i na koniec 4 rdzenie LP. Miło by było równierz z strony microsoftu żeby zoptymalizowałe scheduller windowsa tak aby ten starał się wykorzystywać same rdzenie E i LP żeby rdzenie P zostawały w pełni dla użytkownika.",
                    img: "intel3core.png"
                },
                {
                    title:"Intel Innovation",
                    text: "Intel Innovation event to event intela na którym są zapowiadane nowe produkty firmy. Całość ma się odbyć 27 i 28 sierpnia i prawdopdoobnie zostaną wtedy zapowiedziane procesory 13 gen",

                },
                {
                    title:"Nvidia zmniejsza ceny?",
                    text:"Tak ale nie do końca ponieważ dotyczy to tylko modeli od 3080 w górę ale są to dość duże cięcia bo od 200 do 500 dolarów."
                },
                {
                    title:"Ryzen 5 serii 7000 dogania 12 rdzeniowca? ",
                    text:"Tak dogania a nawet po OC wyprzedza posiadając tylko 6 rdzeni i 12 wątków. Z bazy bemcharków BaseMark wyciekły wyniki tego procesora i jego porównanie z Ryzenem 5900X. Jeżeli ostateczna wersja tego procesora będzie miała takie osiągi i AMD nie podniesie znów cen to Intel może mieć się czego obawiać lecz oni też mają coś ciekawego w zanadrzu. ",
                    img:"r57600.png"
                },
                {
                    title:"W poprzednim paragrafie było o tym że Ryzen 5 wyprzedza Ryzena 9? To przeczytajcie o tym",
                    text: "I5 13600K czyli topowa I5 13 generacji ma mieć aż 14 rdzeni i 20 wątków, jest to 6 rdzeni P i 8 rdzeni E gdzie rdzenie P działały na 5,1GHz a rdzenie E na 3,5GHz. W benchmarku Geekbench5 osiągnął ten procesor aż 2012pkt Single Core i 16054 pkt Multi Core, czyli porównując go do I5 12600K to jest 8% szybszy w pojedyńczym rdzeniu i 38% szybszy zadaniach wielordzeniowych. A jeżeli go porównamy do Ryzena 9 5950X to dowiemy się że w pojedyńczym rdzeniu wyprzedza go aż o 20% a w benchmarku wielowątkowym różnica jest kwestią błędu pomiarowego bo wynosi tylko 2% na niekorzyść I5. Do tego benchmark był wykonywany na windowsie 10 czyli systemie niekorzystym dla I5 czyli na windowsie 11 ten procesor może się okazać szybszy od Ryzena 5950X. Jeżeli I5 ma pokonywać 16 rdzeniowca konkurencji to AMD może mieć spory problem w serii 7000",
                    img:"i513600k.png"
                }
            ]
        },  
        {
            id: 2,
            autor: "Patryk",
            date: "wtorek, 12 lipca 2022",
            title: "GTX 1630 jest nie najlepszą kartą, specyfikacja grafik serii 4000 poznana, AMD wypuści nowe procesory serii ZEN3D, oraz piewszy laptop z RISC-V ",
            img: "12genprez.png",
            cats: ["Leak", "Zapowiedź"],
            paragraphs:[
                {
                    title:"GTX 1630 jako następca serii GT?",
                    text:"Nie do końca, jest on wydajnościowo podobny do GTX 1050TI. Tak naprawdę jedynym upgradem względem GTX 1050TI jest pamięć, nowa grafika ma mieć pamięci GDDR6 lecz niestety na 64 bitowej szynie ale naszczęście jest to szybsza pamięć i skutecznie wyprzedza prędkością pamięci poprzednika."
                },
                {
                    title:"Specyfikacje high endu serii 40 wreszcie poznane",
                    text: "Zaczniemy od RTX 4090 który ma być bazowany na rdzeniu AD102-300-A1. Rdzeń tej kart ma posiadać 16384 jednostki FP32 a całość ma być taktowana na 2235Mhz bazowo a w trybie boost ma móc przekraczać aż 2750Mhz. Do tego 4090 ma mieć 24GB pamięci GDDR6X 21Gbps czyli względem poprzedniej generacji jeśli chodzi o Vram nic się nie zmienia. Natomiast większe zmiany czekają nas w 4080 i 4070 ponieważ oprócz mocniejszych rdzeni zostaje też zmienona ilość ich pamięci, 4080 ma mieć aż 16GB pamięci i 4070 ma mieć jej 10GB lecz niestety będą to pamięci GDDR6 bez X w przypadku tej drugiej grafiki. Patrząc na to jak jest rozłożona pamięć w wyższych modelach jest duża szansa że niższe modele też dostaną duże skoki jeśli chodzi o pamięci. Resztę specyfikacji grafik dostaniecie z zdjęcia.",
                    img:"rtx4000spec.png"
                },
                {
                    title:"Nowe procesory 3dVcache już niedługo",
                    text:"AMD prawdopodobnie wypuści nowe procesory z architektóry ZEN3D, przynajmniej tak twierdzi Greymon55 od którego pochodzi przeciek. Najbadziej prawdopdobne jest że zobaczymy Ryzeny 9 z tym poszerzony cachem. Może to stworzyć spore problemy dla Intela jako że już Ryzen 7 5800X3D w niektórych benchmarkach wyprzedał I9 12900K a nawet KS",
                    img:"nzen3d.png"
                },
                {
                    title:"Nowe procesory EPYC na horyzoncie",
                    text:"Nowa generacja procesorów EPYC od AMD ma wyjść później w tym roku. Będą one wymagały nowego socketu o nazwie SP5 (LGA6096) a dzieje się tak ponieważ ma on zapewniać aż do 700W energii dla procesora. A czemu potrzeba tak dużo mocy? Ponieważ AMD ma zamiar wypuścić procesor z tej serii który ma mieć 96 rdzeni i 192 wątki. Jego nazwa kodowa to EPYC 9654P który ma być taktowany na 2Ghz bazowo i 2,15Ghz w trybie boost z TDP 360W (w boost pewnie jakieś 500-600W)"
                },
                {
                    title:"Specyfikacje 13 gen Intela lepsze niż myśleliśmy",
                    text:"Z slajdu wycieku z prezentacji Intela dotyczącego 13 gen możemy się dowiedzieć wiele nowych rzeczy. Po pierwsze zostały potwierdzone doniesieani o wyżeszej ilości pamięci Cache, Intel pewnie próbuje w ten sposób walczyć z technologią AMD 3dVcache. Do tego dowiedzieliśmy się też o większej ilości linii PCIe 4.0 oraz o wielkim skoku jeśli chodzi o pamięci. Nowa generacja wspiera pamięci aż do DDR5 5600Mhz czyli aż 800Mhz więcej niż 12 gen. Do tego zobaczymy też zmiany jeśli chodzi o thunderbolt i wsparcie USB4. Tyle wiemy z tego slajdu a są rzeczy które wiemy z przecieków, między innymi wydajność I9 13900K w GeekBench 5 na poziomie 2133 pkt na single core i 23701 pkt na multi core. Oprócz tego znamy też maksymalne taktowanie nowej I9 które wynosi aż 5,704Ghz na najszybszym rdzeniu i drugi najszybszy dzeń osiągnął aż 5,624Ghz co może sugerować że maksymalne taktowanie dla wszystkich rdzeni P (big) działających naraz to 5,5Ghz a to wszystko tylko na wczesnej wersji testowej ES1",
                    img:"12genprez.png"
                },
                {
                    title:"Pierwszy taki laptop na świecie",
                    text:"Firmy DeepComputing i Xcalibyte zawiązały współpracę w celu stworzenia pierwszego na świecie laptopa na architekturze RISC-V. Dokładna specyfikacja jest nieznana lecz producenci określili czego możemy się spodziewać, napewno zobaczymy 4 rdzeniowy procesor RISC-V a do tego do 16 GB Ramu LPDDR4/LPDDR4X i maksymalnie 256GB dysk NVME. Podobno pierwszych 100 klientów dostanie NFT do laptopa."
                },
                {
                    title:"Ważne zmiany w przestrzeni serwerowej",
                    text: "AMD spodziewa się zdobyć 16% rynku serwerów w 2023 i 18% w 2024, jest to dla nich ogromny skok jako że jeszcze w 2017 roku Intel miał praktycznie 99% rynku serwerowego. ARM też nie stoi bo spodziewa się że zajmą 10% rynku serwerowego do 2024 roku."
                }

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
                    text: "Już wkrótce zobaczymy na rynku DIY. Będą to jednostki 24, 32 i 64 rdzeniowe a każda z nich będzie miała HT. Będą one podchodziły pod serię WX inaczej też znaną jako threadripper PRO, a więc zobaczymy tutaj więcej linii PCI-e. Jak na AMD przystało nie zabraknie możłiwości OC. Lecz niestety nie można zapomnieć że to seria PRO a jak coś ma w nazwie PRO to ma tendencje do bycia drogim, procesor 64 rdzeniowy będzie kosztować 6499 dolarów amerykańskich"
                },
                {
                    title: "MCM w RX7000 potwierdzone?",
                    text: "Tak. Konkretniej będzie to rdzeń Navi3 z 16384 rdzeniami co daje dokładnie 128CU. Niestety istnieje duże prawdopodobieństwo że jest to tylko model PRO / nie konsumencki." 
                },
                {
                    title: "AMD nie pozostawia starszych grafik na lodzie",
                    text: "Dużo starych grafik AMD dostanie update sterowników a na liśćie zobaczymy grafiki aż od HD7700 idąc przez serie R5, R7 i R9.",
                    img: "oldAmd.png"
                },
                {
                    title: "4090TI ma mieć 4 sloty?",
                    text: "Dokładniej 3,6 lecz w 4 slot nie włożymy nic a więc można mówić tutaj o zajmowanych 4 slotach. Sam cooler będzie łudząco podobny do tego w 3090 lecz znacznie większy."
                },
                {
                    title: "I9 13900 na 6Ghz?",
                    text: "Nie koniecznie lecz Intel prawdopdobnie wypuści model specjalny tak samo jak zrobił podczas wypuszczania 8 gen gdzie pierwszy raz pojawił się 5Ghz procesor (I7 8086) Możliwe że będzie to I9 o jakiejś specjalnej nazwie albo po prostu I9 13900KS."
                },
                {
                    title: "AMD też nie zostaje w tyle jeśli chodzi o procesory",
                    text: "Okazuje się że AMD planuje wypuścić aż 16 rdzeniowe procesory do laptopów, pierwszym takim procesorem będzie Ryzen 9 7980HX. Oprócz tego zobaczymy też jednostki na 12 rdzeni. A do tego są jeszcze lepsze informacje. Seria HS będzie miała grafiki zintegrowane wydajnościowo podobne wydajnościowo do RTX2060, przynajmniej teoretycznie.",
                    img: "mobile16c.png"
                }
            ]
        },  
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
                    text: "Zen4 `Phoenix Point` ma mieć zintegrowaną grafikę RDNA3, Natomiast Zen5 `Strix Point` ma posiadać ulepszoną grafikę RDNA3+ i mają one wychodzić w 2024 roku A jeśli chodzi o procesory AMD Zen 4 to co prawda GHZ zostały zwiększone lecz niestety IPC niezbyt, Nowa architektura zyskuje tylko 8% wzrostu IPC przy obniżeniu procesu. Natomiast jeśli chodzi o RX 6700 który w poprzednim newsie był opisany jako Radeon 6700, Okazuje się że Sapphire a konkretniej leaker z tej firmy który puścił informacje w sieć popełnił po prostu błąd i że grafika ta to RX 6700 (non xt)",
                },
                {
                    title: "A teraz o procesorach Intel",
                    text: "14 gen intela zostało potwierdzone że będzie wykonane w technologii FOVEROS, Technologia polega ta na tym że procesor ma dalej jeden duży rdzeń monolityczny lecz wewnętrzna struktura jego jest podzielona na elementy wymienne i modularne (nie dla zwykłęgo zjadacza chleba ale dla fabryki Intela jak najbardzie) co ma zmniejszyć koszta produkcji i zwiększyć skalowalność procesorów. Do tego procesory te mają mieć 20% wzrost wydajności na wat względem AlderLake (13 gen ma mieć mnije więcej taką samą wydajność na wat jak Alder lake więc porównanie jest do alder lake)",
                },
                {
                    title: "Natomianst jeśli chodzi o 13 gen Intela",
                    text: "Okazuje się że procesor I9 13900 (non k) jest aż od 30% do  50% szybszy od I9 12900K a dodatkowo procesor ten jest taktowany tylko na 3,7 GHz co może oznaczać że wydajność ostateczna będzie jeszcze większa. Patrząc na to że prawdopodobnie procesor ten będzie taktowany na około 5,5 Ghz to możemy się spodziewać aż do 60%-70% wzrozstu wydajności",
                },
            ]
        }
    ])
}

export default Data;