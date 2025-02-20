export interface Book {
    id: number;
    title: string;
    author_name: string;
    description: string;
    groups: string[];
    publication_year?: number;
    pages?: number;
    language?: string;
    available_copies?: number;
}