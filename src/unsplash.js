import axios from "axios";
export default axios.create({
    baseURL: 'https://api.unsplash.com',
   
        headers :{ Authorization : 'Client-ID dBo2w6Xlc87IbmiOPTKCCoj3mZbUBq4gFTR0WaHT8Bk'}
    }
);
