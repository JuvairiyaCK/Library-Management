import axios from 'axios'


const commonApi=(reqMethod,reqUrl,reqBody)=>{
    const config={
        method:reqMethod,
        url:reqUrl,
        data:reqBody,
        header:{"content-type":"application/json"}
    }
    return axios(config)
}


export default commonApi