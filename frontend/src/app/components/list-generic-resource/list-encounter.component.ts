import {Component, OnChanges, OnInit} from '@angular/core';
import {GenericColumnDefn, ListGenericResourceComponent, ResourceListComponentInterface} from './list-generic-resource.component';

@Component({
  selector: 'app-list-encounter',
  templateUrl: './list-generic-resource.component.html',
  styleUrls: ['./list-generic-resource.component.scss']
})
export class ListEncounterComponent extends ListGenericResourceComponent  {
  columnDefinitions: GenericColumnDefn[] = [
    // { title: 'Encounter', versions: '*', format: 'code', getter: e => e.type[0].coding[0] },
    // { title: 'Encounter', versions: '*', getter: e => e.reasonCode[0].text },
    { title: 'Period', versions: '*', format: 'period', getter: e => e.period },
    { title: 'Encounter', versions: '*', getter: e => e.type[0].text },
    { title: 'Reason', versions: '*', getter: e => e.reasonCode[0].text },
    { title: 'Practioner', versions: '*', getter: e => e.participant[0].individual.display }, 
    { title: 'Discharge Disposition', versions: '*', format: 'code', getter: e => e.hospitalization?.dischargeDisposition.coding[0] },
  ]
}
