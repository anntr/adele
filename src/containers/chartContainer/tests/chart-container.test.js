import React from 'react';
import ChartContainer, { dataAggregator } from '../chart-container';

const data = [{
  uiKit: {
    data: 'no',
    label: 'UI kit',
  },
  storybook: {
    data: 'no',
    url: '',
    label: 'storybook',
  },
  colorNaming: {
    data: [
      'natural (e.g. fill-red)',
      'specific (e.g.fill-facebook)',
    ],
    label: 'color naming',
  },
},
{
  uiKit: {
    data: [
      'Sketch',
      'Photoshop',
    ],
    url: [
      'http://developer.royalcanin.com/resources.html',
      'http://developer.royalcanin.com/resources.html',
    ],
    label: 'UI kit',
  },
  storybook: {
    data: 'no',
    url: '',
    label: 'storybook',
  },
  colorNaming: {
    data: 'natural (e.g. gray darkest)',
    label: 'color naming',
  },
}];

const parsedData = dataAggregator(data);

describe('data aggregator', () => {
  it('should be able to count binary data in column', () => {
    expect(parsedData).toHaveProperty('storybook.no', 2);
  });

  it('should be able to count array data in column', () => {
    expect(parsedData).toHaveProperty('UI kit.no', 1);
    expect(parsedData).toHaveProperty('UI kit.sketch', 1);
    expect(parsedData).toHaveProperty('UI kit.photoshop', 1);
  });

  it('should not contain "system" property', () => {
    expect(parsedData).not.toHaveProperty('system');
  });

  it('should not contain "company" property', () => {
    expect(parsedData).not.toHaveProperty('company');
  });

  it('should correctly handle different examples of color naming', () => {
    expect(parsedData).toHaveProperty('color naming.natural', 2);
    expect(parsedData).toHaveProperty('color naming.specific', 1);
  });
});

it("should render properly", () => {
  const wrapper = mount(<ChartContainer category="storybook" />);
  expect(wrapper).toMatchSnapshot();
})
