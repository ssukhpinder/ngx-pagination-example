import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-pagination-example';
  config: any;
  collection = { count: 30, data: [] };

  configCustomPagination: any;
  collectionCustomPagination = { count: 30, data: [] };
  constructor() {
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "Collection value " + (i + 1)
        }
      );
    }
    this.collectionCustomPagination = this.collection;

    this.config = {
      id: 'basicPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
    this.configCustomPagination = {
      id: 'customPaginate',
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collectionCustomPagination.count
    };
  }

  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public labels: any = {
    previousLabel: '<--',
    nextLabel: '-->',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  pageChanged(event) {
    this.config.currentPage = event;
  }

  onPageChange(event) {
    this.configCustomPagination.currentPage = event;
  }
}
