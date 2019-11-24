import config from "../js/config"

var hospital = {
    prefix : "hospitals",
    // 获取医院所有简介数据
    getHostpitalAll(){
        return new Promise((resolve,reject)=>{
            (async ()=>{
                try {
                    var result = await config.axios.get(this.prefix + "/hospitalsAll");    
                    resolve(result.data);
                } catch (error) {
                    reject(error);
                }
            })()
        });
    }
}

export default hospital;