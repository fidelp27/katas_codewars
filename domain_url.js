/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

url = "http://github.com/carbonfive/raygun" -> domain name = "github"
url = "http://www.zombie-bites.com" -> domain name = "zombie-bites"
url = "https://www.cnet.com" -> domain name = cnet"

*/
function domainName(url){
  url = url.replace(/^(https?:\/\/)?(www\.)?/i, "")
  console.log(url.split(".")[0])
  return url.split(".")[0]
}
// forma 2
function domainName2(url){
  url = url.replace("https://", '')
  url = url.replace("http://", '')
  url = url.replace("www.", '')
  console.log(url.split(".")[0])
  return url.split(".")[0]
}
domainName("http://github.com/carbonfive/ray")