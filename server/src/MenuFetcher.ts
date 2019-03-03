import { ICrawler } from '@server/types/ICrawler.ts';

class MenuFetcher {
  private crawlers: ICrawler[] = [];

  public registerCrawler(crawler: ICrawler) {
    this.crawlers.push(crawler);
  }

  public fetchMenus() {
    // tslint:disable-next-line no-console
    return this.crawlers.forEach(crawler => crawler.crawl().then(output => console.log(output.header, output.result)));
  }
}

const menuFetcher = new MenuFetcher();
Object.freeze(menuFetcher);
export default menuFetcher;

import '@server/crawlers/SaltoFiskhallCrawler';
