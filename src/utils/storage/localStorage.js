import _ from 'lodash';
import { getValueFrom, setValueTo } from './core';
import { localStorage } from './browser';

export const getValueFromLocalStorage = _.partial(getValueFrom, localStorage);

export const setValueToLocalStorage = _.partial(setValueTo, localStorage);