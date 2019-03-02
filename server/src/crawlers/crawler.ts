import places from '@server/places.json';
import { Food } from '@server/types/Food.ts';
import cheerio from 'cheerio';
import fetch from 'node-fetch';

const days = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag'];

interface ISource {
  name: string;
  url: string;
}

const sources: ISource[] = places.sources;

// tslint:disable-next-line no-console
console.log(sources);

const containerSelector = '#sf_content_widget-7';
const containerHeaderSelector = 'h4';
const containerItemsSelector = 'strong';

fetch('http://saltofiskhall.se/')
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

    console.log(header, result);
  });
