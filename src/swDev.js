export default function swDev()
{
    let swUrl='sw.js'
    if('serviceWorker' in navigator) {
    	navigator.serviceWorker.register(swUrl)
		.then((response)=>{console.log("sw register response: ", response)})
		.catch((error)=>{console.log("sw register error: ", error)});
    }
}