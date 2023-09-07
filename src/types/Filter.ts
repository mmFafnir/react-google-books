


export enum EnumFilterCategories {
    ALL = 'all', 
    ART = 'art', 
    BIOGRAPHY ='biography', 
    COMPUTERS = 'computers', 
    HISTORY = 'history', 
    MEDICAL = 'medical', 
    POETRY = 'poetry'
}

export enum EnumFilterSortBy {
    RELEVANCE = 'relevance',
    NEWEST = 'newest'
}

export type TFilter = {
    search: string,
    page: number,
    limit: number,
    categories: EnumFilterCategories,
    sortBy: EnumFilterSortBy
}