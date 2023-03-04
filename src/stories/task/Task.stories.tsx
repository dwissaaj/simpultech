import React from "react";
import {Task} from "./task";
import {ComponentMeta, ComponentStory} from "@storybook/react";


export default {
    title: 'Task',
    component: Task
} as ComponentMeta<typeof Task>

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />

export const Active =  Template.bind({});
const date: Date = new Date()
Active.args = {
    state: true,
    titleTask: 'Close Off case #0123455-Rodrigues Amiguel',
    daysTask: '4 Days Left',
    timeTask: date,
    descriptionTask: "All cases must be in"
}
export const Inactive =  Template.bind({});
Inactive.args = {
    state: false,
    titleTask: 'Close Off case #0123455-Rodrigues Amiguel',
    daysTask: '4 Days Left',
    timeTask: date,
    descriptionTask: "All cases must be indsffffffffffffffffffffffffffffffffffffffffffffffff" +
        "loremdfkldfgjskldsfjfdsjkl"
}
