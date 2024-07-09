import { type Gallery } from "./gallery";

export interface Project extends Gallery {
    type: ProjectTypeEN;
}

export enum ProjectTypeEN {
    "UI/UX Design" = "UI/UX Design",
    "Web Design" = "Web Design",
    "WebApp" = "WebApp",
    "Mobile App" = "Mobile App",
    "Custom Software" = "Custom Software",
    "Bot & Automation" = "Bot & Automation",
}