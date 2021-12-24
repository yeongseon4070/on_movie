import React, { useEffect, useState } from 'react';
import "./App.css"
import axios from "axios";
//{}안에는 함수값들이 들아간다 유저스테이트를 선언해준다.
//3단계에서는 useEffect를 선언해준다.

const APP = () => {
    const [onmine, setOnmine] = useState([])
    //유저스테이트 값들의 함수 이름들과 명칭과 텍스트 드으이 콘텐츠 들을 입력해준다.
    //표시될 콘텐츠는 임의로 입력해준다.

    const getOnmine = async () => {
        await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            .then(onhi =>{
                console. log(onhi.data.results)
                setOnmine(onhi.data.results)
            })
            .catch(err => console. log(err.message))
    }

    useEffect(() => {
            getOnmine()
    },[])
    //3초위에 해당 문구를 노출하겠다는 명령어 입니다.

    return (
        <div>
          <h1>
            {onmine.length}
              {/*해당 함수의 데이터가 몇개인가에 대한 부분을 뿌려주는 함수 선언*/}
          </h1>
        </div>
    );
};

export default APP;
