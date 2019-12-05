import React from "react";
import styled from "@emotion/styled";

import { grid, type, util, media } from "../Styles";

import Title from "../Title/Title";

const Container = styled.div({
  ...grid.inner.template,
  marginBottom: `var(${grid.size.l})`,
  ...util.scrollOffset,

  [media.phablet.q]: {
    display: "flex",
    flexDirection: "column"
  },
  [media.large.q]: {
    marginBottom: 0
  }
});

const TitleContainer = styled.div({
  gridArea: `1 / 1 / 4 / ${grid.inner.count.full + 1}`,
  [media.phablet.q]: {
    paddingBottom: `calc(var(${grid.size.l}) / 2)`
  }
});

const TextContainer = styled.div({
  gridArea: `4 / 1 / 9 / 11`,
  columns: 2,
  columnGap: `var(${grid.size.l})`,
  [media.phablet.q]: {
    columns: 1
  }
});

const BodyCopy = styled.p({
  display: "block",
  maxWidth: "40rem",
  breakInside: "avoid-column",
  ...type.body
});

export default () => (
  <Container id="about">
    <TitleContainer>
      <Title name="Digital environments where academia, journalism<br>& society meets" />
    </TitleContainer>
    <TextContainer>
      <BodyCopy>
        We are a small collective that research, design, and code digital
        environments. Our projects are on the intersection between academia,
        journalism, and society.
      </BodyCopy>
      <BodyCopy>
        Most of our projects are self-initiated, but we don't like to build
        alone. We are always on the lookout for collaborations. If you have an
        idea on your mind, drop us a<a href="mailto:info@uhmmm.net"> mail.</a>
      </BodyCopy>
      <BodyCopy>
        In our work, we value creativity, inclusive perspectives and narratives.
        Whatever it is, we try to get there with our partners. Together we
        create new digital environments.
      </BodyCopy>
    </TextContainer>
  </Container>
);
