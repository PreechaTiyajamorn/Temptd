
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
    <div class="row pt-5">
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
    <img class="img-fluid" src={src} alt={alt}/>
  )
}
function Content() {
  return (
    <div>
      <div class="row">
        <div class="col-sm-6">
          <Image src="products/15821305868982.jpg" alt="Picture#1"/>
        </div>
        <div class="col-sm-6">
          <Image src="products/15821305870368.jpg" alt="Picture#2"/>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <Image src="products/15911930477723.jpg" alt="Picture#3"/>
        </div>
        <div class="col-sm-3">
          <Image src="products/17733430811798.jpg" alt="Picture#4"/>
        </div>
        <div class="col-sm-3">
          <Image src="products/17806898429480.jpg" alt="Picture#5"/>
        </div>
        <div class="col-sm-3">
          <Image src="products/17916092820744.jpg" alt="Picture#6"/>
        </div>
      </div>
    </div>
  )
}
function Copyright() {
  return (
    <div class="h6 small text-black-50 border">
      &copy; TEMPTD 2023
    </div>
  )
}
function Footer() {
  return (
    <div class="">
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
    <div class="container-fluid">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
