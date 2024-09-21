export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export enum TodoAction {
    complete = 'complete',
    open = 'open',
    reopen = 'reopen'
}