import React, { useState } from 'react';
import "./App.css"
//{}안에는 함수값들이 들아간다 유저스테이트를 선언해준다.

const APP = () => {
    const [onmine, setOnmine] = useState("오늘의 행복은")
    //유저스테이트 값들의 함수 이름들과 명칭과 텍스트 드으이 콘텐츠 들을 입력해준다.
    //표시될 콘텐츠는 임의로 입력해준다.
    return (
        <div>
          <h1>
            {onmine}
          </h1>
        </div>
    );
};

export default APP;
