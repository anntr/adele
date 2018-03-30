import { compose, getContext, withContext, withHandlers, withState } from 'recompose';
import PropTypes from 'prop-types';

const modalContextType = {
  openModal: PropTypes.func.isRequired,
};

const withModal = getContext(modalContextType);

const modalProvider = compose(
  withState('component', 'setComponent', undefined),
  withState('isVisible', 'setVisible', false),
  withHandlers({
    openModal: ({ setVisible, setComponent }) => (ContentComponent) => {
      setComponent(() => ContentComponent);
      setVisible(true);
    },
    closeModal: ({ setVisible }) => () => setVisible(false),
  }),
  withContext(modalContextType, ({ openModal }) => ({ openModal })),
);

export { modalProvider, withModal };
