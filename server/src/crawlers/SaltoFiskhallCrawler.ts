import { Food } from '@server/types/Food.ts';
import { CrawlerOutput, ICrawler } from '@server/types/ICrawler.ts';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import menuFetcher from '../MenuFetcher';

const days = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag'];
const containerSelector = '#sf_content_widget-7';
const containerHeaderSelector = 'h4';
const containerItemsSelector = 'strong';

// tslint:disable-next-line no-unused-expression
new class implements ICrawler {
  constructor() {
    menuFetcher.registerCrawler(this);
  }

  public crawl(): Promise<CrawlerOutput> {
    return fetch('http://saltofiskhall.se/')
      .then(response => response.text())
      .then(html => cheerio.load(html))
      .then(query => {
        const container = query(containerSelector);
        const header = container
          .find(containerHeaderSelector)
          .first()
          .text();

        const items = container
          .find(containerItemsSelector)
          .toArray()
          .map(element => element.firstChild.data);

        const result = items
          .filter(item => days.some(day => item!.toLowerCase().includes(day)))
          .map((item, index) => {
            const [dirtyDay, dirtyFood] = item!.split(':');
            const day = dirtyDay.trim();
            const food = dirtyFood.trim();
            return new Food(String(index), food, `${day} - ${food}`, 0);
          });

        return new CrawlerOutput(header, result);
      });
  }
}();
