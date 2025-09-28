import { Deserializable } from "./deserializable";

export class Song {
    id!: string;
    file!: string;
    relativePath: string = "";
    album: string = "";
    album_artist: string = "";
    artist!: string;
    best_release_date: string = "";
    genre: string = "";
    non_std_genre: string = "";
    original_release_date: string = "";
    publisher: string = "";
    recording_date: string = "";
    title!: string;
    track_num: string = "";
}
