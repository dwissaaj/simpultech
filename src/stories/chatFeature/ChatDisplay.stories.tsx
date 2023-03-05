import React from "react";
import {ChatDisplay} from "./chatDisplay";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Chat',
    component: ChatDisplay
} as ComponentMeta<typeof ChatDisplay>
const Template: ComponentStory<typeof ChatDisplay> = (args) => <ChatDisplay  />

export const Chats = Template.bind({})
