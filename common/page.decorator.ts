import { ClassType } from "./common";

export interface IPageOptions {
    path?: string | string[]
    param ? : ClassType
}

export interface ICustomPageOptions extends IPageOptions {

}
export interface IListPageOptions extends IPageOptions {

}
export interface IFormPageOptions extends IPageOptions {

}

export function CustomPage(options?: ICustomPageOptions) {
    return (target: ClassType) => {

    }
}
export function ListPage(options?: IListPageOptions) {
    return (target: ClassType) => {

    }
}
export function FormPage(options?: IFormPageOptions) {
    return (target: ClassType) => {

    }
}

export function ActionParam(options?: any) {
    return (target: ClassType) => {

    }
}

export function Action(options?: any) {
    return (target: Object, propertyKey: string) => {

    }
}

export interface IAction<T>{
    
}