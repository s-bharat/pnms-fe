/* tslint:disable:max-line-length */
/**
 * Part Number Management System. More on: http://example.com/pnms-api
 * 0.0.1-SNAPSHOT
 * PNMS
 * Please read on https://example.com/terms-of-service
 * Example LLC
 * http://localhost:8081
 * contact@test.com
 * Apache License v2.0
 * https://www.apache.org/licenses/LICENSE-2.0.html
 * undefined
 */

import {NgModule} from '@angular/core';
import {EffectsModule as NgrxEffectsModule} from '@ngrx/effects';
import {StoreModule as NgrxStoreModule} from '@ngrx/store';

import {PartsService} from '../../../controllers/Parts';
import {FormsSharedModule} from '../../forms-shared.module';
import {GetPartHistoryFormService} from './getPartHistory.service';

import {GetPartHistoryEffects} from './states/effects';
import {GetPartHistoryReducer} from './states/reducers';
import {selectorName} from './states/reducers';

@NgModule({
  imports: [
    FormsSharedModule,
    NgrxStoreModule.forFeature(selectorName, GetPartHistoryReducer),
    NgrxEffectsModule.forFeature([GetPartHistoryEffects]),
  ],
  providers: [
    PartsService,
    GetPartHistoryFormService,
  ],
})
export class GetPartHistoryModule {}
