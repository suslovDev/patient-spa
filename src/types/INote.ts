export interface INote {
    uid: string;
    userId: string;
    date: string;
    content: string
    imageUrl?: string | null;
}