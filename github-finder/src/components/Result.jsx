import React from 'react';
import styled from 'styled-components'

const Result = ({userInfo}) => {
    //avartar_url
    //bio
    //followers
    //following
    //login
    //name
    //public_repos
    //url

    return userInfo.avatar_url ? (

        <Root>
            <img src={userInfo.avatar_url} alt="" />
            <h3>{userInfo.name}</h3>
            <h4>{userInfo.login}</h4>
            <p>{userInfo.bio}</p>
            <a href={userInfo.url}>Visit Github</a>
            <Ul>
                <li>
                    <strong>Followers</strong>
                    {userInfo.followers}
                </li>
                <li>
                    <strong>Following</strong>
                    {userInfo.following}
                </li>
                <li>
                    <strong>Repos</strong>
                    {userInfo.public_repos}
                </li>
            </Ul>
        </Root>
    ) : (
        <React.Fragment></React.Fragment>
        //태그가 없는 태그
    );
};

export default Result;

const Root = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 16px;
  background-color: rgb(44, 48, 53);
  width: 390px;
  border-radius: 20px;
  position: relative;

    & > img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-top: 30px;
  }
  & > h3 {
    font-size: 24px;
    margin-top: 24px;
    font-weight: bold;
  }
  & > h4 {
    font-size: 14px;
    margin-top: 5px;
  }
  & > p {
    padding: 20px 45px;
    text-align: center;
  }
  & > a {
    text-decoration: none;
    color: white;
    border: 1px solid whitesmoke;
    padding: 8px;
    border-radius: 4px;
    &:hover {
      background-color: purple;
      color: rgb(44, 48, 53);
    }
;

/* 에러...
const Ul = styled.ul`
  display: flex;
  width: 100%;
 
  & > li {
    width: 130px;
    height: 59px;
     */