import { rest } from 'msw';
import files from '../json_responses/DataFetch/bucket-files.json'

const dataFetchHandlers = [

  rest.get('https://834k9vzwia.execute-api.eu-central-1.amazonaws.com/ovalhub-v2/bucket-files/:comp', (req, res, ctx) => {
    // let comp_season = req.url.searchParams.get('comp-season')
    console.log('hitit')
    return res(ctx.status(200), ctx.json(files))
  })
];

export default dataFetchHandlers;
