import React from 'react'

export default function Footer() {
  return (
      <footer className="py-5" data-bs-theme="dark">
        <div className="row" style={{marginRight:"0px !important"}}>
          <div className="col-6 col-md-2 mb-3 offset-md-1" style={{textAlign:"left",}}>
            <h5 style={{color: 'white'}}>Movie</h5>
            <ul className="nav flex-column">
            <p style={{color: 'darkgrey'}}>Watch any movies on this open source streaming app</p>
              <li className="nav-item mb-2" style={{paddingTop:"20px"}}><a href="/" className="nav-link p-0 text-body-secondary">Home</a></li>
              {/* <li className="nav-item mb-2">
                <a className="btn btn-outline-light" href="https://github.com/Aks-stack">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg> Github
                </a>
              </li> */}
              
            </ul>
          </div>

          <div className="col-md-6 offset-md-2 mb-3">
            <form style={{textAlign:'right'}}>
              <h5 style={{color: 'white'}}>Disclaimer</h5>
              <p style={{color: 'darkgrey'}}>This web app does not host any files, it merely links to 3rd party services. Legal issues should be taken up with the file hosts and providers. this web app is not responsible for any media files shown by the video providers.</p>
              <a className="btn btn-outline-light" href="https://github.com/Aks-stack">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg> Github
              </a>
              {/* <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                <button className="btn btn-primary" type="button">DMCA</button>
              </div> */}
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between border-top" style={{color: 'darkgrey'}}>
          <p style={{paddingLeft:"20px"}}>Made with love
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16" style={{paddingLeft:"5px"}}>
              <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
            </svg>
          </p>
          {/* <ul className="list-unstyled d-flex">
            <li className="ms-3"><a className="link-body-emphasis" href="/"><svg className="bi" width="24" height="24"><use xlinkHref="#box-seam"></use></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="/"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
            <li className="ms-3"><a className="link-body-emphasis" href="/"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
          </ul> */}
        </div>
    </footer>
  )
}
