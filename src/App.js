
function Logo() {
  return (
    <img class="float-start" width="409" height="126" src="logo.png" alt="Temptd" />
  );
}
function Header() {
  return (
    <div class="bg-black text-white" style={{height:126}}>
      <Logo />
      <Menu />
    </div>
  )
}
function Menu() {
  return (
    <div class="row pt-5 text-center">
      <div class="col">
        T-Shirt
      </div>
      <div class="col">
        Shorts
      </div>
      <div class="col">
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
    <div>
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
    <div class="h6 small text-black-50 border-top">
      &copy; TEMPTD 2023
    </div>
  )
}
function Footer() {
  return (
    <div class="text-center">
      <div class="row">
        <div class="col">
          Instagram
        </div>
        <div class="col">
          Facebook
        </div>
        <div class="col">
          Contact Us
        </div>
      </div>
       <Copyright />
    </div>
  )
}
function App() {
  return (
    <div class="container-fluid px-0">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
