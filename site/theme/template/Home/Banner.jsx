import React from 'react';
import { Link } from 'bisheng/router';
import { FormattedMessage } from 'react-intl';
import ScrollElement from 'rc-scroll-anim/lib/ScrollElement';
import GitHubButton from 'react-github-button';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import * as utils from '../utils';

function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }
  return 'left';
}

export default function Banner({ location, onEnterChange }) {
  const isZhCN = utils.isZhCN(location.pathname);
  return (
    <section className="page banner-wrapper">
      <ScrollElement
        className="page"
        id="banner"
        onChange={({ mode }) => onEnterChange(mode)}
        playScale={0.9}
      >
        <QueueAnim className="banner-text-wrapper" type={typeFunc} delay={300} key="banner">
          <h2 key="h2"><p>Photon</p>ANT</h2>
          <p key="content"><FormattedMessage id="app.home.slogan" /></p>
          <span className="line" key="line" />
          <div key="button1" className="start-button clearfix">
            <Link to={utils.getLocalizedPathname('/docs/react/getting-started', isZhCN)}>
              <FormattedMessage id="app.home.start" />
            </Link>
          </div>
        </QueueAnim>
      </ScrollElement>
    </section>
  );
}
