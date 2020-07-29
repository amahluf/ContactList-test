import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { ChevronDownIcon, ChevronUpIcon } from "@primer/octicons-react";
import axios from "axios";
import Paginator from "../Paginator/Paginator";
import {
  Spinner,
  FormControl,
  Button,
  InputGroup,
  Card,
} from "react-bootstrap";
import AddUserForm from "../AddUserForm/AddUserForm";

const TableComponent = ({
  users,
  usersReserv,
  setUsersReserv,
  sortUsersById,
  sortUsersByString,
  setUsers,
  onFindeUsers,
  addNewUser,
  dataSize
}) => {
 
  // LOCAL STATE FOR ADD USER BLOCK
  const[addUserBlock,setAddUsersBlock] = useState(false)
  // LOCAL STATE FOR SORT
  const [onIdClickStatus, setIdClickStatus] = useState(true);
  const [onFirstNameClickStatus, setFirstNameClickStatus] = useState(true);
  const [onLastNameClickStatus, setLastNameClickStatus] = useState(true);
  const [onEmailClickStatus, setEmailClickStatus] = useState(true);
  const [onPhoneClickStatus, setPhoneClickStatus] = useState(true);
  // LOCAL STATE FOR LOADING
  const [loading, setLoading] = useState(false);
  // LOCAL STATE FOR SERCH FORM
  const [searchValue, setSearchValue] = useState("");
  // LOCAL STATE FOR PEGINATE
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);
  // LOCAL STATE FOR USERS DETAILS BLOCK
  const [userDetails, setUserDetails] = useState({});
  const [userDetailsVisibility, setUserDetailsVisibility] = useState(false);
  // PAGINATE
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItem = users.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setUserDetailsVisibility(false);
  };
  // GET USERS
  useEffect(() => {
    const getBigData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
        );
        setUsers(res.data);
        setUsersReserv(res.data);
        setLoading(false);
      } catch (e) {
        throw new Error(e);
      }
    };
    const getSmallData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
        );
        setUsers(res.data);
        setUsersReserv(res.data);
        setLoading(false);
      } catch (e) {
        throw new Error(e);
      }
    };
    dataSize === "big"?
    getBigData()
    :
    getSmallData();
  }, []);
  // SEARCH FORM
  const changeSearch = (e) => {
    setSearchValue(e.target.value);
    if (!e.target.value.length) {
      setUsers(usersReserv);    
    }
  };
  // SEARCH USERS
  const findUsers = () => {
      onFindeUsers(searchValue);
      paginate(1);
      setUserDetailsVisibility(false);
    };   
  // SORT USERS
  const sortById = () => {
    sortUsersById(onIdClickStatus);
    setIdClickStatus(!onIdClickStatus);
  };
  const sortByName = (firstName) => {
    sortUsersByString(onFirstNameClickStatus,firstName);
    setFirstNameClickStatus(!onFirstNameClickStatus);
    
  };
  const sortByLastName = (lastName) => {
    sortUsersByString(onLastNameClickStatus,lastName);
    setLastNameClickStatus(!onLastNameClickStatus);
    
  };
  const sortByEmail = (email) => {
    sortUsersByString(onEmailClickStatus,email);
    setEmailClickStatus(!onEmailClickStatus);
    
  };  
  const sortByPhone = (phone) => {
    sortUsersByString(onPhoneClickStatus,phone);
    setPhoneClickStatus(!onPhoneClickStatus);
  };
  
  return (
    <div className="table-wrapper ">
      {loading ? 
        <div className="preloader">
          <h4>Please wait...</h4>
          <Spinner animation="grow" />
        </div>
        : 
        <div>
          <div className="search-and-add">
            <Button variant="dark" className='mb-2' onClick={()=>setAddUsersBlock(true)} >ДОБАВИТЬ</Button>
            <div className="serch-form">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Введите текст"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  onChange={changeSearch}
                />
                <InputGroup.Append>
                  <Button onClick={findUsers} variant="dark">
                    НАЙТИ
                  </Button>
                </InputGroup.Append>
              </InputGroup>
            </div>  
          </div>
          {users.length !== 0 ?
          <Table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th onClick={sortById} className="th-title">
                  <span>id</span>
                  {onIdClickStatus === true ? (
                    <ChevronDownIcon size={16} />
                  ) : (
                    <ChevronUpIcon size={16} />
                  )}
                </th>
                <th onClick={()=>sortByName('firstName')} className="th-title">
                  <span>First Name</span>
                  {onFirstNameClickStatus === true ? (
                    <ChevronDownIcon size={16} />
                  ) : (
                    <ChevronUpIcon size={16} />
                  )}
                </th>
                <th onClick={()=>sortByLastName('lastName')} className="th-title">
                  <span>Last Name</span>
                  {onLastNameClickStatus === true ? (
                    <ChevronDownIcon size={16} />
                  ) : (
                    <ChevronUpIcon size={16} />
                  )}
                </th>
                <th onClick={()=>sortByEmail('email')} className="th-title">
                  <span>Email</span>
                  {onEmailClickStatus === true ? (
                    <ChevronDownIcon size={16} />
                  ) : (
                    <ChevronUpIcon size={16} />
                  )}
                </th>
                <th onClick={()=>sortByPhone('phone')} className="th-title">
                  <span>Phone</span>
                  {onPhoneClickStatus === true ? (
                    <ChevronDownIcon size={16} />
                  ) : (
                    <ChevronUpIcon size={16} />
                  )}
                </th>
              </tr>
            </thead>      
            <tbody>
              {currentItem.map((i) => (
                <tr key={i.id + i.phone}
                    onClick={() => {
                    setUserDetails(i);
                    setUserDetailsVisibility(true);                   
                  }}>
                  <td>{i.id}</td>
                  <td>{i.firstName}</td>
                  <td>{i.lastName}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          : <h4>Пользователь не найден :(</h4> 
          }
          <Paginator itemsPerPage={itemsPerPage} totalItems={users.length} paginate={paginate}/>
          <div className={userDetailsVisibility ? "user-details" : "user-details--hide"}>
            {userDetails.firstName ? 
              <Card style={{ width: "20rem" }} >
                <Card.Body>
                  <Card.Text>
                     Выбран пользователь <b>{userDetails.firstName}</b>  <b>{userDetails.lastName}</b>
                  </Card.Text>
                  <Card.Text>
                    Описание:
                    <textarea defaultValue={userDetails.description}></textarea>
                  </Card.Text>
                  <Card.Text>
                    Адрес проживания: <b>{userDetails.address.streetAddress}</b>
                  </Card.Text>
                  <Card.Text>
                    Город: <b>{userDetails.address.city}</b>
                  </Card.Text>
                  <Card.Text>
                    Провинция/штат: <b>{userDetails.address.state}</b>
                  </Card.Text>
                  <Card.Text>
                    Индекс: <b>{userDetails.address.zip}</b>
                  </Card.Text>
                </Card.Body>
                <Button variant="danger" 
                  onClick={()=>setUserDetailsVisibility(false)}>
                  Close
                </Button> 
              </Card>
            : 
              "Loading..."
            }
          </div>
        </div>
      }
      <AddUserForm setAddUsersBlock={setAddUsersBlock} addNewUser={addNewUser} addUserBlock={addUserBlock}/>
      
    </div>
  );
};

export default TableComponent;
