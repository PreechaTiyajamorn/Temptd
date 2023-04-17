
function Logo() {
  return (
    <img class="float-start" width="327" height="100" src="logo.png" alt="Temptd" />
  );
}
function Header() {
  return (
    <div class="bg-black text-white " style={{height:100}}>
      <Logo />
      <Menu />
    </div>
  )
}
function Menu() {
  return (
    <div class="row text-center" style={{height:100}}>
      <div class="col-sm-4 d-flex justify-content-between align-items-center">
        T-Shirt
      </div>
      <div class="col-sm-4 d-flex justify-content-between align-items-center">
        Shorts
      </div>
      <div class="col-sm-4 d-flex justify-content-between align-items-center">
        Cap
      </div>
    </div>
  )
}
function Image({src, alt}) {
  return (
    <img class="" width="100%" height="" src={src} alt={alt}/>
  )
}
function Content() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 px-0">
          <Image src="products/15821305868982.jpg" alt="Picture#1"/>
        </div>
        <div class="col-sm-6 px-0">
          <Image src="products/TD Black.jpg" alt="Picture#2"/>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3 px-0">
          <Image src="products/15911930477723.jpg" alt="Picture#3"/>
        </div>
        <div class="col-sm-3 px-0">
          <Image src="products/Mix.jpg" alt="Picture#4"/>
        </div>
        <div class="col-sm-3 px-0">
          <Image src="products/17806898429480.jpg" alt="Picture#5"/>
        </div>
        <div class="col-sm-3 px-0">
          <Image src="products/Shorts.jpg" alt="Picture#6"/>
        </div>
      </div>
    </div>
  )
}
function Copyright() {
  return (
    <div class="mt-2 h6 small text-black-50 border-top border-dark">
      &copy; Temptd 2023
    </div>
  )
}
function Footer() {
  return (
    <div class="text-center">
      <div class="row">
        <div class="col">
          <a href="https://instagram.com/temptdofficial">
            instagram
          </a>
        </div>
        <div class="col">
          <a href="https://facebook.com/temptdofficial">
            facebook
          </a>
        </div>
        <div class="col">
          contact us
        </div>
      </div>
      <Copyright />
    </div>
  )
}
function Test() {
  return (
    <>
      <div class="bg-primary text-white d-flex justify-content-between align-items-center"style={{height:100}}>
        CCC
      </div>
    </>
  )
}
function App() {
  return (
    <div class="container-fluid px-0 mx-0">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
