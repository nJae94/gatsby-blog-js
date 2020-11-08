import _ from 'lodash';
import { getValueFrom, setValueTo } from './core';


export const getValueFromLocalStorage = _.partial(getValueFrom, localStorage);

export const setValueToLocalStorage = _.partial(setValueTo, localStorage);