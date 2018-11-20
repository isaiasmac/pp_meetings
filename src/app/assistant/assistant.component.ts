import { Component, OnInit } from '@angular/core';

// Services
import { AssistantService } from '../assistant.service';

@Component({
  selector: 'app-assistant',
  templateUrl: './assistant.component.html',
  styleUrls: ['./assistant.component.css']
})

export class AssistantComponent implements OnInit {

	assistants: Object;

  constructor(private assistantService: AssistantService) { }

  ngOnInit() {
  	this.assistantService.getAssistants().subscribe(dataReponse => {
  		this.assistants = dataReponse
  		console.log(this.assistants)
  	});
  }

}
