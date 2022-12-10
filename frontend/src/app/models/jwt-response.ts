export interface JwtResponseI {
    dataUser:{
        id: number,
        user: string,
        name: string,
        familyName: string,
        apiKey: string,
      //  accessToken: string
    
    }
}

export interface LoginI {
  error : boolean,
  status : number,
  body : string
}

export interface RegisterI {
  error : boolean,
  status : number,
  body : {
    email: string,
    name: string,
    familyName: string,
    family: {
      familyName: string,
      apiKey: string      
    }
}
}


