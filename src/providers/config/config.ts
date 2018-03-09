import { Injectable } from '@angular/core';

let config_key_name = "config";

@Injectable()
export class ConfigProvider {

  //fazendo o slide aparecer uma ve só
  private config = {   
    showSlide: false,
    name: "",
    username: ""

  }

  constructor() {

  }
  //recuperar os dados localstorage
  getConfigData(): any {
    return localStorage.getItem(config_key_name) || {};

  }
  //grava os dados localstorage
  setConfigData(showSlide?: boolean, name?: string, username?: string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide = showSlide;
    }

    if(name){
      config.name = name;
    }

    if(username){
      config.username = username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));

  }

}
