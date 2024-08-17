import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import "./twcss.css";


const App = () => {
  return (
    <>
      <div className="bg-orange-100">
        <div className="container w-5/6 mx-auto drop-shadow-lg px-6 pb-8 bg-orange-200 min-h-screen relative">
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App;