export interface Input{
    type: string
    placeholder: string;
    state: any;
}

export interface Button{
    text: string
    click: any;
}

export interface userr{
    id: number | string
    firstname: string
    lastname: string
    number: string
}

export interface userOBJ{
    user: userr
    id: number | string
}