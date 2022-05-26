import './App.css';
import { WebES } from './components/WebES/WebES';
import $ from 'jquery';

function App() {

  $(".Header .Navbar a").on("click", function (e) {
    // 1
    e.preventDefault();
    // 2
    const href = $(this).attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
  });

  return (
    <div className='App'>
      <WebES />
    </div>
  );
}

export default App;
