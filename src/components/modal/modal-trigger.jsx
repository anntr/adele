import { withModal } from '../../hocs/modal/modal-provider';

const ModalTrigger = withModal(({ children, content, openModal }) =>
  children(() => openModal(content)));

export { ModalTrigger as default };
