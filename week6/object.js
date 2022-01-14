const mergeObjects = (obj1, obj2) => {
    return {
        ...obj1,
        ...obj2
    }
}

const removeDuplicatesFromObject = () => {
    console.log('Remove');
}

module.exports = {
    mergeObjects,
    removeDuplicatesFromObject
}