import {stores} from "../mock/stores.json";

const getParam = (search) => {
    if(search){
        const tmp = search.substring(1).split("&");
        const data = {};
        tmp.map((i)=>{
            const sp = i.split("=");
            data[sp[0]] = sp[1];
        });

        return data;
    }else{
        return false;
    }
}

const getStore = (id) => {
    const res = stores.find((store)=> store.id === parseInt(id));
    return res;
}
export {
    getParam,
    getStore
}