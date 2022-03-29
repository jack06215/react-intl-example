import { FC } from 'react';
import { IntlProvider } from 'react-intl';
import messages from './languages';
import { LOCALE } from './locales';

interface Props {
  locale: string
}


const Provider: FC<Props> = ({children, locale = LOCALE.AUSTRALIA}) => {
  return (
    <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};

export default Provider