import HTMLReactParser from 'html-react-parser';

import { useSiteContext } from '@src/context/site-context';
import { useProductContext } from '@src/context/product-context';
import { cn } from '@src/lib/helpers/helper';

export const ProductTitle: React.FC = () => {
  const { settings } = useSiteContext();
  const { product } = useProductContext();

  if (!product) return null;

  return (
    <h1
      className={cn('text-2xl lg:text-4xl lg:leading-[48px] tracking-tight text-contrast-3', {
        uppercase: settings?.product?.layout?.titleCase === '2',
      })}
    >
      {HTMLReactParser(product?.name as string)}
    </h1>
  );
};