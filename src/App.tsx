import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {I18nProvider, LOCALE} from './i18n';

import translate from './i18n/translate';
import { selectUnit } from '@formatjs/intl-utils';
import { FormattedDate, FormattedTime, FormattedRelativeTime } from 'react-intl';

function App() {
  const[locale, setLocale] = useState(LOCALE.AUSTRALIA);
  const {value, unit} = selectUnit(Date.now() - 0.9 * (3600 * 1000));
  return (
    <I18nProvider locale={locale}>
    <div className="App">
      <header className="App-header">
        <h1>
          {translate('country')}
        </h1>
        {translate("hello")}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {translate('edit', {path: <code>src/App.tsx</code>})}
          <hr/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {translate('learn', {name: 'React'})}
        </a>
        <div>
          <button onClick={() => setLocale(LOCALE.AUSTRALIA)}>Australia</button>
          <button onClick={() => setLocale(LOCALE.JAPAN)}>Japan</button>
          <button onClick={() => setLocale(LOCALE.TAIWAN)}>Taiwan</button>
        </div>
        <br/>
        <FormattedDate
          value={new Date()}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
        <br/>
        <span>
          <FormattedTime value={new Date()}/>
        </span>
        <FormattedRelativeTime value={value} unit={unit}/>
      </header>
    </div>
    </I18nProvider>
  );
}

export default App;
