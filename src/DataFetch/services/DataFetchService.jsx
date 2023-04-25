import axios from 'axios';

export const DataFetchService = {
    async fetchFoundAWSFile(comp) {
        // const comp_season ="271657"
        let url = `https://834k9vzwia.execute-api.eu-central-1.amazonaws.com/ovalhub-v2/bucket-file/${comp}`;
        const res = await axios.get(url,{
            headers: {
                'X-API-KEY': "XDPCUCB8fc7v97IRLGcF1a2ZEnh5Q4oEapWpgIF6"
            }
        }) 
        console.log(res.data)
        const response = res.data;
        return response;
      },
      async fetchFoundAWSFiles(comp) {
        // const comp_season ="271657"
        let url = `https://834k9vzwia.execute-api.eu-central-1.amazonaws.com/ovalhub-v2/bucket-files/${comp}`;
        const res = await axios.get(url,{
            headers: {
                'X-API-KEY': "XDPCUCB8fc7v97IRLGcF1a2ZEnh5Q4oEapWpgIF6"
            }
        }) 
        console.log(res.data)
        const response = res.data;
        return response;
      }
}