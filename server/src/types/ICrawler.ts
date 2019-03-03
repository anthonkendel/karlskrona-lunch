import { Food } from "./Food";

export interface ICrawler {
  crawl(): Promise<CrawlerOutput>;
}

export class CrawlerOutput {
  constructor(public header: string = '', public result: Food[] = []) {}
}
