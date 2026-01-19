import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComments(): React.ReactElement {
  const { colorMode } = useColorMode();

  return (
    <div style={{ marginTop: '2rem' }}>
      <Giscus
        repo="winterfx/system-design"
        repoId="R_kgDOQ8MNJw"
        category="Announcements"
        categoryId="DIC_kwDOQ8MNJ84C1I4j"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={colorMode === 'dark' ? 'dark' : 'light'}
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  );
}
