export type IStore = "appstore" | "google" | "rustore"

export type ICharity = {
    price: number;
    text: string;
}

export type IState = {
    price: string;
    modal: boolean

    changePrice: (value: string) => void;
    changeModal: (value: boolean) => void
}

export type IFAQ = {
    question: string;
    text: string;
}