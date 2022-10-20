import React from 'react' 
import "./scss/app.scss"
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Content from './components/Content/Content';
import Main from './components/Google/Main';
import {useQuery} from "@tanstack/react-query";
import {PostService} from "./services/post.service";
import Result from "./components/Result/Result";

function App() {

    const [searchValue,setSearchValue]=React.useState('')
    const {data,isLoading,refetch,isSuccess }=useQuery(['get post',searchValue],()=> PostService.getPosts(),{

        refetchOnWindowFocus:false,enabled:false,
        select: data =>
             data.filter(post=>
                 post.title.toLowerCase().includes(searchValue.toLowerCase()))
    })


  return (<>
          {isLoading && isSuccess ? <div>Loading..</div> :
         data?.length ? <Result posts={data}/> :
            <><Main setSearchValue={setSearchValue}  refetch={refetch} searchValue={searchValue} />
                {isSuccess && <div>Not found333333333333333</div>}

            </>


          }



  </>

  );
}
export default App;


  //  <div class="">
      {/* <Header/>
       <Menu/> */}

       {/* <Content/> */}
  // </div>