interface Image{ 
    asset:{
        url:string
    }
}

export interface Creator{
    _id:string
    name:string
    address:string
    slug:{
        current:string
    }
    iamge:Image
    bio:string
}

export interface Products{
    title:string
    slug:{
        current:string
    }
    defaultProductVariant:{
        title: string
        price:number
        volume:number
        Avol:number
        images:Image
    }
    
    
}