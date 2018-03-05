const rules = [{
  name: '36氪',
  hostname: '36kr.com',
  title: 'h1',
  content: 'section[class=textblock]',
  sanitiser: [],
},
{
  name: '好奇心日报',
  hostname: 'www.qdaily.com',
  title: 'h2[class=title]',
  content: 'div[class=detail]',
  sanitiser: [],
},
{
  name: '钛媒体',
  hostname: 'www.tmtpost.com',
  title: 'h1',
  content: 'div[class=inner]',
  sanitiser: ['p[style="text-align: center;"]'],
},
{
  name: '动点科技',
  hostname: 'cn.technode.com',
  title: 'h1',
  content: 'article',
  sanitiser: ['header', 'footer'],
},
];

module.exports = {
  rules,
};