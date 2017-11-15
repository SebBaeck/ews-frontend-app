import {Person} from "./person.model";
import {Login} from "./login.model";
import {Kurs} from "./kurs.model";
import {Termin} from "./termin.model";

export class Trainer extends Person {

  constructor(public id? : string,
              public vorname? : string,
              public nachname? : string,
              public gebDatum? : Date,
              public trittAusDatum? : Date,
              public gebOrt? : string,
              public geschlecht? : string,
              public login? : Login,
              public kurse : Kurs[] = [],
              public termine : Termin[] = []) {
    super(id, vorname, nachname, gebDatum, trittAusDatum, gebOrt, geschlecht);
  }


}
