import ReactDOM from 'react-dom/client';
import axios from 'axios';
import {useEffect} from 'react';

function App() {

    useEffect(() => {
        axios.get('https://bakcend-f3h5.onrender.com/')
        // axios.get('http://localhost:8080/')
        .then((response) => {
            console.log(response.data.message)
        })
    }, [])

    return (
        <h1>Hello From React</h1>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)