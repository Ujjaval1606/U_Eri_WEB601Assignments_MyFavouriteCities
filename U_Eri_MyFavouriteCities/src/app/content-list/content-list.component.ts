import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { TypefilterPipe } from '../typefilter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, TypefilterPipe, FormsModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  DisplayContentInformation(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  searchTitle: string = '';
  contentExists: boolean = false;
  message: string = '';  
  selectedTitle: string | null = null;

  checkContentExists() {
    const foundItem = this.contentItems.find(item => item.title.toLowerCase() === this.searchTitle.toLowerCase());
    this.contentExists = !!foundItem;
    this.message = foundItem ? 'Content item exists.' : 'Content item does not exist.';
    this.selectedTitle = foundItem ? foundItem.title : null;
  }

  ngOnInit(): void {
    this.contentItems =[
      {
        id: 0,
        title: "Ahmedabad",
        description:"Heritage City located in Gujarat India.",
        creator:"Ahemad Shah",
        imgURL:"https://img.freepik.com/free-vector/colorful-ahmedabad-skyline_23-2148660023.jpg?size=626&ext=jpg",
        type:"Urban",
        tags: ["Heritage", "metropolian"]
      },
      {
        id: 1,
        title: "Nadiad",
        description:"Nadiad is a city in the state of Gujarat, India and the administrative centre of the Kheda district.",
        creator:"Sardar Vallabhbhai Patel",
        imgURL:"https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2017/01/Surat-Gujarat1-e1484823578754.jpg",
        type:"Rural",
        tags: ["MyHome", "RuralArea"]
      },
      {
        id: 2,
        title: "Windsor",
        description:"Small and peaceful city of Ontario Canada.",
        creator:"Antoine Laumet de Lamothe Cadillac",
        imgURL:"https://www.sonomacounty.com/sites/default/files/inline-images/christmas_grove_windsor_town_green_900x600.jpg",
        type:"Rural",
        tags: ["Currently", "Living"]
      },
      {
        id: 3,
        title: "New York",
        description: "Huge developed city in USA",
        creator: "USA",
        imgURL: "https://s1.1zoom.me/big0/822/USA_Houses_New_York_City_460967.jpg",
        type: "Urban",
        tags: ["USA", "Luxury"]
      },
      {
        id: 4,
        title: "Calgary",
        description: "Lovely city located in Albera, canada.",
        creator: "Urban",
        imgURL: "https://www.admtl.com/sites/default/files/2020/Calgary-800X534.jpg",
        type: "Mountains",
        tags: ["Snow", "Mountain"]
      },
      {
        id: 5,
        title: "Chicago",
        description: "The City of Chicago covers an area of 60,000 hectares and sits 176 meters (578 feet) above sea level on the southwestern shore of Lake Michigan",
        creator: "USA",
        imgURL: "https://www.chicago.gov/content/dam/city/about/skyline_night.jpg",
        type: "",
        tags: ["chiacago", "city"]
      },      {
        id: 6,
        title: "Detroit",
        description: "Lovely city located in Albera, canada.",
        creator: "Canada",
        imgURL: "https://horizonleague.org/images/2018/1/5/Detroit_Skyline.jpg?width=1024&height=576&mode=crop",
        type: "Rural",
        tags: ["border", "usa"]
      }
      
    ];
  }
 
}