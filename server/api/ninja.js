export default defineEventHandler(async(event) => {
    //hanadle query params
    // const { name } = useQuery(event)

    // //handle post data
    // const {age} =await useBody();

    // api call with private key
    const{data}=await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_b1fpWte12BkCEuzuc8p85ISi2SIDF6FWCDDV6WDI')
    // return {
    //     message: `Hello , ${name}! Your ${age}`
    // }
    return data;
})