import '../web/css/src/_layout.less'

const LayoutPage = ({ children }) => {
  return (
    <main className='main-content'>
      <section className='container'>{children}</section>
    </main>
  )
}

export default LayoutPage
