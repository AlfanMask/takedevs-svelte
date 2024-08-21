import { type Gallery } from "./gallery";

export interface Project extends Gallery {
    type: ProjectTypeID;
}

export enum ProjectTypeID {
    "UI/UX Design" = "UI/UX Design",
    "Landing Page" = "Landing Page",
    "Online Shop" = "Online Shop",
    "Company Profile" = "Company Profile",
    "Website Desa" = "Website Desa",
    "Custom Software" = "Custom Software",
}