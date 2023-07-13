'use client';

import styled from '@emotion/styled';

const Box = styled.div({
  color: 'green',
  display: 'inline-block',
});

export default function Home() {
  return (
    <main>
      <Box>hello</Box>&nbsp;there
    </main>
  );
}
