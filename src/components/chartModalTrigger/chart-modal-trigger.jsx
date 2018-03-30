import React from 'react';
import PropTypes from 'prop-types';
import ModalTrigger from '../../components/modal/modal-trigger';
import ChartContainer from '../../containers/chartContainer/chart-container';
import StyledIconButton from './chart-modal-trigger.styles';
import Icon from '../icon/icon';
import chart from '../../icons/chart-bar.svg';

const ChartModalTrigger = ({ category }) => (
  <ModalTrigger content={() => <ChartContainer category={category} />}>
    { openModal => (
      <StyledIconButton title="Show summary chart" onClick={openModal}>
        <Icon i={chart} size="m" />
      </StyledIconButton>)
    }
  </ModalTrigger>);

ChartModalTrigger.propTypes = {
  category: PropTypes.string.isRequired,
};

export { ChartModalTrigger as default };
