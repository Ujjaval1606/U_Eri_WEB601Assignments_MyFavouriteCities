import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Ahmedabad",
        description:"Heritage City located in Gujarat India.",
        creator:"Ahemad Shah",
        imgURL:"https://img.freepik.com/free-vector/colorful-ahmedabad-skyline_23-2148660023.jpg?size=626&ext=jpg",
        type:"Heritage",
        tags: ["Heritage", "metropolian"]
      },
      {
        id: 1,
        title: "Nadiad",
        description:"Nadiad is a city in the state of Gujarat, India and the administrative centre of the Kheda district.",
        creator:"Sardar Vallabhbhai Patel",
        imgURL:"https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2017/01/Surat-Gujarat1-e1484823578754.jpg",
        type:"Hometown",
        tags: ["MyHome", "RuralArea"]
      },
      {
        id: 2,
        title: "Windsor",
        description:"Small and peaceful city of Ontario Canada.",
        creator:"Antoine Laumet de Lamothe Cadillac",
        imgURL:"https://www.sonomacounty.com/sites/default/files/inline-images/christmas_grove_windsor_town_green_900x600.jpg",
        type:"Small city",
        tags: ["Currently", "Living"]
      },
      {
        id: 3,
        title: "New York",
        description: "Huge developed city in USA",
        creator: "USA",
        imgURL: "https://s1.1zoom.me/big0/822/USA_Houses_New_York_City_460967.jpg",
        type: "Huge",
        tags: ["USA", "Luxury"]
      },
      {
        id: 4,
        title: "Calgary",
        description: "Lovely city located in Albera, canada.",
        creator: "Canada",
        imgURL: "https://www.admtl.com/sites/default/files/2020/Calgary-800X534.jpg",
        type: "Mountains",
        tags: ["Snow", "Mountain"]
      }
      
    ];
  }
 
}