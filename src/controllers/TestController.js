import axios from 'axios'

export const test = async (req, res) => { 
    const country = req.query.country;
    let json = [];
    axios.get(`https://datastore.iati.cloud/api/v2/activity?q=(recipient_country_code:(${country}) OR transaction_recipient_country_code:(${country})) AND (humanitarian:(1) OR transaction_humanitarian:(1))&wt=json&rows=10`)
    .then(async function (response) {
        for(let i=0; i<response.data.response.docs.length; i++){
            let result = response.data.response.docs[i];
            let data = {
                identifier: result.iati_identifier,
            };
            if(result.transaction_provider_org_narrative_text){
                for(let j=0; j<result.transaction_provider_org_narrative_text.length; j++){
                    let key = result.transaction_provider_org_narrative_text[j]
                    data[key] = result.transaction_value[j]
                }
            }
            await json.push(data)
        }
        return res.json({
            ok: true,
            json
        })
    })
    .catch(async function (error) {
        console.log(error)
        return res.json({
            ok: false,
            error
        })
    });
}