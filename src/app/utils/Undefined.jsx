import { BACK_HOST } from "../API/APISettings"

export const undefinedNewImage = (url) => {
    
    if (url) 
    {
        return BACK_HOST + url
    }
    else 
    {
        return ('/media/undefined/no-poster.jpg')
    }
    
}

export const undefinedAvatar = (url) => {
    
    if (url) 
    {
        return BACK_HOST + url
    }
    else 
    {
        return ('/media/undefined/default-avatar.webp')
    }
    
}

export const undefinedCertificate = (url) => {
    
    if (url) 
    {
        return BACK_HOST + url
    }
    else 
    {
        return ('/media/undefined/default-avatar.webp')
    }
    
}

export const undefinedProject = (url) => {
    
    if (url) 
    {
        return BACK_HOST + url
    }
    else 
    {
        return ('/media/undefined/notepad.png')
    }
    
}