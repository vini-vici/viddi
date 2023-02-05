import React, { ComponentType } from 'react';
import { Meta, Story} from '@storybook/react';

import { Tabs, Tab } from './index';

const story: Story<ComponentType<typeof Tabs>> = args => (
  <Tabs {...args}>
    <Tab id="tab-1" header="Tab 1 Header">
      <h1>Tab 1 Content</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </Tab>
    <Tab id="tab-2" header="Tab 2 Header">
      <h1>Tab 2 content</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, obcaecati!</p>
      <p>Blanditiis quia veniam, eveniet aperiam sapiente optio cupiditate quae nisi!</p>
    </Tab>
  </Tabs>
);

export const Default = story.bind({});
Default.args = {
  activeTab: 'tab-2'
};