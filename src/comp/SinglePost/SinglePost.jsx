import React from 'react'
import './singlepost.css'

function SinglePost() {

    return (
        <div className='Single-Post'>
                <div className="Singe-Post-wrapper">
                    <img src= {require('./pobrane.png')} 
                    alt="" 
                    className="Single-Post-img"
                    />
                    <h1 className="Single-Post-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <div className="Single-Post-edit">
                            <i className="Single-Post-icon fa fa-heart"></i>
                        </div>
                    </h1>
                    <div className="Single-Post-info">
                        <span>Autor: <b>Patryk</b></span>
                        <span>Data: <b>31 maj</b></span>
                    </div>
                    <p className='Single-Post-desc'>
                    Dzisiaj mamy 31 maja

Miałą dzisiaj wyjść nowa karta Nvidii: GT/GTX 1630

Jednak dzisiaj jej nie zobaczymy 
Za to zobaczyliśmy wczoraj przeciek o tym że ta karta wychodzi 15 czerwca
Przecieki są z różnych źródeł więc możemy powątpiewać czy ta karta wyjdzie, chociaż VideoCardz twierdzi że mają oni tabelę z datami na embargo co do spzedaży i recenzji tej karty

Przypomnę tylko że ta karta ma być wydajnościowo taka sama jak GTX 1050TI tylko ma posiadać pamięć GDDR6 

Jeśli natomiast chodzi o karty serii 4000 
AD104 czyli rdzeń RTX 4070 / 4060TI ma wchodzić w najbliższym czasie do pierwszej fazy testowej czyli umieszczenia rrdzenia na docelowych PCB

Do tego znamy kolejność wypuszczania grafik serii 4000 
Najpierw wyjdzie 4090 potem 4080 a następnie 4070 i reszta kart
Wersje TI będą wychodzić dopiero w roku 2023

A teraz do intela 
13 generacja dostanie jak już wiemy więcej rdzeni bo aż 24 rdzenie i 32 wątki
Jednak to nie wszystkie upgrady które dostajemy względem 12 gen 
Zobaczymy tutaj lepszy kontroler pamięci RAM dla pamięci DDR5
Będzie to 5200Mhz na gear 1 (12 gen posiada 4800Mhz na gear2)

Natomiast przechodząca do ich grafik to jest duże prawdopodobieństwo że niedługo zobaczymy te karty ponieważ ostatnio Intel popełnił błąd i udostępnił stronę ARC z danymi o kartach ARC A3 (najniższa seria), niestety strona zostałą już zdjęta

A jeśli chodzi o AMD i ich ryzen 7000
Najmocniejszy procesor który udało się wyprodukować AMD z tej generacji pracuje na pojedyńczym rdzeni na 5,8Ghz 
Co może oznaczać że 5,5Ghz na wszystkich rdzeniach jest bardzo prawdopodobne
                    </p>
                </div>
        </div>
    )
}

export default SinglePost