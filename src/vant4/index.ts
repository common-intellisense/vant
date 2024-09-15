import { getComponentMap, getPropsMap } from './mapping'

export function vant4() {
  return {
    uiName: 'vant4',
    map: getPropsMap(),
    lib: 'vant',
    prefix: 'van',
  }
}

export function vant4Components() {
  return {
    map: getComponentMap(),
    isSeperatorByHyphen: true,
    prefix: 'van',
    lib: 'vant',
  }
}
