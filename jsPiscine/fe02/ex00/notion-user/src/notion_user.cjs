const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

(async () => {
  const response = await notion.users.list();
  // console.log(response);
  console.log(response.results);
})();