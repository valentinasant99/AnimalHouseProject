import { Injectable } from '@angular/core';
import {ServizipresenzaModel} from "../models/servizipresenza.models";

@Injectable(

)
export class InfoService {

  constructor() {}
  public getInfo():ServizipresenzaModel[]{
    return [
      {
        "title": 'Veterinario',
        "subtitle": 'Affidarsi ad uno Studio Veterinario e ad un medico competente e soprattutto bravo è un fattore determinante per il benessere del tuo animale, ' +
          'offrendogli una qualità di vita migliore. L\'utilizzo della nostra applicazione Kpet ti permette di contattare un veterinario online in maniera pratica e diretta. ' +
          'Infatti potrai trovare un ambulatorio veterinario e fissare un appuntamento semplicemente con un click.',
        "link": './veterinario',
        "img": '../../../assets/veterinario.jpg'
      },
      {
        "title": 'Dog Sitter',
        "subtitle": 'Se sei un padrone lavoratore puoi usufruire di questa applicazione per prenotare un dogsitter che venga a casa tua, ' +
          'oppure che venga a prendere il tuo animale, affinchè tu non sia obbligato a lasciarlo a casa da solo tutta la giornata. ',
        "link": '/dogsitter',
        "img": '../../../assets/dogsitter.jpg'
      },
      {
        "title": 'Toelettatura',
        "subtitle": 'Prenota un servizio di toelettatura professionale e completo, l\'ideale per prenderti cura del tuo animale domestico senza muoverti da casa,'+
        'con pochi semplici click ti permette di prenotare online 24 ore su 24 in maniera dettagliata.I servizi di toelettatura per cani e di toelettatura per gatti consistono in una lunga serie di processi fondamentali ' +
          'per il benessere dei nostri amici a quattro zampe',
        "link": '/toelettatura',
        "img": '../../../assets/toelettatura.jpg'
      },
      {
        "title": 'Pensione estiva',
        "subtitle": 'Andare in vacanza con il cane o con il gatto è un\'esperienza unica ed esaltante. Vi sono però situazioni particolari in cui non sempre è possibile portare con sé il proprio amico a quattro zampe, per esempio se ci ritroviamo costretti ad effettuare uno spostamento ' +
          'in città di breve durata o di rimanere fuori casa per uno o più giorni. Cosa fare allora? Trova facilmente la pensione per cani o per gatti più adatta alle tue esigenze, in pochi semplici click ' +
          'potrai prenotare un luogo sicuro e professionale per il tuo pet.',
        "link": '/pensione',
        "img": '../../../assets/pensione.jpg'
      },
      {
        "title": 'Educazione',
        "subtitle": ' Svolgere un\'attività con il tuo amico a quattro zampe e al contempo offrirgli la possibilità di acquisire nuove competenze motorie, sociali e caratteriali, ' +
          'è ciò che caratterizza l\'addestramento cani. Sotto questa parola si includono una serie di attività che vengono svolte con la supervisione di un ' +
          'educatore cinofilo direttamente a casa tua, oppure presso un centro cinofilo.',
        "link": '/educazione',
        "img": '../../../assets/educazione.jpg'
      },
      {
        "title": 'Pet taxi',
        "subtitle": 'l trasporto animali domestici è un fattore importante grazie al quale potrai raggiungere un centro cinofilo, un parco o un preciso luogo in cui far muovere e far giocare il tuo animale a quattro zampe. Se hai poco tempo a tua disposizione, tra lavoro e famiglia o non disponi ' +
          'del veicolo adatto, può essere necessario appoggiarsi ad un servizio specializzato come il pet taxi.',
        "link": '/taxi',
        "img": '../../../assets/taxi.png'
      }
    ]
  }

}
