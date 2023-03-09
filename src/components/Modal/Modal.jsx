import { useEffect } from 'react'
import { createPortal } from 'react-dom'

const ModalInner = ({ closeHandler, children }) => {
  const closeModalByEscape = (e) => {
    if (e.key === 'Escape') closeHandler()
  }
  useEffect(() => {
    document.addEventListener('keydown', closeModalByEscape)
    return () => {
      document.removeEventListener('keydown', closeModalByEscape)
    }
  }, [])

  return (
    <motion.div
      className={styles.modalInner}
      variants={modalContentVariants}
      data-label="notNavigate"
    >
      {children}
    </motion.div>
  )
}

export const Modal = ({ isOpen, closeHandler, children }) => {
  const renderContent = () => {
    if (!isOpen) return null
    const closeModalByClickHandler = (e) => {
      if (e.target === e.currentTarget) closeHandler()
    }

    return (
      <motion.div
        variants={modalWrVariants}
        initial="hidden"
        animate="visable"
        exit="hidden"
        onClick={closeModalByClickHandler}
        className={styles.modalWr}
        data-label="notNavigate"
      >
        <ModalInner closeHandler={closeHandler}>{children}</ModalInner>
      </motion.div>
    )
  }

  return createPortal(
    <AnimatePresence>{renderContent()}</AnimatePresence>,
    document.getElementById('modal-root'),
  )
}
