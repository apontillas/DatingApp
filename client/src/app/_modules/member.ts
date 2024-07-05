import { Photo } from "./photo"

export interface Member {
    id: number
    username: string
    photoUrl: string
    knownAs: string
    gender: string
    introduction: string
    interest: string
    lookingFor: string
    city: string
    country: string
    photos: Photo[]
    age: number
    created: Date
    lastActive: Date
  }
  
