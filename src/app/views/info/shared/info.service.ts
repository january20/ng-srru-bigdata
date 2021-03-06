import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(
    private http: HttpClient
  ) { }

  homesationAll(query?) {
    return this.http.get(`${environment.api_url}/homes${query ? query : ''}`);
  }


   populationAll(query?) {
    return this.http.get(`${environment.api_url}/info/population${query ? query : ''}`);
  }

  populationAge(query?) {
    return this.http.get(`${environment.api_url}/info/population/age${query ? query : ''}`);
  }

  populationEducation(query?) {
    return this.http.get(`${environment.api_url}/info/population/education${query ? query : ''}`);
  }

  populationOccupation(query?) {
    return this.http.get(`${environment.api_url}/info/population/occupation${query ? query : ''}`);
  }
  populationIncome(query?) {
    return this.http.get(`${environment.api_url}/info/population/income${query ? query : ''}`);
  }
  weatherDuration(){
    return this.http.get(`${environment.api_url}/ref/weather/duration`);
  }
  weatherStations(){
    return this.http.get(`${environment.api_url}/ref/weather/stations`);
  }
  weatherPeriod(station,duration){
    return this.http.get(`${environment.api_url}/ref/weather/${station}/${duration}`);
  }
  airQuality(){
    return this.http.get(`${environment.api_url}/info/air`);
  }
  airPeriod(year){
    return this.http.get(`${environment.api_url}/info/air/period/${year}`);
  }
  dashboard() {
    return this.http.get(`${environment.api_url}/info/`);
  }
  loadIotData(mas_iot_device_id,field, hr){
    return this.http.get(`${environment.api_url}/info/data?mas_iot_device_id=${mas_iot_device_id}&field=${field}&hr=${hr}`);
  }
  deviceInfo(mas_iot_device_id,field){
    return this.http.get(`${environment.api_url}/iot/device?id=${mas_iot_device_id}&field=${field}`);
  }
  iotShow(type, previous) {
    return this.http.get(`${environment.api_url}/info/${type}?previous=${previous}`);
  }
  loadThaiQmPx(p, acode=3201){
    if(p==1){
      return this.http.get(`${environment.api_url}/info/thaiqm/p1`);
    }else if(p==2){
      return this.http.get(`${environment.api_url}/info/thaiqm/p2`);
    }else if(p==3){
      return this.http.get(`${environment.api_url}/info/thaiqm/p3`);
    }else if(p==4){
      return this.http.get(`${environment.api_url}/info/thaiqm/p4?acode=${acode}`);
    }
  }

  villageInfo(village){
    return this.http.get(`${environment.api_url}/info/thaiqm/details?mcode=${village}`);

  }


}
