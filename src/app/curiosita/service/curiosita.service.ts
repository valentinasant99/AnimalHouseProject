import { Injectable } from '@angular/core';
import {CuriositaModel} from "../models/curiosita.model";

@Injectable(

)
export class InfoService {

  constructor() {}
  public getInfo():CuriositaModel[]{
    return [
      {
        "title": 'La vista dei cani',
        "subtitle": 'I cani non vedono in bianco e nero come ci hanno fatto credere in passato, percepiscono i colori, proprio come gli esseri umani. La differenza sta nel fatto che l\'uomo ha una retina più sviluppata e quindi nota più sfumature cromatiche rispetto ai cani.',
        "img": '../../../assets/vista.jpg'
      },
      {
        "title": 'La lingua del Chow Chow',
        "subtitle": 'Il cane Chow Chow ha la lingua di colore scuro, che varia tra nero, blu e violaceo. La domanda sorge spontanea: perché questo cane ha la lingua blu? Anche se esistono varie ipotesi, si pensa che possa derivare da un eccesso di melanina o da una mancanza di tirosina. In ogni caso, questa peculiarità conferisce un aspetto unico al Chow Chow. ',
        "img": '../../../assets/chow.jpg'
      },
      {
        "title": 'Come comunica un gatto',
        "subtitle": 'Anche se per noi è difficile saper differenziarli, i gatti possono emettere fino a 100 suoni distinti. La loro capacità di differenziazione sonora è dieci volte superiore a quella dei cani. ',
        "img": '../../../assets/gatto.jpg'
      },
      {
        "title": 'Il gatto nero non porta sfortuna',
        "subtitle": 'IAnche se è ancora molto forte la credenza popolare che i gatti neri portano sfortuna, nel Regno Unito e in Asia credono il contrario: riconoscono questi animali come portatori di buona sorte. ',
        "img": '../../../assets/gattonero.jpg'
      },
      {
        "title": 'Quando i conigli sono felici sono molto divertenti',
        "subtitle": 'Quando un coniglio è felice non può nasconderlo, sono delle creature molto espressive e amano mostrare la loro allegria quando si sentono contenti. Nei momenti di eccitazione per la felicità, i conigli si comportano in maniera carina, un po\' folle e unica. Cominciano a realizzare delle sequenze di movimenti abbastanza selvaggi che includono improvvisi salti in aria e corse sfrenate. ',
        "img": '../../../assets/coniglio2.jpg'
      },
      {
        "title": 'Può guardare indietro senza girarsi',
        "subtitle": 'La vista dei conigli può raggiungere i 360 gradi per questo riescono a vedere anche dietro le loro spalle senza girarsi. Ma bisogna anche dire che nella loro visuale hanno un punto cieco proprio davanti alla faccia.Ciò viene compensato da dei paletti sul muso in grado di individuare ogni cosa che è posta davanti a loro.',
        "img": '../../../assets/coniglio.jpg'
      },
      {
        "title": 'I sensi dei pappagalli',
        "subtitle": 'I pappagalli percepiscono i movimenti molto più rallentati rispetto a noi; in natura riesce a localizzare ogni minimo movimento di eventuali nemici.',
        "img": '../../../assets/pappagallo.jpg'
      },
      {
        "title": 'Ciclo biologico dei criceti',
        "subtitle": 'I criceti sono "crepuscolari" Questo significa che i criceti non sono diurni (attivi durante il giorno, come gli umani), o notturni (attivi durante la notte, come i gufi), ma "crepuscolari" che significa che sono più attivi durante le ore del crepuscolo. ​ I criceti selvatici generalmente lasciano le loro tane poco prima che il sole cali e ritornano una volta che fa buio. ',
        "img": '../../../assets/criceto.jpg'
      }
    ]
  }

}
