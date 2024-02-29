
const getItemFromStorage = () => {

    const item = localStorage.getItem('cartServices')
    // console.log(item);
    if (item) {
        return JSON.parse(item);
    }
    else {
        return []
    }

}

const saveItemAtStorage = (item) => {

    const getItem = getItemFromStorage()
    // console.log(getItem);
    getItem.push(item)
    localStorage.setItem('cartServices', JSON.stringify(getItem))

}

export { getItemFromStorage, saveItemAtStorage };