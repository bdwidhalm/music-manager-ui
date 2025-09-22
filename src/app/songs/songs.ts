import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SongApiService } from '../services/song-api.service';

@Component({
  selector: 'app-songs',
  imports: [MatTableModule],
  templateUrl: './songs.html',
  styleUrl: './songs.css'
})
export class Songs {
  displayedColumns: string[] = ['artist', 'title', 'id'];
  dataSource = [{
    "id": "64963fe360c217d37477bf55",
    "file": "/Users/brianwidhalm/Music/Chris Tomlin/Whom Shall I Fear (God of Angel Armies).mp3",
    "relativePath": null,
    "album": null,
    "album_artist": null,
    "artist": "Chris Tomlin",
    "best_release_date": null,
    "genre": null,
    "non_std_genre": null,
    "original_release_date": null,
    "publisher": null,
    "recording_date": null,
    "release_date": null,
    "title": "Whom Shall I Fear (God of Angel Armies)",
    "track_num": "CountAndTotalTuple(count=None, total=None)"
  },
  {
    "id": "64963fe360c217d37477bf56",
    "file": "/Users/brianwidhalm/Music/Chris Tomlin/Precious Love.mp3",
    "relativePath": null,
    "album": null,
    "album_artist": null,
    "artist": "Chris Tomlin",
    "best_release_date": null,
    "genre": null,
    "non_std_genre": null,
    "original_release_date": null,
    "publisher": null,
    "recording_date": null,
    "release_date": null,
    "title": "Precious Love",
    "track_num": "CountAndTotalTuple(count=None, total=None)"
  },
  {
    "id": "64963fe360c217d37477bf57",
    "file": "/Users/brianwidhalm/Music/Chris Tomlin/Our God.mp3",
    "relativePath": null,
    "album": null,
    "album_artist": null,
    "artist": "Chris Tomlin",
    "best_release_date": null,
    "genre": null,
    "non_std_genre": null,
    "original_release_date": null,
    "publisher": null,
    "recording_date": null,
    "release_date": null,
    "title": "Our God",
    "track_num": "CountAndTotalTuple(count=None, total=None)"
  }]

  constructor(private api: SongApiService) {}

  ngOnInit() {
    this.loadSongs();
  }

  loadSongs() {
    this.api.getSongs().subscribe(data => {
      this.dataSource = data;
    });
  }
}
