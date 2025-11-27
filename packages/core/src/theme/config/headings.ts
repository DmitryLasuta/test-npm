type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingStyle {
  fontSize: string;
  fontWeight?: string;
  lineHeight?: string;
}

interface Headings {
  fontFamily?: string;
  fontWeight?: string;
  textWrap?: 'wrap' | 'nowrap' | 'balance' | 'pretty' | 'stable';
  sizes: Record<HeadingLevel, HeadingStyle>;
}

const DEFAULT_HEADINGS_FONT_WEIGHT = '700';

export const headingsConfig: Headings = {
  fontWeight: DEFAULT_HEADINGS_FONT_WEIGHT,
  sizes: {
    h1: { fontSize: '24px' },
    h2: { fontSize: '20px' },
    h3: { fontSize: '18px' },
    h4: { fontSize: '16px' },
    h5: { fontSize: '14px' },
    h6: { fontSize: '12px' },
  } satisfies Record<HeadingLevel, HeadingStyle>,
};
