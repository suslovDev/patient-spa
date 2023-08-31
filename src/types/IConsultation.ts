export interface IConsultation {
    uid: string;
    userId: string;
    isActive: boolean;
    date: string;
    time: string;
    isConfirmed: boolean;
    type: 'online' | 'privat';
}