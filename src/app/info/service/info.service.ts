import { Injectable } from '@angular/core';
import {InfoModel} from "../models/info.model";

@Injectable(

)
export class InfoService {

  constructor() {}
  public getInfo():InfoModel[]{
    return [
      {
        "title": 'Registrazione All\'Anagrafe',
        "subtitle": 'La registrazione all\'Anagrafe degli animali d\'affezione è sempre obbligatoria per i cani. Per gli altri animali è su base volontaria o necessaria in casi specifici.',
        "link": 'https://www.comune.bologna.it/servizi-informazioni/iscrivere-cane-gatto-furetto-anagrafe',
        "img": '../../../assets/registrazioneAnimale.jpeg'
      },
      {
        "title": 'Passaporto Animali Domestici',
        "subtitle": 'I proprietari che vogliono portare i propri animali all’estero devono farsi rilasciare dal Servizio veterinario pubblico il “passaporto per animali da compagnia”. ',
        "link": 'https://www.aslal.it/passaporto-per-cani#:~:text=Per%20il%20rilascio%20del%20passaporto,registrato%20nell\'Anagrafe%20canina%20regionale',
        "img": '../../../assets/passaportoAnimali.jpeg'
      },
      {
        "title": 'Diritti della Costituzione',
        "subtitle": 'L’ attenzione verso la tutela degli animali cresce in maniera esponenziale e parallelamente aumenta la produzione giuridica in merito. ',
        "link": 'https://www.unicusano.it/blog/didattica/master/diritti-degli-animali/',
        "img": '../../../assets/dirittiAnimali.jpg'
      },
      {
        "title": 'Corona virus: infetta gli animali domestici?',
        "subtitle": 'In merito all’epidemia di COVID-19, la malattia respiratoria causata dal Nuovo Coronavirus, l’Istituto Zooprofilattico Sperimentale delle Venezie risponde ',
        "link": 'https://www.izsvenezie.it/coronavirus-animali-da-compagnia/',
        "img": '../../../assets/coronaAnimali.jpg'
      },
      {
        "title": 'Sistema Informativo Veterinario',
        "subtitle": 'Il Sistema Informativo Veterinario fornisce una serie di servizi pubblici quali news, riferimenti alla normativa vigente, dati statistici ecc...',
        "link": 'https://www.vetinfo.it/',
        "img": '../../../assets/veterinarioAnimali.png'
      },
      {
        "title": 'Pulizia Animali Domestici',
        "subtitle": 'La pulizia degli animali domestici è fondamentale, è necessario sapere come effettuarla al fine di salvaguardare il benessere e la salute di cani e gatti. ',
        "link": 'https://www.retecologica.it/ambiente/pulizia-degli-animali-domestici-perche-e-importante-tutte-le-info',
        "img": '../../../assets/puliziaAnimale.jpg'
      },
      {
        "title": 'Trasporto Animali Domestici',
        "subtitle": 'Scopri tutto quello che c\'è da sapere sulla protezione, la tutela e la sicurezzae dei trasporti nazionali ed internazionali dei nostri amici a 4 zampe.',
        "link": 'https://www.homeboardingshippingpets.com/servizi/',
        "img": '../../../assets/trasportoAnimali.jpeg'
      },
      {
        "title": 'Terapia: Pet therapy',
        "subtitle": 'Che cosa si intende per pet-therapy? Il termine è stato coniato da Boris M. Levinson e si riferisce all’impiego degli animali da compagnia per curare specifiche malattie.',
        "link": 'https://www.issalute.it/index.php/la-salute-dalla-a-alla-z-menu/p/pet-therapy',
        "img": '../../../assets/terapiaAnimale.jpg'
      }
      ]
  }

}
