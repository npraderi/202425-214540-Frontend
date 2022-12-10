export interface CategoryI {
    id: number,
    name: string,
    description: string,
    image: string,
    familyName: string,
    active: string,
    totalSpent: number,
    family: string
}

export interface CategoryResponse {
    body: [CategoryI],
    error: boolean,
    status: number   
    
}