import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import type FooterType from '@theme/DocItem/Footer';
import type { WrapperProps } from '@docusaurus/types';
import GiscusComments from '@site/src/components/GiscusComments';

type Props = WrapperProps<typeof FooterType>;

export default function FooterWrapper(props: Props): React.ReactElement {
  return (
    <>
      <Footer {...props} />
      <GiscusComments />
    </>
  );
}
