import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name="newspaper" />
        <Header.Content>
          Bloggity Blog
            <Header.Subheader>
            Doesn't get much better than this
            </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
