import React from "react"

export interface breadcrumb {
    label:string
    iconKeyword?:string
    icon?:React.ReactElement
}

export interface button extends breadcrumb{
    redirect?:string
    onClick?:Event //Corregir
}

export interface skill {
    name:string
    level?:string
    keyword?:string
}

export interface summary{
    name: string
    label:string
    summary:string
    imgUrl:string
}

export interface projectCard {
    title?: string
    skills?: string[]
    description?: string
    codeLink?:string
    previewLink?:string
    projectImage?:string //La url de la imagen del proyecto
}

export interface experienceCard {
    position?:string
    name?:string
    startDate?:string
    endDate?:string
    description?:string
}

export interface aboutMe {
    description:string
}

export interface menu {
    hasProjects:boolean
    hasExperience:boolean
    hasAboutMe:boolean
}