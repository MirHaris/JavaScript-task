import './App.css';
import Sidebar from './Components/sidebar';
function App() {
  data = {                                 // this data object is created for adding new user
    name : ''
  }

  componentDidMount = () => {
    this.getusers();
  };

  getusers = () => {                        //Added users list will be fetched here
    axios.get('/api')
    .then((response)=> {
      const data  = response.data;
      this.setState({posts : data});
    })
    .catch(()=>{
      alert('Error retrieving data')
    })
  }
  return (
    <div className="App">

      <Sidebar/>
    </div>
  );
}

export default App;
