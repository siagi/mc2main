export type Project = {
    _id:string,
    name:string,
    description:string,
    buildingType:string,
    localization:string,
    architect:string,
    surface:number,
    projectStage:string,
    years:string,
    buildingStatus:string,
    picture:string,
    projectScope:string[]
}

export type Children = {
    children:React.ReactNode
}