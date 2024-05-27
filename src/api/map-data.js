import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = { data: [{}] }) => {
  console.log(pagesData)
  return pagesData.data.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;
    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};