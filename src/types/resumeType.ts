export interface ResumeType {
    basics:ResumeBasicType
    work:ResumeWorkType[]
    volunteer:ResumeVolunteerType[]
    education:ResumeEducationType[]
    awards:ResumeAwardType[]
    certificates:ResumeCertificateType[]
    publications:ResumePublicationType[]
    skills:ResumeSkillType[]
    languages:ResumeLanguageType[]
    interests:ResumeInterestType[]
    references:ResumeReferenceType[]
    projects:ResumeProjectType[]
}
export interface ResumeBasicType{
    name:string
    label:string
    image:string
    email:string
    phone:string
    url:string
    summary:string
    aboutMe:string
    location:ResumeLocationType
    profiles:ResumeProfileType[]
    copyright:string
    available:boolean
}
export interface ResumeLocationType {
    address:string
    postalCode:string
    city:string
    countryCode:string
    region:string
}

export interface ResumeProfileType {
    network:string
    username:string
    url:string
}

export interface ResumeWorkType {
    name:string
    position:string
    url:string
    startDate:string
    endDate:string
    summary:string
    highlights:string[]
}

export interface ResumeVolunteerType {
    organization: string
    position: string
    url: string
    startDate: string
    endDate: string
    summary: string
    highlights: string[]
  }

  export interface ResumeEducationType {
    institution: string
    url: string
    area: string
    studyType: string
    startDate: string
    endDate: string
    score: string
    courses: string[]
  }

  export interface ResumeAwardType {
    title: string
    date: string
    awarder: string
    summary: string
  }

  export interface ResumeCertificateType {
    name: string
    date: string
    issuer: string
  }

  export interface ResumePublicationType {
    name: string
    publisher: string
    releaseDate: string
    url: string
    summary: string
  }

  export interface ResumeSkillType {
    name: string
    level: string
    keywords: string[]
  }

  export interface ResumeLanguageType {
    language: string
    fluency: string
  }
  
  export interface ResumeInterestType {
    name: string
    keywords: string
  }

  export interface ResumeReferenceType {
    name: string
    reference: string
  }

  export interface ResumeProjectType {
    name: string
    startDate: string
    keywords:string
    endDate: string
    description: string
    highlights: string[]
    skills:string[]
    url: string
    code:string
    image:string
  }

  

