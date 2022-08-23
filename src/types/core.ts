import { Methods } from '../constants/core';

export type HTTPOptions = {
  headers?: Record<string, string>;
  method?: Methods;
  contentType?: string;
  data?: any;
};

export type TBlockProps = {
  context?: Record<string, any>;
  template?: string;
  events?: { [event: string]: any };
} & Record<string, any>;

export type TMetaBlock = {
  tagName: string;
  props: Record<string, any>;
  className?: string;
};

export const REJECT_TEXT = 'No method';
export type Dictionary = Record<string, any>;
export type Nullable<T> = T | null | undefined;
