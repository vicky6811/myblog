import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');


    //const [name, setName] = useState('mario');


 



    //let name = 'mario';
    //const [name, setName] = useState('mario');
    //const [age, setAge] = useState(25);

    //const handleClick  = () => {
        //console.log('hello, ninjas', e);
        //name = 'luigi';
        //setName('luigi');
        //setAge(30);
    //}

    //const handleClickAgain = (name, e) => {
       // console.log('hello ' + name, e.target);
    //}

    return (
        <div className="home">
            {error && <div>{ error }</div>}

            { isPending && <div>Loading... </div>}

            {blogs && <BlogList blogs = {blogs} title="All Blogs!" />}

            {/* <button onClick={() => setName('luigi')}>change name</button>*/}
            {/*<p>{name}</p>*/}
            
            {/*<BlogList blogs = {blogs.filter((blog)=> blog.author==='mario')} title="Mario's blogs"/>*/}

            {/*<h2>Homepage</h2>*/}
           {/*  <p>{ name } is { age } years old</p>*/}
            {/*<button onClick= {handleClick} >Click me</button>*/}

            {/*<button onClick={handleClickAgain('mario')}>Click me again</button>*/}
            

    
            {/*<button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>*/}
            {/*
            //another way to write above without the addtional curly bracket
                <button onClick={() => {
                    //console.log('hello')
                    handleClickAgain('mario')
                }}>Click me again</button>
            */}
            

        </div>
    );
}
 
export default Home;