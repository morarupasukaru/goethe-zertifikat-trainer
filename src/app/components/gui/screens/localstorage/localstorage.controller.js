class LocalstorageController {

    /*@ngInject*/
    constructor() {
        this.initData();
    }

    initData() {
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            result.push({ key: keys[i], value: localStorage.getItem(keys[i]) });
        }
        this.data = result;
    }

    clear() {
        localStorage.clear();
        this.initData();
    }
}

export default LocalstorageController;