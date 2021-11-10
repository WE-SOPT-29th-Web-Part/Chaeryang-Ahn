import axios from 'axios';
import React from 'react';

const SearchBar = ({ setUserInfo }) => {
    const [user, setUser] = useState("");
    const handleChange = () => {
        setUser(e.target.value);
    };
    const handleSubmit = async (e) => {
    e.preventDefault();
        //서버에 있는 데이터 받아오기
    const { data } = await axios.get("https://api.github.com/users/${user}`");
    setUserInfo(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input 
            value={user}
            onChange={handleChange}
            type="text" 
            placeholder="Github을 검색해보세요" 
            />
        </form>
    );
};

export default SearchBar;
const Input = styled.input`
  width: 320px;
  height: 57px;
  padding: 16px;
  color: rgb(229, 230, 231);
  background-color: rgb(36, 39, 43);
  outline: 0;
  border: 8px solid rgba(105, 105, 105, 0.5);
  border-radius: 15px;
`;