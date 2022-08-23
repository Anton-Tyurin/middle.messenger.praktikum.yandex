export enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export enum ComponentEvents {
  INIT = 'init',
  FLOW_CDM = 'flow:component-did-mount',
  FLOW_CDU = 'flow:component-did-update',
  FLOW_RENDER = 'flow:render',
}

export const HAS_NO_RIGHTS = 'Нет прав';
