import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service'
import { Projects } from 'src/app/Projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{

  projects: Projects[]=[];

  constructor(private projectsService:ProjectsService) {
  }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(
      data=>{
        this.projects=data;
      }
    )
  }
  

}
