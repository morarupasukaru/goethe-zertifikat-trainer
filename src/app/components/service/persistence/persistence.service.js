class PersistenceService {

    /*@ngInject*/
    constructor($window) {
        this.$window = $window;
        this.checkLocalStorageSupported();
    }

    checkLocalStorageSupported() {
        this.isLocalStorageSupported = true;
        if (!this.testLocalStorageSupported()) {
            this.isLocalStorageSupported = false;
            this.$window.alert("The application cannot be used because the version of the browser is too old or because it is not possible to save data in 'localStorage'.", true);
        }
    }

    testLocalStorageSupported() {
    	try {
    		let storage = window['localStorage'];
            let x = '__storage_test__';
    		storage.setItem(x, x);
    		storage.removeItem(x);
    		return true;
    	} catch(e) {
    		return false;
    	}
    }

    findKeysWithPrefix(keyPrefix) {
        if (!this.isLocalStorageSupported) {
            return null;
        }
        let keys = Object.keys(localStorage);
        let result = [];
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].indexOf(keyPrefix) === 0) {
                result.push(keys[i]);
            }
        }
        return result;
    }

    get(key) {
        if (!this.isLocalStorageSupported) {
            return null;
        }
        let value = localStorage.getItem(key);
        if (value === null || value === "undefined" || value === undefined) {
            return null;
        } else {
            try {
                return JSON.parse(value);
            } catch (e) {
                // cannot be parsed, must be a string
                return value;
            }
        }
    }

    save(key, value) {
        if (!this.isLocalStorageSupported) {
            return ;
        }
        if (typeof value === 'string') {
            localStorage.setItem(key, value);
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    remove(key) {
        if (!this.isLocalStorageSupported) {
            return ;
        }
        localStorage.removeItem(key);
    }

    import(importDataAsJson) {
        if (!this.isLocalStorageSupported) {
            return ;
        }
        this.cleanAllData();
        let importData = JSON.parse(importDataAsJson);
        let keys = Object.keys(importData);
        for (let i = 0; i < keys.length; i++) {
            this.save(keys[i], importData[keys[i]]);
        }
    }

    export() {
        return JSON.stringify(localStorage);

    }

    cleanAllData() {
        if (!this.isLocalStorageSupported) {
            return ;
        }
        localStorage.clear();
    }

    getUsedCapacity() {
        if (!this.isLocalStorageSupported) {
            return 0;
        }
        return unescape(encodeURIComponent(JSON.stringify(localStorage))).length;
    }

    getRemainingCapacity() {
        let b10 = "0123456789";
        let b100 = this.repeat(b10, 10);
        let b1000 = this.repeat(b100, 10);
        let b10k = this.repeat(b1000, 10);
        let b100k = this.repeat(b10k, 10);
        let b1M = this.repeat(b100k, 10);
        let buffers = [ b1M, b100k, b10k, b1000, b100, b10];
        for (let i = 0; i < buffers.length; i++) {
            while (this.setLocalStorageWithoutError(buffers[i])) {
            }
        }
        let capacity = this.getUsedCapacity();
        delete localStorage.test;
        return capacity;
    }

    getUsedCapacityInPercent() {
        let usedCapacity = this.getUsedCapacity();
        let remainingCapacity = this.getRemainingCapacity();
        let available = usedCapacity + remainingCapacity;
        return usedCapacity / available * 100;
    }

    setLocalStorageWithoutError(value) {
        try {
            localStorage.test = localStorage.test + value;
            return true;
        } catch (e) {
            return false;
        }
    }

    repeat(string, count) {
        var array = [];
        while (count--) {
            array.push(string);
        }
        return array.join('');
    }
}

export default PersistenceService;