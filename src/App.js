
function Logo() {
  return (
    <img className="float-start" width="327" height="100" src="logo.png" alt="Temptd" />
  );
}
function Header() {
  return (
    <div className="sticky-top bg-black text-white " style={{height:100}}>
      <Logo />
      <Menu />
    </div>
  )
}
function MenuItem({item}) {
  return (
    <div className="col-sm-4 d-flex justify-content-between align-items-center">
      {item}
    </div>
  )
}
function Menu() {
  return (
    <div className="row text-center" style={{height:100}}>
      <MenuItem item="T-Shirt" />
      <MenuItem item="Shorts" />
      <MenuItem item="Cap" />
    </div>
  )
}
function Image({src, alt}) {
  return (
    <img className="" width="100%" height="" src={src} alt={alt}/>
  )
}
function Product({src, alt, width}) {
  const className = "col-sm-" + width + " px-0";
  return (
    <div className={className}>
      <Image src={src} alt={alt}/>
    </div>
  )
}
function Content() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Product src="products/15821305868982.jpg" alt="Picture#1" width={6} />
        <Product src="products/TD Black.jpg" alt="Picture#2" width={6} />
      </div>
      <div className="row">
        <Product src="products/15911930477723.jpg" alt="Picture#1" width={3} />
        <Product src="products/Mix.jpg" alt="Picture#1" width={3} />
        <Product src="products/17806898429480.jpg" alt="Picture#1" width={3} />
        <Product src="products/Shorts.jpg" alt="Picture#1" width={3} />
      </div>
    </div>
  )
}
function Copyright() {
  return (
    <div className="mt-2 h6 small text-black-50 border-top border-dark">
      &copy; Temptd 2023
    </div>
  )
}
function FooterItem({item, href}) {
  return (
    <div className="col">
      <a href={href}>
        {item}
      </a>
    </div>
  )
}
function Footer() {
  return (
    <div className="text-center">
      <div className="row">
        <FooterItem item="instagram" href="https://instagram.com/temptdofficial" />
        <FooterItem item="facebook" href="https://facebook.com/temptdofficial" />
        <FooterItem item="contact us" href="mailto:preech@hotmail.co.uk" />
      </div>
      <Copyright />
    </div>
  )
}
function App() {
  return (
    <div className="container-fluid px-0 mx-0">
      <Header />
      <Content />
      <Footer />
      <Test />
    </div>
  );
}
function Test() {
  return (
    <Menu />
  )
}
export default App;
