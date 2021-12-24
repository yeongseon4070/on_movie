import React, { useEffect, useState } from 'react';
import "./App.css"
//{}안에는 함수값들이 들아간다 유저스테이트를 선언해준다.
//3단계에서는 useEffect를 선언해준다.

const APP = () => {
    const [onmine, setOnmine] = useState([])
    //유저스테이트 값들의 함수 이름들과 명칭과 텍스트 드으이 콘텐츠 들을 입력해준다.
    //표시될 콘텐츠는 임의로 입력해준다.

    useEffect(() => {
        console. log("onhi")
    },[])

    return (
        <div>
          <h1>
            {onmine. length}
              {/*해당 함수의 데이터가 몇개인가에 대한 부분을 뿌려주는 함수 선언*/}
          </h1>
        </div>
    );
};

export default APP;
