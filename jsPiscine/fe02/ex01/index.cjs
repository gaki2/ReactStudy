const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const temp = (async () => {
  const pageId = '6e13eb50716646e2a2c2d9b613d6874c';
  const response = await notion.pages.retrieve({ page_id: pageId });
  console.log(response.properties.title.title[0].text.content);
  console.log(response.url);
  console.log(response.created_time);
  console.log(response.last_edited_time);
})();

temp;
