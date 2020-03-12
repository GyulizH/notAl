const LocalStorage = {};
//the getter method
LocalStorage.get = key => {
    return localStorage.getItem(key);
};
//the setter method
LocalStorage.set = (key, value) => {
    return localStorage.setItem(key, value);
};
//the remove method
LocalStorage.remove = key => {
    return localStorage.removeItem(key);
};