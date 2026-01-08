export * from "./modal";
export * from "./modal-content";
export * from "./modal-context";
export * from "./modal-trigger";
export * from "./modal-overlay";
export * from "./modal-header";
export * from "./modal-title";
export * from "./modal-close";
export * from "./modal-body";
export * from "./modal-footer";

import { Modal as ModalComponent } from "./modal";
import { ModalContent } from "./modal-content";
import { ModalContext } from "./modal-context";
import { ModalTrigger } from "./modal-trigger";
import { ModalOverlay } from "./modal-overlay";
import { ModalHeader } from "./modal-header";
import { ModalTitle } from "./modal-title";
import { ModalClose } from "./modal-close";
import { ModalBody } from "./modal-body";
import { ModalFooter } from "./modal-footer";
import { ModalDescription } from "./modal-description";

const Modal = Object.assign(ModalComponent, {
  Content: ModalContent,
  Context: ModalContext,
  Trigger: ModalTrigger,
  Overlay: ModalOverlay,
  Header: ModalHeader,
  Title: ModalTitle,
  Close: ModalClose,
  Body: ModalBody,
  Footer: ModalFooter,
  Description: ModalDescription,
});

export { Modal };
