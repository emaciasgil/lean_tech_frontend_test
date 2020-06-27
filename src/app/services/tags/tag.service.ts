import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
@Injectable({
  providedIn: 'root'
})
export class TagService {
  tagList:AngularFireList<any>
  selectTag=[]
  constructor(private firebase:AngularFireDatabase) { }
  getTags(){
    return this.tagList=this.firebase.list('tags')
  }

  updateTags(tags){
    this.tagList.update(tags.$key,{
      tag:this.tagList
    })
  }
}
