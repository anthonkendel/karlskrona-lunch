import places from '@server/places.json';

interface ISource {
  name: string;
  url: string;
}

const sources: ISource[] = places.sources;

// tslint:disable-next-line no-console
console.log(sources);
