import { type Gallery } from "./gallery";

export interface Project extends Gallery {
    type: ProjectTypeID;
}

export enum ProjectTypeID {
    "Desain UI/UX" = "Desain UI/UX",
    "Desain Web" = "Desain Web",
    "App Web" = "Aplikasi Web",
    "App Seluler" = "Aplikasi Seluler",
    "Kustom Software" = "Kustom Software",
    "Bot & Otomatisasi" = "Bot & Otomatisasi",
}