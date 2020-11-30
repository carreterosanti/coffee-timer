import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoffeeTimerComponent } from 'src/components/coffee-timer/coffee-timer.component';
import { CoffeeTimerModule } from 'src/components/coffee-timer/coffee-timer.module';
import { SettingsComponent } from 'src/components/settings/settings.component';
import { SettingsModule } from 'src/components/settings/settings.module';

const routes: Routes = [
  { path: '', component: CoffeeTimerComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CoffeeTimerModule, SettingsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
