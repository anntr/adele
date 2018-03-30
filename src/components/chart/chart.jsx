import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { YAxis, HorizontalBarSeries, FlexibleXYPlot, LabelSeries } from 'react-vis';
import { charts } from '../../style_tokens/tokens';
import { StyledChartContainer, StyledChartHeader } from '../../containers/chartContainer/chart-container.styles';

const parseDataForPlot = data => _
  .chain(data)
  .map((value, property) => ({
    x: value,
    y: property,
    label: value.toString(),
    xOffset: 30,
    style: { color: charts.labelColor, fontSize: charts.fontSize },
  }))
  .sortBy('x')
  .value();

const Plot = ({ data }) => (
  <FlexibleXYPlot yType="ordinal" margin={{ left: 160, right: 150 }} >
    <YAxis tickSize={0} style={{ text: { fontSize: charts.fontSize } }} />
    <HorizontalBarSeries
      color={charts.color}
      data={data}
    />
    <LabelSeries data={data} />
  </FlexibleXYPlot>
);

Plot.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.string.isRequired,
    label: PropTypes.string,
  }).isRequired).isRequired,
};

const Chart = ({ data, title }) => (
  <StyledChartContainer>
    <StyledChartHeader>{title}</StyledChartHeader>
    <Plot data={parseDataForPlot(data)} />
  </StyledChartContainer>
);

/* eslint-disable react/forbid-prop-types */
Chart.propTypes = {
  data: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export { Chart as default };
