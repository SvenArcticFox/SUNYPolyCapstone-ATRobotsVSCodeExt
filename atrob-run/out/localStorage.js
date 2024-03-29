'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageService = void 0;
class LocalStorageService {
    storage;
    constructor(storage) {
        this.storage = storage;
    }
    getValue(key) {
        return this.storage.get(key);
    }
    setValue(key, value) {
        this.storage.update(key, value);
    }
}
exports.LocalStorageService = LocalStorageService;
//# sourceMappingURL=localStorage.js.map