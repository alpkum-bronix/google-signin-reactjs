import './App.css';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";

function App() {

  function handleCallbackResponse(response){
    console.log(jwt_decode(response.credential));
  }

  //init google client
  useEffect(() =>  {
    /*global google*/
    google.accounts.id.initialize({
      client_id: "your-client-id",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline", size: "large"
      }
    )
  }, [])

  return (
    <div className="App">
        <div class="g-signin2" id="signInDiv"></div>
    </div>
  );
}

export default App;
