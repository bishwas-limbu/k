import NavBar from "../components/NavBar.tsx"

export default function PageNotfound() {
  return (
    <div className='container'>
        <NavBar />
        <div className="d-flex justify-content-center position-absolute top-50 start-50 translate-middle">
            <h3 className='px-3'>404</h3><span className='pt-1 text-secondary'> |  This page could not be found.</span>
        </div>
    </div>
  )
}
