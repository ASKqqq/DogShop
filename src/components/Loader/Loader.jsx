import staylesLoader from './Loader.module.css'

export const Loader = () => (
  <div className={staylesLoader.container}>
    <div className={staylesLoader['lds-roller']}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
)
