import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import jsonData from '../../data/data.JSON';
import Chart from '../../components/chart/chart';

const dataCleaners = {
  'color naming': data => _
    .chain(data)
    .toPairs()
    .map(([key, value]) => [key.match(/\w+/)[0], value])
    .groupBy(pair => pair[0])
    .mapValues(group => _.map(group, pair => pair[1]))
    .mapValues(_.sum)
    .value(),
};

const dataAggregator = rawData => _
  .chain(rawData)
  .flatMap(system => _.flatMap(system, ({ data, label }) => (_.isArray(data)
    ? _.map(data, val => [label, val])
    : [[label, data]])))
  .groupBy(val => val[0])
  .mapValues(property => _.countBy(property, val => val[1].toLowerCase()))
  .omit('company', 'system')
  .mapValues((value, key) => (dataCleaners[key] ? dataCleaners[key](value) : value))
  .value();

const aggregatedData = dataAggregator(jsonData);

const ChartContainer = ({ category }) =>
  <Chart data={aggregatedData[category]} title={`${category} category summary`} />;

ChartContainer.propTypes = {
  category: PropTypes.string.isRequired,
};

export { ChartContainer as default, dataCleaners, dataAggregator };
