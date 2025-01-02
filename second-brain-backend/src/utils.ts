export function random(len: number){
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < len; i++){
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}