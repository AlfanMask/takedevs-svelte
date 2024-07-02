import { type Gallery } from "./gallery";

export interface Project extends Gallery {
    type: ProjectType;
}

export enum ProjectType {
    "UI/UX Design" = "UI/UX Design",
    "Web Design" = "Web Design",
    "WebApp" = "WebApp",
    "Mobile App" = "Mobile App",
    "Custom Software" = "Custom Software",
    "Bots & Automation" = "Bots & Automation",
}