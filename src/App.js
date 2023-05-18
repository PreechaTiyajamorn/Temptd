
function Logo() {
  return (
    <img className="float-start" width="160" height="50" src="transparent.png" alt="Temptd" />
  );
}
function Header() {
  return (
    <div className="fixed-top bg-transparent text-white " style={{height:105}}>
      <table>
        <tbody>
          <tr>
            <td>
              <Logo />
            </td>
            <td width="60%">
              <Menu />
            </td>
            <td width="40%">
              <Function />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
function MenuItem({item}) {
  return (
    <div className="col-sm-3 d-flex align-items-center justify-content-center">
      {item}
    </div>
  )
}
function Menu() {
  return (
    <div className="row text-center" style={{height:105}}>
      <MenuItem item="Unisex" />
      <MenuItem item="Women" />
      <MenuItem item="Men" />
      <MenuItem item="Accessories" />
    </div>
  )
}
function FunctionItem({item}) {
  return (
    <div className="col-sm-3 d-flex align-items-center justify-content-center">
      {item}
    </div>
  )
}
function Function() {
  return (
    <div className="row text-center" style={{height:105}}>
      <FunctionItem item="Search" />
      <FunctionItem item="Account" />
      <FunctionItem item="Cart" />
      <FunctionItem item="o" />
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
      <Image src={src} alt={alt} loading="lazy"/>
    </div>
  )
}
function Content() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Product src="products/Untitled Capture2304.jpg" alt="Picture#1" width={6} />
        <Product src="products/Untitled Capture0086 1.jpg" alt="Picture#2" width={6} />
      </div>
      <div className="row">
        <Product src="products/Untitled Capture8964.jpg" alt="Picture#1" width={6} />
        <Product src="products/Untitled Capture6841.jpg" alt="Picture#2" width={6} />
      </div>
      <div className="row">
        <Product src="products/Untitled Capture0181.jpg" alt="Picture#1" width={3} />
        <Product src="products/Untitled Capture3468.jpg" alt="Picture#1" width={3} />
        <Product src="products/Untitled Capture4521.jpg" alt="Picture#1" width={3} />
        <Product src="products/Untitled Capture2354.jpg" alt="Picture#1" width={3} />
      </div>
      <div className="row">
        <Product src="products/rufearoflove-05.png" alt="Picture#1" width={4} />
        <Product src="products/rufearoflove-06.png" alt="Picture#1" width={4} />
        <Product src="products/rufearoflove-04.png" alt="Picture#1" width={4} />
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
    <div className="text-center bg-light">
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
    </div>
  );
}
export default App;
