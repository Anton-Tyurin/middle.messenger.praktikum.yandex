import { METHODS } from "../constants/core";

export type HTTPOptions = {
    headers?: Record<string, string>,
    method?: METHODS,
    timeout?: number,
    data?: Document | XMLHttpRequestBodyInit | null
}

export type TBlockProps = {
    context?: Record<string, any>;
    template?: string;
    events?: {[event: string]: any};
} & Record<string, any>;

export type TMetaBlock = {
    tagName: string;
    props: Record<string, any>;
}


export const REJECT_TEXT = 'No method';
