import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Ahmedabad",
      description:"Heritage City located in Gujarat India.",
      creator:"Ahemad Shah",
      imgURL:"https://img.freepik.com/free-vector/colorful-ahmedabad-skyline_23-2148660023.jpg?size=626&ext=jpg",
      type:"Heritage"
    });
    this.contentList.addContent({
      id: 1,
      title: "Nadiad",
      description:"Nadiad is a city in the state of Gujarat, India and the administrative centre of the Kheda district.",
      creator:"Sardar Vallabhbhai Patel",
      imgURL:"https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2017/01/Surat-Gujarat1-e1484823578754.jpg",
      type:"Hometown"
    });
    this.contentList.addContent({
      id: 2,
      title: "Windsor",
      description:"Small and peaceful city of Ontario Canada.",
      creator:"Antoine Laumet de Lamothe Cadillac",
      imgURL:"https://www.sonomacounty.com/sites/default/files/inline-images/christmas_grove_windsor_town_green_900x600.jpg",
      type:"Small city"
    });
  }
}