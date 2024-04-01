import { writable } from "svelte/store";

function createStore() {
    const total = 8;
    const drinks = writable(-1);
    const { subscribe, set, update } = drinks;
    return {
        subscribe,
        update,
        toggle(index: number) {
            console.log('tapped :' + index);
            update(n => {

                if (n == index) {

                    return n - 1;
                }
                else {

                    return index;
                }
            });
        }
    }
}
export default createStore();