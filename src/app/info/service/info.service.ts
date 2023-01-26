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
      }
      ]
  }

}
