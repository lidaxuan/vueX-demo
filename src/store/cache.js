
import storage from 'good-storage'

/**
 * 设置本地存储
 */
export function saveStorage(key, value, timeout) {
    let toSave={value: value, __saveTime:new Date().getTime, __timeout: timeout}
    storage.set(key, JSON.stringify(toSave))
    return value
}

/**
 * 获取本地存储
 */
export function loadStorage(key, defaultValue) {
    let v = storage.get(key, null);
    if(v){
        v=JSON.parse(v)
        
        console.log('loadStorage OK '+key)
        return v.value
    }
    return defaultValue
}
