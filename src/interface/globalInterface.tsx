
export interface constantsInterface {
    URL: string,
}

export interface ProductInterface{
    id: number,
    title: string,
    price: number,
    description: string,
    image: string,
}

export interface ProductListInterface{
    productList : Array<ProductInterface>,
    searchProduct : Array<ProductInterface>,
    showAddModal: boolean,
}

