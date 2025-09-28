import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SongApiService } from '../services/song-api.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-songs',
  imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatInputModule],
  templateUrl: './songs.html',
  styleUrl: './songs.css'
})
export class Songs  implements AfterViewInit {

  displayedColumns: string[] = ['#', 'artist', 'title', 'album', 'id'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private api: SongApiService) {}

  ngOnInit() {
    this.loadSongs();
  }

  loadSongs() {
    this.api.getSongs().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  /** example of how to listen for change */
  announceSortChange(sortState: Sort) {
    console.log(sortState);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
