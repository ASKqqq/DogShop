import { Loader } from '../Loader/Loader'

// eslint-disable-next-line func-names
export const withQuery = (WrappedComponent) => function ({
  isLoading, isError, error, refetch, isFetching, ...rest
}) {
  if (isError) {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p>
          Error happend:
          {' '}
          {error.message}
        </p>
        <button
          type="button"
          className="btn btn-primary mx-3"
          onClick={refetch}
        >
          Повторить
        </button>
      </div>
    )
  }
  if (isLoading) return <Loader />

  return (
    <>
      {isFetching && <Loader />}
      <WrappedComponent {...rest} />
    </>
  )
}
