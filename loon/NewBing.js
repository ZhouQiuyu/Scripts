$request.headers['User-Agent']="AppleWebKit/537.36 Chrome/110.0 Safari/537.36 Edg/110.0"
// 如果url为cn.bing.com则替换为www.bing.com
$request.url=$request.url.replace(/cn.bing.com/g,"www.bing.com")

$done($request)
