export interface ExpenseI {
    id: number,
    amount: string,
    description: string,
    expenseDate: string,
    expenseRegistryDate: string,
    categoryName: string,
    category: string,
    userEmail: string,
    user: string,
    familyName: string,
    family: string
}

export interface ExpenseResponse {
    body: [ExpenseI],
    error: boolean,
    status: number   
    
}

