import { Component, ViewChild } from '@angular/core';
import { Service, Priority, Employee, Task } from './app.service';
import { DxTreeListComponent } from 'devextreme-angular';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	tasks: Task[];
	employees: Employee[];
	priorities: Priority[];
	@ViewChild('tree') tree: DxTreeListComponent;
	statuses: string[];

	constructor(service: Service) {
		this.tasks = service.getTasks();
		this.employees = service.getEmployees();
		this.priorities = service.getPriorities();

		this.statuses = [
			'Not Started',
			'Need Assistance',
			'In Progress',
			'Deferred',
			'Completed'
		];
	}

	getCompletionText(cellInfo) {
		return cellInfo.valueText + '%';
	}

	export() {
		var tv = this.tree.instance;
		var columns = tv.getVisibleColumns();
		var data = tv.getVisibleRows();

		var csvContent = '';

		for (let i = 0; i < columns.length; i++) {
			csvContent += columns[i].caption + ',';
		}
		csvContent += '\r\n';

		for (let i = 0; i < data.length; i++) {
			let row = data[i].values;
			row.forEach(function(item, index) {
				if (item === undefined || item === null) {
					csvContent += ',';
				} else {
					csvContent += item + ',';
				}
			});
			csvContent += '\r\n';
		}

		var blob = new Blob([ csvContent ], {
			type: 'text/csv;charset=utf-8;'
		});

		if (navigator.msSaveBlob) {
			navigator.msSaveBlob(blob, 'Job_Progress.csv');
		} else {
			var link = document.createElement('a');
			var url = URL.createObjectURL(blob);
			link.setAttribute('href', url);
			link.setAttribute('download', 'Job_Progress.csv');
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}
	}
}
