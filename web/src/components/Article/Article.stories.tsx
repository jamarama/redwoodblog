// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/7/writing-stories/args

import type { Meta, StoryObj } from "@storybook/react";

import Article from "./Article";

// const ARTICLE = {
//   id: 1,
//   title: "First Post",
//   body: `Neutra tacos hot chicken prism raw denim, put a bird on it enamel pin post-ironic vape cred DIY. Street art next level umami squid. Hammock hexagon glossier 8-bit banjo. Neutra la croix mixtape echo park four loko semiotics kitsch forage chambray. Semiotics salvia selfies jianbing hella shaman. Letterpress helvetica vaporware cronut, shaman butcher YOLO poke fixie hoodie gentrify woke heirloom.`,
// };

// export const full = () => {
//   return <Article article={ARTICLE} />
// }

// export const summary = () => {
//   return <Article article={ARTICLE} summary={true} />;
// };

const meta: Meta<typeof Article> = {
  title: "Components/Article",
  component: Article,
};

export default meta;

type Story = StoryObj<typeof Article>;

export const Generated: Story = {
  args: {
    article: {
      id: 1,
      title: "First Post",
      body: `Neutra tacos hot chicken prism raw denim, put
a bird on it enamel pin post-ironic vape cred
DIY. Street art next level umami squid.
Hammock hexagon glossier 8-bit banjo. Neutra
la croix mixtape echo park four loko semiotics
kitsch forage chambray. Semiotics salvia
selfies jianbing hella shaman. Letterpress
helvetica vaporware cronut, shaman butcher
YOLO poke fixie hoodie gentrify woke
heirloom.`,
      createdAt: "2020-01-01T12:34:45Z",
    },
    summary: false,
  },
};
