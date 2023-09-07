export type TBook = {
    id: string,
    authors: string[];
    title: string;
    subtitle?: string;
    publisher: string;
    publishedDate: string;
    image: string | undefined;
    link: string;
    rating: number;
    categories?: string[]
    description?: string
}