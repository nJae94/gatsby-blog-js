const isEmpty = (storage) => {

    return !storage || storage === {}

}

export const getValueFrom = (storage, key) => {

    if (isEmpty(storage)) {
        return
    }

    const Data = storage.getItem(key);

    if (!Data) {
        return
    }

    return JSON.parse(Data);
}

export const setValueTo = (storage, key, data) => {

    if (isEmpty(storage)) {
        return
    }

    //loaclstorage에 key, value로 등록
    return storage.setItem(key, JSON.stringify(data));
}