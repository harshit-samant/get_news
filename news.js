const { allWebsites } =  require('./websites.js');
let request = require("request-promise");
let JSSoup = require("jssoup").default;

async function generateNews(lang, news, categoryNum) {
  let website = generateUrl(lang, news, categoryNum);

  const link = website.link;
  const html = await request.get(link);
  const soup = new JSSoup(html);
  const posts = soup.findAll(website.element, website.className);
  const postsLength = 5;

  let newsList = []

  for (let i = 0; i <= postsLength; i++) {
    let news = posts[i].find("h2").text;
    newsList.push(news);
  }
  console.log(newsList);
  return newsList;
}

function generateUrl(lang, name, categoryNum) {
  let link =
    allWebsites[lang][name].url +
    allWebsites[lang][name].categories[categoryNum];
  let element = allWebsites[lang][name].element;
  let className = allWebsites[lang][name].class;

  return { link, element, className };
}

generateNews("english", "businesstoday", 2);

