declare module '*.md';

declare namespace JSX {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface IntrinsicElements {
    'ww-open-data': any;
  }
}

declare namespace Intl {
  type Key = 'calendar' | 'collation' | 'currency' | 'numberingSystem' | 'timeZone' | 'unit';

  function supportedValuesOf(input: Key): string[];
}
